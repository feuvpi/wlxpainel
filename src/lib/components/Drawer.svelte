<script lang="ts">
  import Select from '$lib/components/Select.svelte'
  import Button from './ui/button/button.svelte';
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Checkbox } from "$lib/components/ui/checkbox/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import * as Drawer from "$lib/components/ui/drawer/index.js";
    import { mediaQuery } from 'svelte-legos';
  
  const isDesktop = mediaQuery("(min-width: 768px)");
  let open = false;
  
  export let cliente: { nomeFantasia: any; razaoSocial: any; cnpj: any; };
    let clientId = ""
    $: nomeFantasia = cliente ? cliente.nomeFantasia : "";
    $: razaoSocial = cliente ? cliente.razaoSocial : "";
    $: cnpj = cliente ? cliente.cnpj : "";

    $: title = cliente ? "Editar Cliente" : "Adicionar Cliente";
    $: btnTitle = cliente ? "Editar" : "Adicionar";
  
    let checked = false;
  </script>

{#if $isDesktop}
  <Dialog.Root bind:open>
    <Dialog.Trigger asChild let:builder>
      <Button variant="outline" builders={[builder]}>{btnTitle}</Button>
    </Dialog.Trigger>
    <Dialog.Content class="sm:max-w-[425px]">
      <Dialog.Header>
        <Dialog.Title>{title}</Dialog.Title>
        <!-- <Dialog.Description>
          Adiciona
        </Dialog.Description> -->
      </Dialog.Header>
      <form method="POST" class="grid items-start gap-4">
        <div class="grid gap-2">
          <Label for="Nome">Nome Fantasia</Label>
          <Input class=" bg-slate-100" name="nomeFantasia" type="text" id="Nome" value={nomeFantasia} />
        </div>
        <div class="grid gap-2">
          <Label for="razao">Razão Social</Label>
          <Input name="razaoSocial" id="razao" value={razaoSocial} />
        </div>
        <div class="grid gap-2">
          <Label for="cnpj">CNPJ</Label>
          <Input name="cnpj" id="cnpj" value={cnpj} />
        </div>
        <div class="grid gap-2">
          <Label for="cnpj">CNPJ</Label>
          <Input name="cnpj" id="cnpj" value={cnpj} />
        </div>
        <div class="flex items-center space-x-2">
          <Checkbox name='removido' id="ativo" bind:checked />
          <Label
          for="ativo"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Ativo
        </Label>
        </div>

      </form>
    </Dialog.Content>
  </Dialog.Root>
{:else}
  <Drawer.Root bind:open>
    <Drawer.Trigger asChild let:builder>
      <Button variant="outline" builders={[builder]}>{btnTitle}</Button>
    </Drawer.Trigger>
    <Drawer.Content>
      <Drawer.Header class="text-left">
        <Drawer.Title class='text-center'>{title}</Drawer.Title>
        <!-- <Drawer.Description>
          Make changes to your profile here. Click save when you're done.
        </Drawer.Description> -->
      </Drawer.Header>
      <form class="grid items-start gap-4 px-2">
        <div class="grid gap-2">
          <Label for="Nome">Nome Fantasia</Label>
          <Input  type="text" id="Nome" value="Nome Fantasia" />
        </div>
        <div class="grid gap-2">
          <Label for="razao">Razão Social</Label>
          <Input id="razao" value="Razão Social" />
        </div>
        <div class="grid gap-2">
          <Label for="cnpj">CNPJ</Label>
          <Input id="cnpj" value="CNPJ" />
        </div>
        <div class="flex items-center space-x-2">
          <Checkbox class='w-8 h-8' name='removido' id="ativo" bind:checked />
          <Label
          for="ativo"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Ativo
        </Label>
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