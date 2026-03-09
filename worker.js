export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/submit" && request.method === "GET") {
      return new Response("submit route is alive", {
        headers: {
          "Content-Type": "text/plain; charset=UTF-8"
        }
      });
    }

    if (url.pathname === "/submit" && request.method === "POST") {
      try {
        const body = await request.text();

        const n8nResponse = await fetch(
          "https://n8n.sgyt.site/webhook/testcase-intake",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-intake-secret": "a9K3mP8xQ2vT7nL4sW1zR6"
            },
            body
          }
        );

        const text = await n8nResponse.text();

        return new Response(text, {
          status: n8nResponse.status,
          headers: {
            "Content-Type": "text/plain; charset=UTF-8"
          }
        });
      } catch (error) {
        return new Response("Proxy error: " + error.message, {
          status: 500,
          headers: {
            "Content-Type": "text/plain; charset=UTF-8"
          }
        });
      }
    }

    return env.ASSETS.fetch(request);
  }
};