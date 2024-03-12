<script lang="ts">
  import type { PageData } from './$types';
  import WlxTable from "$lib/components/WlxTable.svelte";
	import { Drama } from 'lucide-svelte';
  import type { Cliente } from '$lib/utils/types';

  
    
    export let data: PageData;
    const clientes = data.clientes;
    console.log(clientes)
</script>

<!-- component -->
<div class="overflow-hidden"><WlxTable {clientes} ></WlxTable></div>



