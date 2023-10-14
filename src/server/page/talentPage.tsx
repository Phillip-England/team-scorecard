import { Context } from "elysia";
import { GuestLayout } from "../layout/GuestLayout";
import { ScoreDetail } from "../components/ScoreDetail";
import { ButtonLink } from "../components/ButtonLink";
import { ListContainer } from "../components/ListContainer";
import { UpdatedAt } from "../components/UpdatedAt";




export const talentPage = (context: any) => {
	return (
		<GuestLayout 
			title="Login | CFA Suite"
			path={context.path}
			children={
				<>
					<ListContainer children={
						<>
							<ScoreDetail name='Team Member Count' score='122' details="We are always looking for top talent. If you know someone who would be a good fit for our business, click the button below to submit a referal request and make some serious dough along the way 🐔💰" children=""/>
							<ScoreDetail name='Retention' score='77%' children="" details="High employee retention means a company is good at keeping its workers. Imagine you have a favorite ice cream shop where the same friendly scooper serves you every time. The scooper likes their job, and they stick around for years. That's like good employee retention – when people stay at their jobs because they enjoy them and the company treats them well." />
							<ScoreDetail name='Turnover' score='66%' children="" details="High employee turnover is when workers keep leaving their jobs quickly. Think of a school where students change teachers often, and there's a new teacher every month. That's like high employee turnover – when workers don't stay at their jobs for long, and the company has to keep finding new people to fill those positions." />
						</>
					}/>
					<div class='p-4'>
						<h2 class='text-xl mb-4'>🐔💰 Join the Chick-fil-A Team: Earn Big with Every Referral!</h2>
						<p class='text-sm mb-8 border-t border-t-darkgray pt-4'>Team, ready to make some serious cluckin' money? When you refer your friends to join us at Chick-fil-A, you're not just helping us grow; you're also padding your pockets. We'll kick things off with a $50 sign-on bonus, then add $100 at 90 days, $200 at 180 days, and a whopping $300 after one year. It's simple: Chick-fil-A, an awesome team, and a whole lot of cash – that's what we're serving up. So, why wait? Start referring and start earning! 🐔💰🎉</p>
						<ButtonLink href="https://forms.gle/ZJmgj9mudbL3JXEN7" text='Refer a Friend!' />
					</div>
				</>
			}	
		/>
	)
}