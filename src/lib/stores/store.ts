import { writable } from 'svelte/store';

const sidebarOpen = writable(false);

const openSidebar = () => {
	console.log("entrei243")
	sidebarOpen.update(() => true);
};

const closeSidebar = () => {
	sidebarOpen.update(() => false);
};

export { sidebarOpen, openSidebar, closeSidebar };