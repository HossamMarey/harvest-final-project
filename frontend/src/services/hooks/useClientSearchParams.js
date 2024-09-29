import React from 'react'
import { useSearchParams } from "react-router-dom";

export const useClientSearchParams = () => {


  const [searchParams, setSearchParams] = useSearchParams();


  const setClientSearchParams = (params = {}) => {

    const oldParams = {}

    for (let [k, v] of searchParams.entries()) {
      oldParams[k] = v
    }

    const allParams = {
      ...oldParams,
      ...params,

    }

    const filteredParams = {}
    Object.entries(allParams).forEach(([k, v]) => {
      if (v && v != 0) {
        filteredParams[k] = v
      }
    })

    setSearchParams(filteredParams)
  }


  return [searchParams, setClientSearchParams]
}
