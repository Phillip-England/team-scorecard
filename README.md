# A Quickstart Template for MPA in Bun with Elsysia and JSX Components

## Client Side Component Build Tool Included
This project includes a client side build tool which is very useful for MPA development. You can construct your JSX components on the server, and then build tool will generate client side components to match. These client side components contain all the IDs, class names, DOM elements found within your server components. This enables us to quickly grab the components we need in our client side code to hook event handlers, animations, ect. 

## In Development
This tool is in active development. For now it lives within this MPA template, but I do plan to release it as a stand alone build tool for anyone interested in following along.

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
git clone https://github.com/phillip-england/bun-mpa-web-template <your-project-name>
```
You'll then need to install all the required dependancies. You can do this by running the following command from the root of your project:
```bash
bun install
```
## Environment Variables
This project uses fontawesome for icons. Provide a FONTAWESOME_KEY in a .env file found in the root of your project to opt in. To get your own key, go to fontawesome and get a script tag to use their icons. In the script tag, the src attribute is the key. Place this src attribute in the .env file.
```bash
FONTAWESOME_KEY = the value in the src attribute of your fontawesome script tag
```

## Development
Three package.json scripts exist within this project. Here is a breakdown of how they all work.

To start tailwind and watch for changes to class names in your project run:
```bash
bun run tailwind
```

To bundle all your client side code into a single .js file, run
```bash
bun run bundle
```

To start the development server run:
```bash
bun run dev
```
Open http://localhost:8080/ with your browser to see the result.

## Client-Side Router
This application has a client side router as defined in ./src/client/client.ts - This router determines which controller function is fired upon hitting a certain route. For example, when we go to '/' the function loginPage() will be fired. You can define these client controller functions to hook up events to your client side DOM elements

```ts
type Router = {
	[path: string]: () => void;
}

const router: Router = {
	"/": () => {loginPage()},
	"/vison": () => {visionPage()},
	"/score/cem": () => {cemPage()},
	"/score/sales": () => {salesPage()},
	"/score/talent": () => {talentPage()},
	"/score/finance": () => {financePage()},
}
```

## Client Side Component Usage
In ./src/client/client.ts - you can see the following example of using a client-side component. Here, we simple bring in a component from ./src/client/components and console.log them out to the console. Go checkout your console to see the results. You'll see that all the IDs, class names, and DOM Elements are already built and ready to use

```ts
import { Banner } from "./component/Banner";
import { LoginForm } from "./component/LoginForm";

const loginPage = () => {
	let banner = new Banner()
	toggleNavMenu(banner)
	let loginForm = new LoginForm()
	console.log(banner)
	console.log(loginForm)
}
```

## Server Side Components
Client-side components are generated from pre-existing server side components. We build out components on the server, and the built tool auto populates ./src/client/components with all the components we need to access from our client-side code. Here is an example from ./src/server/component/Banner.tsx

```ts
type BannerProps = {
	path: string
}

export const Banner = ({path}: BannerProps): JSX.Element => {
	const topbarID = 'banner-top-bar'
	const barsID = 'banner-bars-icon'
	const xID = 'banner-x-icon'
	const menuID = 'nav-menu'
	const overlayID = 'overlay'
	return (
		<>		
			<div id={topbarID} class='p-6 text-lg bg-darkgray flex flex-row justify-between text-white fixed h-20 w-full top-0 z-40'>
				<h1 class='text-xl font-serif'>CFA Suite</h1>
				<div class='flex items-center text-white'>
					<div id={barsID}>
						<i class='fa-solid fa-bars fa-lg self-center'></i>
					</div>
					<div class='hidden' id={xID}>
						<i class='fa-solid fa-x fa-lg'></i>
					</div>
				</div>
			</div>
			<div class='h-20 bg-white'></div>
			<nav id={menuID} class={`hidden w-3/5 h-full fixed left-0 bg-darkgray z-40`}>
				<ul class='flex flex-col w-full p-2'>
					<li class='flex mb-2'>
						<NavLink path={path} text="Vision & Values" href='/' />
					</li>
					<li class='flex mb-2'>
						<NavLink path={path} text="Customer Service" href='/score/cem' />
					</li>
					<li class='flex mb-2'>
						<NavLink path={path} text="Talent" href='/score/talent' />
					</li>
					<li class='flex mb-2'>
						<NavLink path={path} text="Sales & Brand Growth" href='/score/sales' />
					</li>
					<li class='flex mb-2'>
						<NavLink path={path} text="Financial Stewardship" href='/score/finance' />
					</li>
				</ul>
			</nav>
			<div id={overlayID} class={`bg-black opacity-50 hidden absolute top-0 h-screen w-screen z-30`}></div>
		</>
	)
}
```

## Server Side Component Constraints
Server-side components must only have one component per file, and the exported component function must be the same as the file name. In the above example, you'll see the file name is Banner.tsx and we export the component as Banner. This is required. 

## Server Side Component IDs
Element IDs are defined by declaring constants at the top level of the component function. The following snippet is an example

```ts
export const Banner = ({path}: BannerProps): JSX.Element => {
	const topbarID = 'banner-top-bar'
	const barsID = 'banner-bars-icon'
..
..
..
```

All components with these ID declarations at the top will have a complimentary client-side component generated when starting the server

## Server Side Component Class Names (coming soon..)
This feature is still in development. In the future, you will be able to make the following definitions and find the resulting classes in your client-side components

```ts
const navMenuCLASS = 'nav-menu-group'
```