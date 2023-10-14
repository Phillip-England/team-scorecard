

export type ButtonLinkProps = {
	text: string
	href: string
}

export const ButtonLink = ({text, href}: ButtonLinkProps) => {
	return (
		<div class='text-sm flex'>
			<a class='px-4 py-2 bg-red rounded bg-black w-fit' href={href}>{text}</a>
		</div>
	)
}