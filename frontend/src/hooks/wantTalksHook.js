import httpCommon from "../http-common"
import useFetch from "./useFetch"

export const useWantTalks = (id) => {
  const { response, isLoading, error } = useFetch({
    params: {
      user_id: id
    },
    method: 'get',
    url: '/want_talks'
  })

  if (!response || error)
    return [null, isLoading, error.message]

  return [response.result, isLoading, response.error]
}

export const createWantTalk = (userId, title, company, profession, description, callback) => {
  httpCommon['post']('/want_talks', {
    user_id: userId,
    title: title,
    company: company,
    profession: profession,
    description: description,
  })
  .then((res) => {
    if (res.data.result) {
      callback()
    }
  })
}