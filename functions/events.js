export async function onRequest(context) {
	const db = context.env.KATHY_DB.prepare("SELECT * FROM events");
	const response = await db.all();
	return new Response(JSON.stringify(response));
}
