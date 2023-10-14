

export type UpdatedAtProps = {
	date: string
}

export const UpdatedAt = ({date}: UpdatedAtProps) => {
	return (
		<div class='p-1 flex'>
			<p class='text-xs'>updated: {date}</p>
		</div>
	)
}