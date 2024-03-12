<script>
	import 'tailwindcss/tailwind.css';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import TopBar from '$lib/components/Topbar.svelte';
	import Overlay from '$lib/components/Overlay.svelte';
	import Sidebar from '$lib/components/Sidebar/Sidebar.svelte'
	import { closeSidebar, sidebarOpen } from '$lib/stores/store';
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';

	const style = {
		container: `bg-slate-400 h-screen overflow-hidden relative `,
		main: `h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 lg:px-4`,
		mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-20 lg:space-y-4`
	};

	if (browser) {
		page.subscribe(() => {
			// close Sidebar on route changes when sidebar is open
			if ($sidebarOpen) {
				closeSidebar();
			}
		});
	}
</script>


<AnimatedRoute>

<div class={style.container} >
	<div class="flex items-start">

		<Overlay />
		<Sidebar mobileOrientation="end"  />
		<div class={style.mainContainer}>
			<TopBar />
			<main class={style.main}>
				<slot />
			</main>
		</div>
	</div>
</div>

</AnimatedRoute>


<!-- style="background: -webkit-linear-gradient(90deg, hsla(169, 64%, 44%, 1) 0%, hsla(202, 99%, 37%, 1) 100%);" -->