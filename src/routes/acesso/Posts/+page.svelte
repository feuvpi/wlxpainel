<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    let items = [
    {
      title: "Tailwind Rocks!",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque a ipsam aliquid omnis, beatae possimus recusandae illum rem. Minima sequi voluptas repudiandae id? Quae, facere quam suscipit sed, aperiam sapiente pariatur soluta enim perferendis illum veniam excepturi doloribus ducimus voluptatibus numquam officiis expedita culpa hic sequi quasi reprehenderit iste obcaecati nostrum. Consequuntur aliquam, assumenda architecto animi veniam dolore dolor?",
      date: "2023-02-20",
      image: "https://plus.unsplash.com/premium_photo-1663045286919-b66b756d93be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // assuming byte[] is converted to a URL
    },
    {
      title: "Another Title",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque a ipsam aliquid omnis, beatae possimus recusandae illum rem. Minima sequi voluptas repudiandae id? Quae, facere quam suscipit sed, aperiam sapiente pariatur soluta enim perferendis illum veniam excepturi doloribus ducimus voluptatibus numquam officiis expedita culpa hic sequi quasi reprehenderit iste obcaecati nostrum. Consequuntur aliquam, assumenda architecto animi veniam dolore dolor?",
      date: "2023-02-25",
      image: "https://plus.unsplash.com/premium_photo-1663045286919-b66b756d93be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Yet Another Title",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque a ipsam aliquid omnis, beatae possimus recusandae illum rem. Minima sequi voluptas repudiandae id? Quae, facere quam suscipit sed, aperiam sapiente pariatur soluta enim perferendis illum veniam excepturi doloribus ducimus voluptatibus numquam officiis expedita culpa hic sequi quasi reprehenderit iste obcaecati nostrum. Consequuntur aliquam, assumenda architecto animi veniam dolore dolor?",
      date: "2023-03-01",
      image: "/images/image3.jpg"
    }
  ];
</script>



<div class="bg-slate-200">
    <h1 class="sticky top-0 font-bold pt-6 text-4xl font-mono text-left mx-12">Informativo Weblynx</h1>
    {#each items as item}
    <div class="sticky top-0 h-screen flex-col items-center justify-center flex w-full ">
        <div class="border-2 flex flex-col justify-center bg-gray-100 p-5 mb-10 w-4/5">
            <img src={item.image} alt="postImage" class="mb-2 h-96" />
            <h1 class="font-bold text-2xl mb-2 mt-2">{item.title}</h1>
            <p class="my-3">{item.description}</p>
            <p class="text-sm text-gray-500">{item.date}</p>
            <button class="place-self-right flex text-white w-fit font-semibold bg-blue-600 self-right hover:bg-blue-800 p-2 my-1 rounded">EDITAR</button>
          </div>
    </div>
    {/each}</div>
