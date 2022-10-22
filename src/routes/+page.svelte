<script>
  import { onMount } from "svelte";

  import DownloadButton from "../components/download_button.svelte";
  import Header from "../components/header.svelte";

  import { post, downloadFile, triggerToast, loadRegistry } from "./+page.js";
  import { validateInput } from "../helpers";

  $: value = "";

  onMount(() => {
    loadRegistry();
  });

  const handleSubmit = () => {
    const isValidInput = validateInput(value);
    triggerToast(isValidInput);

    if (isValidInput) {
      post({ matricula: value });
    }
    value = "";
  };

  const triggerDownload = () => {
    downloadFile("matriculas.csv");
  };
</script>

<div>
  <div class="min-h-screen min-w-screen flex flex-col bg-slate-200">
    <Header />
    <!-- Form Box -->
    <div class="z-10 flex-1 flex flex-col h-full justify-center items-center">
      <div class="flex flex-col shadow-lg rounded-tl-lg rounded-tr-lg w-96">
        <div
          class="rounded-tl-lg rounded-tr-lg py-6 px-14 bg-gradient-to-tr  from-teal-700 to-teal-600 text-center space-y-8"
        >
          <h4 class="text-white text-center font-bold text-xl">
            Registro de Asistencia
          </h4>
        </div>
        <form
          on:submit|preventDefault={() => {
            handleSubmit();
          }}
          class="flex flex-col py-6 px-8 space-y-5 bg-white rounded-bl-lg rounded-br-lg"
        >
          <input
            bind:value
            type="text"
            placeholder="Matrícula"
            class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
          />
          <button
            disabled={value.length == 0}
            type="submit"
            class={`${
              value.length == 0 ? "disabled:opacity-75" : ""
            } w-full py-3 bg-amber-600 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent shadow-lg`}
          >
            Añadir
          </button>
        </form>
      </div>
    </div>
    <DownloadButton on:click={triggerDownload} />
  </div>
</div>

<!-- <div class="blur-sm	bg-[url('/castor.png')] bg-no-repeat bg-cover bg-center bg-fixed z-0 absolute bg-red-500 h-full aspect-square rounded-full" /> -->
