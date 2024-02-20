// Thanks to: BackYardCoder @ https://backyardcoder.me/posts/implementing-a-page-view-counter/
// PUT /api/pageViews
export const onRequestPut: PagesFunction<{ PAGE_VIEWS: KVNamespace }> = async (
  context,
) => {
  const {
    request,
    env: { PAGE_VIEWS },
  } = context;

  // CF way to access the body of the put request

  const { path } = (await request.json()) as any;

  console.log('hello');
  let currentCount = Number(await PAGE_VIEWS.get(path));
  if (!currentCount || Number.isNaN(currentCount)) {
    currentCount = 0;
  }

  // KV store does not allows "Number" as value
  await PAGE_VIEWS.put(path, String(currentCount + 1));

  return new Response(null, {
    status: 204,
    statusText: 'ok',
  });
};

// GET /api/pageViews
export const onRequestGet: PagesFunction<{ PAGE_VIEWS: KVNamespace }> = async (
  context,
) => {
  const {
    request,
    env: { PAGE_VIEWS },
  } = context;

  console.log('hello');

  const path = new URL(request.url).searchParams.get('path');

  if (!path) {
    return new Response(null, {
      status: 201,
    });
  }

  const encodedPath = encodeURIComponent(path);
  const count = (await PAGE_VIEWS.get(encodedPath)) ?? 0;

  return new Response(JSON.stringify({ count }), {
    status: 200,
  });
};
