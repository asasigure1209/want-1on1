import httpCommon from "../http-common"
import useFetch from "./useFetch"

export const useThanksComments = (id) => {
  const { response, isLoading, error } = useFetch({
    params: {
      user_id: id
    },
    method: 'get',
    url: '/thanks_comments'
  })

  if (!response || error)
    return [null, isLoading, error.message]

  return [response.result, isLoading, response.error]
}

export const createThanksComment = (userId, targetUserid, body, callback) => {
  httpCommon['post']('/thanks_comments', {
    user_id: userId,
    target_user_id: targetUserid,
    body: body,
  })
  .then((res) => {
    if (res.data.result) {
      callback()
    }
  })
}