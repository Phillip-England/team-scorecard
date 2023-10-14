

export type ArticleProps = {
	title: string
	body: string
}

export const Article = ({title, body}: ArticleProps) => {
	return (
		<div class='p-4'>
			<h2 class='text-xl mb-4'>{title}</h2>
			<p class='text-sm mb-8 border-t border-t-darkgray pt-4'>{body}</p>
		</div>
	)
}