import { Context } from "elysia";
import { GuestLayout } from "../layout/GuestLayout";
import { CemScoreList } from "../components/CemScoreList";
import { HxGetBigLoader } from "../components/HxGetBigLoader";




export const cemPage = (context: any) => {
	return (
		<GuestLayout 
			title="Login | CFA Suite"
			path={context.path}
			children={
				<>
					<HxGetBigLoader href='/components/CemScoreList' />
					<div class='p-4'>
						<h2 class='text-xl mb-4'>How are Customer Service Scores Measured?</h2>
						<p class='text-sm mb-8 border-t border-t-darkgray pt-4'>When a guest places their order in our business, the receipt for the order has a random chance of having a survey at the bottom. This survey gives guests the opportunity to give us feedback regarding their experience. In return for their feedback, we provide the guest a free chicken sandwich on their next visit. If a guest places a mobile order, a survey may be sent to their email instead of being printed on ther receipt. The questions on the survey are ranked from 1 to 5 with 5 being the best. Guests are asked questions about the scores list on this page and more. If a guest marks us a 5 out of 5 on a question, we are given credit and the response goes towards our score. If the guest marks us a 4 or below, no credit is given. This is called top-bos scoring.</p>
					</div>
				</>
			}	
		/>
	)
}