import { Context } from "elysia";
import { GuestLayout } from "../layout/GuestLayout";




export const financePage = (context: any) => {
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