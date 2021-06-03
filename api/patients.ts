import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ApiResponse } from '@/components/types'

export const fetchPatients = async (
  context: NuxtAxiosInstance,
  page: number
): Promise<ApiResponse> => {
  const response = await context.$get(`https://randomuser.me/api/`, {
    params: {
      page,
      seed: 'coodesh',
      results: 50,
      exc: 'login',
    },
  })

  return response
}
