import axios, { AxiosRequestConfig } from "axios"

export interface ApiResponse<T> {
  count: number;
  results: T[];
  next?: string | null
}

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '790ace8f624144e682aadee38d1f5415'
  }
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return apiClient.get<ApiResponse<T>>(this.endpoint, config)
      .then(res => res.data)
  }

  get = (id:string|number) => {
    return apiClient.get<T>(this.endpoint +'/' + id)
    .then(res => res.data)
  }
}

export default APIClient