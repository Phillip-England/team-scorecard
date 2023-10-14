import { Banner } from "../components/Banner"
import { GuestNavMenu } from "../components/guestNavMenu"



type GuestLayoutProps = {
	title: string
	path: string
	children: JSX.Element
}

export const GuestLayout = ({title, path, children}: GuestLayoutProps): JSX.Element => {
	let fontAwesomeKey: string | undefined = Bun.env.FONTAWESOME_KEY
	if (fontAwesomeKey == undefined) {
		fontAwesomeKey = ''
		console.error('FONTAWESOME_KEY not provided in .env')
	}
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
				<script src="https://unpkg.com/htmx.org@1.9.6"></script>
				<script src="https://unpkg.com/hyperscript.org@0.9.11"></script>
				<link rel="stylesheet" href="/public/css/output.css"></link>
				<script src={fontAwesomeKey} crossorigin="anonymous"></script>
				<title>{title}</title>
			</head>
			<body hx-boost='true' class='bg-black text-white'>
				<Banner NavMenu={<GuestNavMenu path={path}/>} bannerText="CFA Suite" />
				{children}
				<script src='/public/js/client.js'></script>
			</body>
		</html>
	)
}