import { useParams } from "react-router-dom";
import { useThanksComments } from "../hooks/thanksCommentsHook";
import ThanksComment from "./ThanksComment";
import Heading from "./app/Heading";

function ThanksCommentList() {
  let { id } = useParams();
  const [thanksComments, isLoading, error] = useThanksComments(id)

  if (isLoading)
    return <p>Loading...</p>

  if (error)
    return <p>{error}</p>

  return (
    <div>
      <Heading text="今までの感謝ログ"/>
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

export default ThanksCommentList;
