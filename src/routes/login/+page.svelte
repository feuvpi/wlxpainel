<script lang="ts">
    import type { PageData } from './$types';
    import Logo from '$lib/shared/logo-weblynx-branca.png';
    export let data: PageData;
    export let form;
    let previousData = data;
    $: {
      console.log(data)
    if (data !== previousData) {
      console.log(data)
      console.log('Data updated:', data);
      previousData = data; // Update the previousData variable
    }
  }

    
</script>

<!-- component -->
<div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style="background: -webkit-linear-gradient(90deg, hsla(169, 64%, 44%, 1) 0%, hsla(202, 99%, 37%, 1) 100%);">
    <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 pt-10 pb-4 shadow-lg backdrop-blur-md max-sm:px-8">
      <div class="text-white">
        <div class="mb-8 flex flex-col items-center">
            <img src="{Logo}" width="300" alt="Logo" />
        </div>
        <form class="h-56" action="/login" method="POST">
          <div class="mb-4 text-lg flex justify-center">
            <input class="focus:border-teal-600 border-4 border-transparent rounded-3xl bg-sky-400 bg-opacity-50 px-10 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="email" placeholder="Digite seu e-mail" />
          </div>
  
          <div class="flex justify-center mb-4 text-lg">
            <input class="focus:border-teal-600 border-transparent border-4 rounded-3xl  bg-sky-400 bg-opacity-50 px-10 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="password" placeholder="Digite sua senha" />
          </div>
          <div class="mt-8  flex text-center justify-center text-lg text-black">
            <button type="submit" class="mb-2 rounded-3xl bg-sky-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-cyan-600">Login</button>

          </div>
          {#if form?.fail}
          <p class="text-center text-sm text-red-400 font-bold italic">E-mail ou Senha inválidos.</p>
          <!-- {:else}
          <p class="text-center text-sm font-bold italic text-transparent">Weblynx</p> -->
         {/if}
        </form>
      </div>
    </div>
  </div>

