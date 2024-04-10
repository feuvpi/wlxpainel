<script lang="ts">
import * as Select from "$lib/components/ui/select/index.js";
import { Input } from "$lib/components/ui/input/index.js";
import { mediaQuery } from 'svelte-legos';
import Drawer from "$lib/components/Drawer.svelte"
// import type { ListaDeCliente } from '$lib/interfaces/ListaDeCliente';
import type { AggregatedData } from '$lib/interfaces/AggregatedData';

export let AggregatedData: AggregatedData[] | undefined;

const isDesktop = mediaQuery("(min-width: 768px)");
let open = false;

export let p: { nomeFantasia: any; razaoSocial: any; cnpj: any; };
  let clientId = ""
  $: nomeFantasia = p ? p.nomeFantasia : "";
  $: razaoSocial = p ? p.razaoSocial : "";
  $: cnpj = p ? p.cnpj : "";

  let cliente: any = null;
  let checked = false;

  const fruits = [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "blueberry", label: "Blueberry" },
      { value: "grapes", label: "Grapes" },
      { value: "pineappyle", label: "Pineapple" }
    ];
</script>

<div class="flex items-center justify-between bg-gray-200 p-4 rounded mx-12">
    <!-- Search Input with SVG Icon -->
    <div class="flex gap-2">
      <div class="relative flex items-center w-full max-w-md">
        <svg class="absolute left-3 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.2-5.2m.7-3.5a8.5 8.5 0 11-15.3-5.8 8.5 8.5 0 0115.3 5.8z"></path>
        </svg>
        <Input type="text" placeholder="Search..." class="w-full border border-gray-300 rounded-md py-2 px-10 focus:outline-none focus:border-blue-500" />
      </div>
    
      <!-- Select Component -->
      <!-- <div class="mx-4"><Select></Select></div> -->
      <Select.Root >
        <Select.Trigger class="w-[180px]">
          <Select.Value placeholder="Status" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            {#each fruits as fruit}
              <Select.Item value={AggregatedData} label={AggregatedData?.toString()}
                >{fruit.label}</Select.Item
              >
            {/each}
          </Select.Group>
        </Select.Content>
        <Select.Input name="favoriteFruit" />
      </Select.Root>
  
      <Select.Root >
        <Select.Trigger class="w-[180px]">
          <Select.Value placeholder="Mês" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            {#each fruits as fruit}
              <Select.Item value={fruit.value} label={fruit.label}
                >{fruit.label}</Select.Item
              >
            {/each}
          </Select.Group>
        </Select.Content>
        <Select.Input name="favoriteFruit" />
      </Select.Root>

    </div>

  
    <!-- Button -->
<Drawer {cliente}/>
  </div>
