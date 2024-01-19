import { useState } from 'react'
import { api } from './axios'
import { AxiosResponse } from 'axios'
import { UseForm, UseFormResponse } from '../utils/types'

// export const useApi = (endpoint, method = 'GET') => {}
/**
 *
 * @param endpoint
 * @returns
 */
export const useFormApi: UseForm = (endpoint): UseFormResponse => {
  const [fetching, setFetching] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  
  /**
   *
   * @param inputata
   */
  const submitForm = async (inputata: object) => {
    console.log(inputata, 'formdata')

    try {
      setError(null)
      setFetching(true)
      const { data } = await api.post(endpoint, inputata)
      if (data.success) {
        setData(data)
      }
    } catch (error) {
      console.log('Error =>  ', error)

      const err = error as AxiosResponse
      setError(err.data ?? err)
    } finally {
      setFetching(false)
    }
  }
  return {
    data,
    error,
    fetching,
    submitForm,
  }
}
