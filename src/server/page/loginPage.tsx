import { Context } from "elysia";
import { GuestLayout } from "../layout/GuestLayout";
import { Banner } from "../components/Banner";
import { GuestNavMenu } from "../components/guestNavMenu";




export const loginPage = (context: any) => {
	return (
		<GuestLayout 
			title="Login | CFA Suite"
			path={context.path}
			children={
				<>
				</>
			}	
		/>
	)
}