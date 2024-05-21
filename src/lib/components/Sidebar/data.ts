// @ts-nocheck
import HomeIcon from './icons/HomeIcon.svelte';
import BillsIcon from './icons/BillsIcon.svelte';
import AnalyticsIcon from './icons/AnalyticsIcon.svelte';
import MonitoringIcon from './icons/MonitoringIcon.svelte';
import DemographicsIcon from './icons/DemographicsIcon.svelte';
import ApplicationIcon from './icons/ApplicationIcon.svelte';
import DocumentationIcon from './icons/DocumentationIcon.svelte';

export const data = [
	{
		title: 'Dashboard',
		icon: HomeIcon,
		link: '/acesso/dashboard'
	},
	{
		title: 'Clientes',
		icon: ApplicationIcon,
		link: '/acesso/clientes'
	},
	{
		title: 'Produtos',
		icon: BillsIcon,
		link: '/acesso/produtos'
	},
	{
		title: 'Blog',
		icon: AnalyticsIcon,
		link: '/acesso/posts'
	}
];