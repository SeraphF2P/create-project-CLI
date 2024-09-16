"use server"
const Auth_x_Access_Token = process.env.Auth_x_Access_Token
async function Get<T>(route: string, params?: { [key: string]: string }): Promise<T> {
  const query = new URLSearchParams(params).toString();
  if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
    throw new Error("Base URL not provided");
  }

  if (!Auth_x_Access_Token) {
    throw new Error("Access token not provided");
  }

  const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${route}`);
  url.search = query;
  try {
    const res = await fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json;",
        Auth_x_Access_Token
      }
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

async function Post<T>(route: string, body: any): Promise<T> {
  try {
    if (Auth_x_Access_Token == null) throw new Error("Access token not provided");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${route}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;",
          Auth_x_Access_Token
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


export const getFilteredCVs = async (params: {
  type: "0" | "1" | "2" | "3",
  country_id?: string
  job_id?: string
  age?: string
  religion?: string
  last_job?: string
}): Promise<CVType[]> => await Post("cv/filter", params)

export const getWorker = async ({ agent_id }: { agent_id: string }): Promise<CVType> => {
  return await Post("get/cv", {
    agent_id: `${agent_id}`,
  })
}
export const sendMessage = async (params: MessageType) => await Post("sendMessage", params)
export const sendCompanyMessage = async (params: CompanyMessageType) => await Post("companyservice", params)

export const getCountries = async () => await Get<CountryType[]>("country")
export const getJobs = async ({ type }: { type: "0" | "1" | "2" | "3" }) => await Get<JobType[]>("job", { type })
export const getAllCVs = async () => await Get("cv") as unknown as CVType[]
