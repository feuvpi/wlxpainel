<script lang="ts">
import Select from '$lib/components/Select.svelte'
import Button from './ui/button/button.svelte';
import { Input } from "$lib/components/ui/input/index.js";
import { Label } from "$lib/components/ui/label/index.js";
import { Checkbox } from "$lib/components/ui/checkbox/index.js";
import * as Dialog from "$lib/components/ui/dialog/index.js";
// import * as Drawer from "$lib/components/ui/drawer/index.js";
import { mediaQuery } from 'svelte-legos';
import Drawer from "$lib/components/Drawer.svelte"


const isDesktop = mediaQuery("(min-width: 768px)");
let open = false;

export let p: { nomeFantasia: any; razaoSocial: any; cnpj: any; };
  let clientId = ""
  $: nomeFantasia = p ? p.nomeFantasia : "";
  $: razaoSocial = p ? p.razaoSocial : "";
  $: cnpj = p ? p.cnpj : "";

  let cliente: any = null;
  let checked = false;
</script>

<div class="flex items-center justify-between bg-gray-200 p-4 rounded mx-12">
    <!-- Search Input with SVG Icon -->
    <div class="relative flex items-center w-full max-w-md">
      <svg class="absolute left-3 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.2-5.2m.7-3.5a8.5 8.5 0 11-15.3-5.8 8.5 8.5 0 0115.3 5.8z"></path>
      </svg>
      <Input type="text" placeholder="Search..." class="pl-10 w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
    </div>
  
    <!-- Select Component -->
    <div class="mx-4"><Select></Select></div>
    
  
    <!-- Button -->
<Drawer {cliente}/>
  </div>
