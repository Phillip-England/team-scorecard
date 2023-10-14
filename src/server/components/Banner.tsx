

export type BannerProps = {
	bannerText: string
	NavMenu: JSX.Element
}

export const Banner = ({bannerText, NavMenu}: BannerProps) => {
	return (
		<>
			<div class='flex justify-between fixed w-screen flex-row border-b border-darkgray bg-black h-20'>
				<h2 class='text-2xl p-6'>{bannerText}</h2>
				<div _='on click toggle .hidden on .nav-menu-group' class='nav-menu-group flex items-center p-6'>
					<i class='fa-lg fa-solid fa-bars'></i>
				</div>
				<div _='on click toggle .hidden on .nav-menu-group' class='nav-menu-group hidden flex items-center p-6'>
					<i class='fa-lg fa-solid fa-x'></i>
				</div>
			</div>
			<div class='h-20'></div>
			<div class='nav-menu-group hidden'>{NavMenu}</div>
		</>
	)
}