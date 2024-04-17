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
		container: ` h-screen overflow-hidden relative `,
		main: `h-screen overflow-auto pb-36 md:pb-8`,
		mainContainer: `flex flex-col h-screen bg-slate-100 pl-0 w-full pb-4`
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




<div class={style.container} >
	<TopBar />
	<div class="flex items-start">

		<Overlay />
		<Sidebar mobileOrientation="end" />
		<div class={style.mainContainer}>
			
			<main class={style.main}>
				<AnimatedRoute>
				<slot />
			</AnimatedRoute>
			</main>
		</div>
	</div>
</div>




<!-- style="background: -webkit-linear-gradient(90deg, hsla(169, 64%, 44%, 1) 0%, hsla(202, 99%, 37%, 1) 100%);" -->