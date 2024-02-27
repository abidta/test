import { useState } from 'react'
import { api } from './axios'
import { AxiosResponse } from 'axios'
import {
  FetchData,
  Mutate,
  UseApi,
  UseApiSubmit,
  UseForm,
  UseFormResponse,
} from '../utils/types'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'

/**
 *
 * @returns
 */
export const useApi: UseApi = () => {
  const [fetching, setFetching] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const fetchData: FetchData = (endpoint) => {
    submitApi(endpoint)
  }
  const mutate: Mutate = (endpoint, body, method = 'POST') => {
    submitApi(endpoint, body, method)
  }
  /**
   *
   * @param endpoint
   * @param body
   * @param method
   * @param params
   * @param headers
   */
  const submitApi: UseApiSubmit = async (
    endpoint,
    body,
    method = 'GET',
    params,
    headers
  ) => {
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
    fetchData,
    mutate,
    submitApi,
  }
}
/**
 *
 * @param endpoint
 * @returns
 */
export const useFormApi: UseForm = (): UseFormResponse => {
  const { data, fetching, submitApi, error } = useApi()

  /**
   *
   * @param endpoint
   * @param inputata
   */
  const submitForm = async (endpoint: string, inputata: object) => {
    submitApi(endpoint, inputata,'POST')
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
