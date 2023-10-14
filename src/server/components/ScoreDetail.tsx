

export type ScoreDetailProps = {
	name: string
	score: string
	details: string
	children: JSX.Element
}

export const ScoreDetail = ({name, score, details, children}: ScoreDetailProps) => {
	return (
		<div _='on click toggle .hidden on  (<div.score-detail/> in me) then toggle .border-gray on me' class='flex flex-col border border-darkgray p-6 rounded'>
			<div class='flex flex-row justify-between'>
				<h2 class='text-lg'>{name}</h2>
				<h2 class='text-lg'>{score}</h2>
			</div>
			<div class='score-detail hidden'>
				<p class='border-t border-t-darkgray pt-4 mt-6 text-sm'>{details}</p>
				{children}
			</div>
			{}
		</div>
	)
}