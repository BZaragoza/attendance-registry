<script>
  import DownloadIcon from 'svelte-icons/fa/FaDownload.svelte';
</script>

<div on:click on:keypress class="flex-2 w-full flex justify-end items-center p-4">
  <button
    class="h-12 w-12 p-3 bg-amber-600 text-white rounded-full text-sm focus:outline-none focus:border-transparent shadow-lg"
  >
    <DownloadIcon />
  </button>
</div>