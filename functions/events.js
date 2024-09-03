export async function onRequest(context) {
	console.log(context.env);
	const db = context.env.KATHY_DB.prepare("SELECT * FROM events");
	const response = await db.all();
	const events = response.results

	return new Response(JSON.stringify(events));
}
