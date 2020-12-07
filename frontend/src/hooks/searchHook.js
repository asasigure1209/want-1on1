import useFetch from "./useFetch"

export const useSearch = (word, type) => {
  const { response, isLoading, error } = useFetch({
    data: {
      params: {
        // word: word, mockの間はコメントアウト
        type: type,
      }
    },
    method: 'get',
    url: '/search'
  })

  if (!response || error)
    return [null, isLoading, error.message]
    
  return [response.result, isLoading, response.error]
}