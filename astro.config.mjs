// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { starlightBasePath } from "starlight-base-path";

const base = '/webdav-tutorial';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'WebDAV tutorial',
			favicon: '/favicon.png',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/vanvuongngo/webdav-tutorial' },
				{ icon: 'linkedin', label: 'Linkedin', href: 'https://www.linkedin.com/in/vanvuong-ngo/' },
			],
			sidebar: [
				{
					label: 'Leitfaden',
					translations: {
						'en': 'Guides'
					},
					items: [
						{ slug: 'guides/get-started' },
						{ slug: 'guides/secure' },
						{ slug: 'guides/backup-restore' },
					],
				},
				{
					label: 'Installation',
					translations: {
						'en': 'Installation'
					},
					items: [
						{ slug: 'installation/install-on-linux' },
						{ slug: 'installation/install-on-proxmox' },
						{ slug: 'installation/install-on-k8s' },
					],
				},				{
					label: 'Clients einrichten',
					translations: {
						'en': 'Setup clients'
					},
					items: [{ autogenerate: { directory: 'client-setup' } }],
				},
				{
					label: 'Referenz',
					translations: {
						'en': 'Reference'
					},
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
			defaultLocale: 'root',
			locales: {
				// English docs in `src/content/docs/en/`
				en: {
					label: 'English',
					lang: 'en',
				},
				'root': {
					label: 'Deutsch',
					lang: 'de',
				},
			},
			plugins: [starlightBasePath()],
			customCss: [
				'./src/styles/custom.css',
			],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '192x192',
						href: 'favicon-192.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '512x512',
						href: 'favicon-512.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'manifest',
						href: `${base}/manifest.json`,
					},
				},
			],
		}),
	],
	base,
});
