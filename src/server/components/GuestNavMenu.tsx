

type GuestNavMenuProps = {
	path: string
}

export const GuestNavMenu = ({path}: GuestNavMenuProps) => {

	return (
		<nav class="fixed bg-black w-3/5 border-r border-darkgray z-40 h-full">
			<ul class='flex flex-col p-1 bg-underline text-white text-sm gap-1'>
				<li class='flex rounded border border-darkgray' tux-active='/talent border-gray'>
					<a class='w-full p-6' href='/talent'>Talent Engagement</a>
				</li>
				<li class='flex rounded border border-darkgray' tux-active='/cem border-gray'>
					<a class='w-full p-6' href='/cem'>Customer Experience</a>
				</li>
				<li class='flex rounded border border-darkgray' tux-active='/sales border-gray'>
					<a class='w-full p-6' href='/sales'>Sales & Brand Growth</a>
				</li>
				<li class='flex rounded border border-darkgray' tux-active='/finance border-gray'>
					<a class='w-full p-6' href='/finance'>Financial Stewardship</a>
				</li>
			</ul>
		</nav>
	)
}