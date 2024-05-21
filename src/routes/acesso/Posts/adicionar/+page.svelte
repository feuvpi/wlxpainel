<script lang="ts">
    let title: string = '';
    let content: string = '';
    let image: File | null = null;
  
    function handleImageChange(event: Event) {
    //   image = (event.target as HTMLInputElement).files[0];
    }
  
    function handleSubmit() {
      // Send the form data to your API or wherever you want
    }
  </script>
  

  <div class="mt-8 flex flex-col justify-center items-center">
    <h1 class="mb-8 sticky top-0 font-bold pt-6 text-4xl font-mono text-left mx-12">Adicionar Post</h1>
    <form class="w-3/5" on:submit={handleSubmit}>
      <div class="mb-6">
        <label for="title" class="block text-lg font-medium text-gray-800 mb-1">Titulo</label>
        <input type="text" id="title" bind:value={title} class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required>
      </div>
    
      <div class="mb-6">
        <label for="content" class="block text-lg font-medium text-gray-800 mb-1">Content</label>
        <textarea id="content" bind:value={content} class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" rows="6" required></textarea>
      </div>
    
      <div class="mb-6">
        <label for="image" class="block text-lg font-medium text-gray-800 mb-1">Image</label>
        <input type="file" id="image" on:change={handleImageChange} accept="image/*" class="w-full">
      </div>
    
      <div class="flex justify-end">
        <button type="submit" class="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none">Submit</button>
      </div>
    </form>


  </div>
