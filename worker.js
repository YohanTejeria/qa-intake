export default {
  async fetch(request, env) {

    const url = new URL(request.url);

    if (url.pathname === "/submit") {
      return new Response("SUBMIT ROUTE WORKING", {
        headers: { "content-type": "text/plain" }
      });
    }

    return new Response("WORKER RUNNING", {
      headers: { "content-type": "text/plain" }
    });
  }
};