import FileSaver from 'file-saver'
import { toast } from '@zerodevx/svelte-toast'

import SuccessfulToast from '../components/successful_toast.svelte'
import FailToast from '../components/fail_toast.svelte'

const toastOptions = {
  duration: 2000,
  dismissable: false,
  theme: {
    '--toastBarHeight': '0',
    '--toastPadding': '0',
    '--toastMsgPadding': '0',
    '--toastBackground': 'white',
    '--toastBorderRadius': '0.5rem'
  }
}

const registryKey = 'matriculas'

const matriculas = new Set()

// let matriculas = [
// '309016',
// '313708',
// '329738',
// '335814',
// '335866',
// '335870',
// '335872',
// '338830',
// '338881',
// '338980',
// '339064',
// '343383',
// '344131'
// ]

export const loadRegistry = () => {
  const raw = localStorage.getItem(registryKey)
  const registry = raw === '{}' ? [] : JSON.parse(raw)

  matriculas.clear()
  registry?.forEach(e => matriculas.add(e))
}

export async function post ({ matricula }) {
  matriculas.add(matricula)
  const toMemArray = JSON.stringify(Array.from(matriculas))
  localStorage.setItem(registryKey, toMemArray)

  // console.log(matriculas)
  return true
}

export async function get () {
  const raw = Array.from(matriculas).join('\n')

  return {
    data: raw
  }
}

export const downloadFile = async (name = 'download.csv') => {
  const { data } = await get()
  const blob = new Blob([data], { type: 'text/plain;charset=utf-8' })
  FileSaver.saveAs(blob, name)

  cleanRegistry()
}

export const cleanRegistry = () => {
  matriculas.clear()
  localStorage.removeItem(registryKey)
}

export const triggerToast = (validSubmit) => {
  const toastNeeded = validSubmit ? SuccessfulToast : FailToast

  toast.push({
    component: {
      src: toastNeeded,
      sendIdTo: 'toastId'
    },
    ...toastOptions
  })
}
