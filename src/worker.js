export default {
  async fetch(request, env, ctx) {
    return new Response("Village Showcase coming soon...", {
      headers: { "Content-Type": "text/html" }
    });
  }
};
