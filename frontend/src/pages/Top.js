import ThanksComment from "../components/ThanksComment";
import Want1on1Input from "../components/Want1on1Input";
import { useThanksComments } from "../hooks/thanksCommentsHook";
import { useUser } from "../hooks/useUser";

import Heading from "../components/app/Heading";
import Container from "../components/app/Container";

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import WantTalkCardList from "../components/WantTalkCardList";

const container = css`
  margin-top: 64px;
`

function Top() {
  const user = useUser()
  const uid = user ? user.uid : null
  const [thanksComments, isThanksCommentsLoading, thanksCommentsError] = useThanksComments(uid) //TODO: 認証できたらそこからIDとる

  if (isThanksCommentsLoading)
    return <p>Loading...</p>

  if (thanksCommentsError)
    return <p>{thanksCommentsError}</p>

  return (
    <Container type="small" addStyle={container}>
      <div>
        <Want1on1Input />
        <WantTalkCardList />
        <Heading text="みんなの感謝コメント"/>

        <div>
        {thanksComments.map(({id, interviewer, interviewee, body, want_talk}) => (
          <ThanksComment key={id} interviewer={interviewer} interviewee={interviewee} body={body} want_talk={want_talk} />
        ))}
        </div>
      </div>
    </Container>
  );
}

export default Top;
