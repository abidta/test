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
import { useOutletContext } from 'react-router-dom'

/**
 *
 * @returns
 */
export const useApi: UseApi = () => {
  const [fetching, setFetching] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const fetchData: FetchData = (endpoint, identifier) => {
    submitApi(endpoint, identifier)
  }
  const mutate: Mutate = (endpoint, body, method = 'POST', identifier) => {
    submitApi(endpoint, body, method, identifier)
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
    identifier,
    params,
    headers
  ) => {
    try {
      setError(null)
      setFetching(true)
      const { data:response } = await api({
        method: method,
        url: endpoint,
        params: params,
        data: body,
        headers: headers,
        withCredentials: true,
      })
      console.log(response,'llllll');
      
      if (response.success) {
        console.log(response, 'data api')
        setSuccess(true)
        setData({ ...response, identifier })
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
    success,
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
  const { data, fetching, error, success, submitApi } = useApi()

  /**
   *
   * @param endpoint
   * @param inputata
   */
  const submitForm = async (endpoint: string, inputata: object) => {
    submitApi(endpoint, inputata, 'POST')
  }
  return {
    data,
    error,
    fetching,
    success,
    submitForm,
  }
}

/**
 *
 * @param endpoint
 * @param method
 * @returns Promise
 */
export const asyncApi = async (endpoint: string, method = 'GET') => {
  const { data } = await api({ method: method, url: endpoint, withCredentials: true })
  return data
}
//redux typed hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

//
/**
 * useOutletContext custom hook
 *
 */
export function useOffset() {
  return useOutletContext<{ offset: number; pageLimit?: number }>()
}
