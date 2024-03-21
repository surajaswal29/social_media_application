async function useLinkHandler(url: string) {
  console.log(url)
  const response = await fetch("https://youtu.be/VejgRJSkaZM", {
    credentials: "include",
    headers: {},
  })
  const html = await response.text()

  return html
}

export default useLinkHandler
