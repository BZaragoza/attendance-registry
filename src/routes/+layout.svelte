<script>
  import { SvelteToast } from '@zerodevx/svelte-toast'
  
  import "../app.css"

  const options = {
    position: 'top-right',
    toastBackground: 'white',
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    // closeButton: 'button',
    icon: true,
    rtl: false,
  }

  const beforeUnload = (event) => {
    event.preventDefault();
    event.returnValue = "";
    return "";
  }
</script>

<!-- <svelte:window on:beforeunload={beforeUnload} /> -->

<slot></slot>
<SvelteToast {options} />

<style global>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
</style>