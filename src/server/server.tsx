import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'
import { initTailwindConfig } from '../config/tail'
import { loginPage } from './page/loginPage'
import { GuestNavMenu } from './components/guestNavMenu'
import { talentPage } from './page/talentPage'
import { financePage } from './page/financePage'
import { salesPage } from './page/salesPage'
import { cemPage } from './page/cemPage'
import { CemScoreList } from './components/CemScoreList'
import { google } from 'googleapis'

//=======================================================
// SERVER CONFIG
//=======================================================

const app = new Elysia()
app.use(html())
app.use(staticPlugin())
await initTailwindConfig()

//=======================================================
// ROUTES
//=======================================================

app.get('/', (context) => {
	return loginPage(context)
})

app.get('/talent', (context) => {
	return talentPage(context)
})

app.get('/cem', (context) => {
	return cemPage(context)
})

app.get('/sales', (context) => {
	return salesPage(context)
})

app.get('/finance', (context) => {
	return financePage(context)
})

//=======================================================
// HTMX COMPONENTS
//=======================================================

app.get('/components/CemScoreList', (context) => {
	return CemScoreList()
})


export const loadSheetData = async () => {
	const sheetid = Bun.env.SCORECARD_SHEET_ID
	const sheetName = Bun.env.SCORECARD_DATA_PAGE
	const privateKey = Bun.env.G_PRIVATE_KEY
	const email = Bun.env.G_ACCOUNT_EMAIL
	console.log(sheetid, sheetName, privateKey, email)
	const auth = new google.auth.JWT({
	  email: email,
	  key: privateKey,
	  scopes: ["https://www.googleapis.com/auth/spreadsheets"]
	})
	const sheet = google.sheets("v4")
	await sheet.spreadsheets.values.append({
	  spreadsheetId: sheetid,
	  auth: auth,
	  range: sheetName,
	  valueInputOption: "RAW",
	  requestBody: {
		values: [["hello", "world"]]
	  }
	})
}

await loadSheetData()


//=======================================================
// RUNNING
//=======================================================

app.listen(8080)
