export async function Get<T>(route: string): Promise<T> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${route}`, {
      headers: {
        Auth_x_Access_Token: process.env.Auth_x_Access_Token ?? ""
      }
    })

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
    return data.data
  } catch (error) {
    console.error("Fetch error:", error)
    throw error
  }
}
export async function Post<T>(route: string, body: any): Promise<T> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${route}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;",
          Auth_x_Access_Token: process.env.Auth_x_Access_Token ?? ""
        },
        body: JSON.stringify(body),
      }
    )

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
    return data.data
  } catch (error) {
    console.error("Fetch error:", error)
    throw error
  }
}
const fetchClient = {
  Get,
  Post
}
export default fetchClient