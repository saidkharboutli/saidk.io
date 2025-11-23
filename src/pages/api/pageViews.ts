import type { APIRoute } from 'astro';

export const prerender = false;

export const PUT: APIRoute = async ({ request, locals }) => {
  const { path } = (await request.json()) as { path: string };

  let currentCount = Number(await locals.runtime.env.PAGE_VIEWS.get(path));
  if (!currentCount || Number.isNaN(currentCount)) {
    currentCount = 0;
  }

  // KV store does not allows "Number" as value
  await locals?.runtime?.env?.PAGE_VIEWS?.put(path, String(currentCount + 1));

  return new Response(null, {
    status: 204,
    statusText: 'ok',
  });
};

export const GET: APIRoute = async ({ request, locals }) => {
  const path = new URL(request.url).searchParams.get('path');

  if (!path) {
    return new Response(null, {
      status: 201,
    });
  }

  const encodedPath = encodeURIComponent(path);
  const count = (await locals.runtime.env.PAGE_VIEWS.get(encodedPath)) ?? 0;

  return new Response(JSON.stringify({ count }), {
    status: 200,
  });
};
