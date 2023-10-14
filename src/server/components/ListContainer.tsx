


export type ListContainerProps = {
	children: JSX.Element
}

export const ListContainer = ({children}: ListContainerProps) => {
	return (
		<div class='p-2 flex flex-col gap-2'>
			{children}
		</div>
	)
}