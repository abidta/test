import { useState } from 'react'
import { api } from './axios'
import { AxiosResponse } from 'axios'
import { UseApi, UseApiSubmit, UseForm, UseFormResponse } from '../utils/types'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'

/**
 *
 * @param endpoint
 * @param method
 * @returns
 */
export const useApi: UseApi = (endpoint, method) => {
  const [fetching, setFetching] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  /**
   *
   * @param body
   * @param params
   * @param headers
   */
  const submitApi: UseApiSubmit = async (body, params, headers) => {
    try {
      setError(null)
      setFetching(true)
      const { data } = await api({
        method: method,
        url: endpoint,
        params: params,
        data: body,
        headers: headers,
        withCredentials: true,
      })
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
    submitApi,
  }
}
/**
 *
 * @param endpoint
 * @returns
 */
export const useFormApi: UseForm = (endpoint): UseFormResponse => {
  const { data, fetching, submitApi, error } = useApi(endpoint, 'POST')

  /**
   *
   * @param inputata
   */
  const submitForm = async (inputata: object) => {
    submitApi(inputata)
  }
  return {
    data,
    error,
    fetching,
    submitForm,
  }
}
//redux typed hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
