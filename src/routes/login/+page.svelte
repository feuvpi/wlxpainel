<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<!-- component -->
<div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style="background: -webkit-linear-gradient(90deg, hsla(169, 64%, 44%, 1) 0%, hsla(202, 99%, 37%, 1) 100%);">
    <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div class="text-white">
        <div class="mb-8 flex flex-col items-center">
            <img src="src/lib/shared/logo_weblynx.png" width="300" alt="Logo" />
        </div>
        <form action="/login" method="POST">
          <div class="mb-4 text-lg flex justify-center">
            <input class="focus:border-teal-600 border-4 border-transparent rounded-3xl bg-sky-400 bg-opacity-50 px-10 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="email" placeholder="id@email.com" />
          </div>
  
          <div class="flex justify-center mb-4 text-lg">
            <input class="focus:border-teal-600 border-transparent border-4 rounded-3xl  bg-sky-400 bg-opacity-50 px-10 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="password" placeholder="*********" />
          </div>
          <div class="mt-8 flex justify-center text-lg text-black">
            <button type="submit" class="rounded-3xl bg-sky-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>