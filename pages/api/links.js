const links = [
	{
		_id: 'link_1',
		icon: {
			path: '/icons/vk-svgrepo-com.svg',
			width: 76        
		},
		gradient: {
			from: '#13E780',
			to: '#00bbd5'
		},
		link: 'https://vk.com/id576423006',
		title: 'Мой ВКонтакте'
	},
	{
		_id: 'link_9',
		icon: {
			path: '/icons/reddit-svgrepo-com.svg',
			width: 115
		},
		gradient: {
			from: '#ef7f6d',
			to: '#e20307'
		},
		link: 'https://www.reddit.com/user/ComprehensiveWork426/',
		title: 'Мой аккаут в reddit',
		isImportant: true
	},
	{
		_id: 'link_3',
		icon: {
			path: '/icons/telegram-svgrepo-com.svg',
			width: 80
		},
		gradient: {
			from: '#62eefa',
			to: '#2265f5'
		},
		link: 'https://t.me/NH_Koku',
		title: 'Мой телеграмм'
	},
	{
		_id: 'link_4',
		icon: {
			path: '/icons/tiktok-svgrepo-com.svg',
			width: 80
		},
		gradient: {
			from: '#76acfd',
			to: '#f9322c'
		},
		link: 'https://www.tiktok.com/@imbovoebozestvo?_t=8lx9Y4GLLKD&_r=1',
		title: 'Мой Тик Ток'
	},
	{
		_id: 'link_5',
		icon: {
			path: '/icons/discord-svgrepo-com.svg',
			width: 150
		},
		gradient: {
			from: '#c659ff',
			to: '#aa00e1'
		},
		link: 'https://discord.com/channels/@brodyaga3679',
		title: 'Мой дискорд'
	},
	{
		_id: 'link_6',
		icon: {
			path: '/icons/vs-code.svg',
			width: 80
		},
		gradient: {
			from: '#3EA6EA',
			to: '#2179c1'
		},
		link: 'https://youtu.be/zR9AwQMaQWE?si=9uvXjjxuguxk6CKk',
		title: 'Моя настройка VS Code'
	},
	{
		_id: 'link_7',
		icon: {
			path: '/icons/youtube.svg',
			width: 84
		},
		gradient: {
			from: '#e53935',
			to: '#e35d5b'
		},
		link: 'https://www.youtube.com/@user-fc3qx5fi2m',
		title: 'Мои Ютуб'
	},
	{
		_id: 'link_8',
		icon: {
			path: '/icons/email-svgrepo-com.svg',
			width: 75
		},
		gradient: {
			from: '#FF385C',
			to: '#fedbe5'
		},
		link: 'https://drive.google.com/drive/folders/11NdMks3ABeZCzZpfUiQDCCG9T4frS6cY?usp=drive_link',
		title: 'Мой гугл диск'
	},
	{
		_id: 'link_2',
		icon: {
			path: '/icons/github-142-svgrepo-com.svg',
			width: 90
		},
		gradient: {
			from: '#9a9a99',
			to: '#424241'
		},
		link: 'https://github.com/NH40',
		title: 'Мой gitHab'
	},
	{
		_id: 'link_10',
		icon: {
			path: '/icons/boosty.svg',
			width: 160
		},
		gradient: {
			from: '#ff8d42',
			to: '#ff8257'
		},
		link: 'https://boosty.to/nh_brodyaga',
		title: 'Мой Бусти'
	}
]

export default function handler(req, res) {
	res.status(200).json(links)
}
