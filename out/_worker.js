import data from "./db.json"

function mod(n, m) {
	return ((n % m) + m) % m;
}

export default {
	async fetch(request, env, ctx) {
		let req = new URL(request.url)
		if (req.pathname == "/prev" || req.pathname == "/next") {
			const source = req.searchParams.get("source")
			const currentIndex = data.findIndex(site => site.domain == source)
			if (currentIndex == -1) {
				return new Response("hey the source isnt right", {status: 404})
			}
			let direction = req.pathname == "/next" ? 1 : -1 
			let nextIndex = mod((currentIndex + direction), data.length)
			let site = data[nextIndex]
			while (site.enabled == false) {
				nextIndex = mod((nextIndex + direction), data.length)
				site = data[nextIndex]	
			}
			const siteUrl = `${site.https ? 'https://' : 'http://'}${site.domain}${site.path}`
			return Response.redirect(siteUrl, 307);
		} else if (req.pathname == "/list") {
			return Response.json(data)
		}

		return env.ASSETS.fetch(request);
	},
}
