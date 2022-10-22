<script>
  export let value;
  export let handleSubmit;
</script>

<div class="flex flex-col shadow-lg rounded-tl-lg rounded-tr-lg w-96">
  <div
    class="rounded-tl-lg rounded-tr-lg py-6 px-14 bg-gradient-to-tr  from-blue-900 to-blue-700 text-center space-y-8"
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
      } w-full py-3 bg-blue-600 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent shadow-lg`}
    >
      Añadir
    </button>
  </form>
</div>