import useFetch from "./useFetch"

export const useProfile = (id) => {
  const { response, isLoading, error } = useFetch({
    method: 'get',
    url: `/profiles/${id}`
  })

  if (!response || error)
    return [null, isLoading, error.message]

  return [response.result, isLoading, response.error]
}