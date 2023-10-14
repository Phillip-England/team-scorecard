

export type HxGetBigLoaderProps = {
	href: string
}

export const HxGetBigLoader = ({href}: HxGetBigLoaderProps) => {
	return (
		<div hx-get={href} hx-trigger='load' hx-swap='outerHTML' class='flex justify-center p-4'>
			<div class='h-28 w-28 rounded-full border border-8 border-gray border-t-red animate-spin'></div>	
		</div>
	)
}