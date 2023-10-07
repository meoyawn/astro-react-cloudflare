import { type APIRoute } from "astro";

// noinspection JSUnusedGlobalSymbols
export const prerender = false;

// noinspection JSUnusedGlobalSymbols
export const POST: APIRoute = async ({ request, redirect }) => {
  const o = Object.fromEntries(await request.formData());
  if (typeof o.email !== "string") throw new Error(JSON.stringify(o, null, 2));

  return redirect("/");
};
