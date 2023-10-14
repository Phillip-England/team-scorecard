import { Context } from "elysia";
import { GuestLayout } from "../layout/GuestLayout";
import { ListContainer } from "../components/ListContainer";
import { UpdatedAt } from "../components/UpdatedAt";
import { ScoreDetail } from "../components/ScoreDetail";




export const salesPage = (context: any) => {
	return (
		<GuestLayout 
			title="Login | CFA Suite"
			path={context.path}
			children={
				<>
					<ListContainer children={
						<>	
							<UpdatedAt date="10/13/2023" />
							<ScoreDetail name="Sales" score='77%' details="OSAT (overall satisfaction) is our top measure in regards to customer service. It is a measure of how much a guest enjoyed their experience with us in a general sense." children=""/>
							<ScoreDetail name="Taste" score='72%' details="Taste measures the overall quality of our product from the guest perspective. This score is generated from questions concerning the taste of specific products purchased by our guests." children=""/>
							<ScoreDetail name="Speed" score='66%' details="Speed measures how fast our guests percieve their experiences to be. It gives guests the opporunity to let us know if they feel like they waited an excessive amount of time for their food" children=""/>
							<ScoreDetail name="Cleanliness" score='69%' details="Cleanliness is a measure of how clean guests percieve our business to be both inside and out. It gives guests the opporunity to share any concerns regarding the cleanliness of our restaurant." children=""/>
							<ScoreDetail name="Accuracy" score='95%' details="Accuracy is the only metric in this list which is derived from a yes or no question. Guest are asked if their order was accurate and a percentage is generate from the responses." children=""/>
						</>
					}/>
				</>
			}	
		/>
	)
}