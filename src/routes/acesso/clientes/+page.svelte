<script lang="ts">
  import type { PageData } from './$types';
  import WlxTable from "$lib/components/WlxTable.svelte";
	import { Drama } from 'lucide-svelte';
  import type { Cliente } from '$lib/utils/types';

  
    
    export let data: PageData;
    const clientes = data.clientes;
    console.log(clientes)

    import * as Dialog from "$lib/components/ui/dialog/index.js";
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { mediaQuery } from "svelte-legos";
 
  let open = false;
  const isDesktop = mediaQuery("(min-width: 768px)");


  let p: { nomeFantasia: any; razaoSocial: any; cnpj: any; };

  let clientId = ""
  $: nomeFantasia = p ? p.nomeFantasia : "";
  $: razaoSocial = p ? p.razaoSocial : "";
  $: cnpj = p ? p.cnpj : "";




  // import Box from './inp.svelte'
	// let p = 'MyName'
	// $: nameUpper = p.toUpperCase()
</script>

<div class="overflow-hidden min-w-full pl-2 mt-4 ml-8">

{#if $isDesktop}
  <Dialog.Root bind:open>
    <Dialog.Trigger asChild let:builder>
      <Button variant="outline" builders={[builder]}>Adicionar</Button>
    </Dialog.Trigger>
    <Dialog.Content class="sm:max-w-[425px]">
      <Dialog.Header>
        <Dialog.Title>Adicionar Cliente</Dialog.Title>
        <Dialog.Description>
          Adiciona
        </Dialog.Description>
      </Dialog.Header>
      <form class="grid items-start gap-4">
        <div class="grid gap-2">
          <Label for="Nome">Nome Fantasia</Label>
          <Input type="text" id="Nome" value={nomeFantasia} />
        </div>
        <div class="grid gap-2">
          <Label for="razao">Razão Social</Label>
          <Input id="razao" value={razaoSocial} />
        </div>
        <div class="grid gap-2">
          <Label for="cnpj">CNPJ</Label>
          <Input id="cnpj" value={cnpj} />
        </div>
        <Button type="submit">Salvar</Button>
      </form>
    </Dialog.Content>
  </Dialog.Root>
{:else}
  <Drawer.Root bind:open>
    <Drawer.Trigger asChild let:builder>
      <Button variant="outline" builders={[builder]}>Edit Profile</Button>
    </Drawer.Trigger>
    <Drawer.Content>
      <Drawer.Header class="text-left">
        <Drawer.Title>Adicionar Cliente</Drawer.Title>
        <!-- <Drawer.Description>
          Make changes to your profile here. Click save when you're done.
        </Drawer.Description> -->
      </Drawer.Header>
      <form class="grid items-start gap-4 px-2">
        <div class="grid gap-2">
          <Label for="Nome">Nome Fantasia</Label>
          <Input type="text" id="Nome" value="Nome Fantasia" />
        </div>
        <div class="grid gap-2">
          <Label for="razao">Razão Social</Label>
          <Input id="razao" value="Razão Social" />
        </div>
        <div class="grid gap-2">
          <Label for="cnpj">CNPJ</Label>
          <Input id="cnpj" value="CNPJ" />
        </div>
        <Button type="submit">Salvar</Button>
      </form>
      <Drawer.Footer class="pt-2">
        <Drawer.Close asChild let:builder>
          <Button variant="outline" builders={[builder]}>Cancel</Button>
        </Drawer.Close>
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer.Root>
{/if}

<!-- component -->
<div class="overflow-hidden"><WlxTable bind:cliente2={p} {clientes} ></WlxTable></div>

</div>



