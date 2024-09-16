declare global {
  type CountryType = {
    id: number
    name: string
    image: string
  }
  type JobType = {
    id: number
    name: string
  }
  type CVType = {
    id: number
    name: string
    age: string
    social_status: string
    image: string
    education: string
    religion: string
    kids: string
    lang: string
    last_job: string
    note: string
    job: JobType & {
      created_at: string
      updated_at: string
    }
    country: CountryType
  }
  type MessageType = {
    name: string,
    phone: string
    subject: string
    content: string
  }
  type CompanyMessageType = {
    name: string,
    email: string,
    job: string,
    phone: string
    count: string
    country: string
    companyActive: string
  }

}
export { }
