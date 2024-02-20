export function onRequest() {
  console.log('hello world');
  return new Response('Hello, world!');
}
