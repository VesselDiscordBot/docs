import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Vessel',
			social: {
				github: 'https://github.com/VesselDiscordBot/Vessel',
				discord: 'https://discord.gg/KbevTpZxxz'
			},
			sidebar: [
				{
					label: 'Admin Commands',
					autogenerate: {directory: 'admin'}
				},
				{
					label: 'Config Commands',
					collapsed: true,
					autogenerate: { directory: 'config' },
				},
				{
					label: 'Fun Commands',
					collapsed: true,
					autogenerate: { directory: 'fun' },
				},
				{
					label: 'Info Commands',
					collapsed: true,
					autogenerate: { directory: 'info' },
				},
				{
					label: 'Mod Commands',
					collapsed: true,
					autogenerate: { directory: 'mod' },
				},

				{
					label: 'Reference',
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
