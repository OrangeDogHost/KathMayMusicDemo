export async function onRequest(context) {
	console.log(context.env);
	const db = context.env.KATHY_DB.prepare("SELECT * FROM events");
	const events = await db;

	return new Response(JSON.stringify(events));
}
