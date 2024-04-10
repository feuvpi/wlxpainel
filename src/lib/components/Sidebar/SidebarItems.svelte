<script>
	import { data } from './data';
	import { page } from '$app/stores';
	import { sidebarOpen } from '$lib/stores/store';

	const style = {
		title: `mx-4 text-sm whitespace-pre`,
		inactive: `text-white`,
		active: `font-medium text-white hover:text-blue-400`,
		link: `flex items-center justify-start my-2 p-4 w-full text-white hover:text-blue-200`,
		close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all text-white`,
		open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`
	};
</script>

<ul class="md:pl-5">
	<li>
		{#each data as item (item.title)}
			<a
				href={item.link}
				class={`${style.link} 
            ${item.link === $page.url.pathname ? style.active : style.inactive}`}
			>
				<span><svelte:component this={item.icon} /></span>
				<span class={`${style.title} ${$sidebarOpen ? style.open : style.close}`}>
					{item.title}
				</span>
			</a>
		{/each}
	</li>
</ul>