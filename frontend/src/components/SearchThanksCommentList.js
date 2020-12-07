import { useSearch } from "../hooks/searchHook";
import ThanksComment from "./ThanksComment";

function SearchThanksCommentList({ word = "" }) {
  const [ thanksComments, isLoading, error ] = useSearch(word, 'thanks_comment')

  if (isLoading)
    return <p>Loading...</p>

  if (error)
    return <p>{error}</p>

  return (
    <div>
    {thanksComments.map(({id, interviewer, interviewee, body, want_talk}) => (
        <ThanksComment
          key={id}
          interviewer={interviewer}
          interviewee={interviewee}
          body={body}
          want_talk={want_talk}
        />
      ))}
    </div>
  )
}

export default SearchThanksCommentList;