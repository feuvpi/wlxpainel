<script>
// @ts-nocheck
	import { sidebarOpen } from '$lib/stores/store';
	import SidebarItems from './SidebarItems.svelte';
	import SidebarHeader from './SidebarHeader.svelte';

	const style = {
		mobileOrientation: {
			start: 'left-0 ',
			end: 'right-0 lg:left-0'
		},
		container: ` pb-32 lg:pb-12`,
		close: `duration-700 ease-out hidden transition-all lg:w-24`,
		default: `shadow-lg h-screen overflow-y-auto top-0 lg:absolute lg:block lg:z-40 z-10`,
		open: `absolute duration-500 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64`
	};

	export let mobileOrientation = 'end';
</script>

<aside
	class={`${style.default} ${style.mobileOrientation[mobileOrientation]}
       ${$sidebarOpen ? style.open : style.close} scrollbar`} style="background-image: linear-gradient(0deg, hsla(169, 64%, 44%, 1), hsla(202, 99%, 37%, 1));"
>
	<div class={style.container}>
		<SidebarHeader />
		<SidebarItems />
	</div>
</aside>

<style>
	.scrollbar::-webkit-scrollbar {
		width: 0;
		background: transparent; /* hide Sidebar scrollbar on Chrome, Opera and other webkit Browsers*/
	}
	.scrollbar {
		-ms-overflow-style: none;
	}
</style>