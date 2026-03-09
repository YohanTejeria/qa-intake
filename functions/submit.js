export async function onRequestPost(context) {

  const body = await context.request.text()

  const response = await fetch(
    "https://n8n.sgyt.site/webhook/testcase-intake",
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "x-intake-secret":"CHANGE_THIS_SECRET"
      },
      body
    }
  )

  const text = await response.text()

  return new Response(text,{
    headers:{
      "Content-Type":"text/plain"
    }
  })

}
