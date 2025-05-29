import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "chenhenの博客",
	subtitle: "瓦学弟这招太狠了",
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/1.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Blue Archive", // Credit text to be displayed
			url: "https://bluearchive-cn.com/", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
		  src: '/favicon/favicon-renlai-32.ico',    // Path of the favicon, relative to the /public directory
		  theme: 'dark',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		  sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		}
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/ferxal", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/syg.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "chenHen",
	bio: "做个破程序，bug满天飞",
	links: [
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/id/chenhen987/",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/ferxal",
		},
		{
			name: "邮箱",
			icon: "fa6-solid:envelope",
			url: "mailto:ferxalhhh@gmail.com"
		}
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
