/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Profile from "../components/Profile";
import ThanksCommentList from "../components/ThanksCommentList";
import Container from "../components/app/Container";
import { useUser } from '../hooks/useUser';
import WantTalkCardList from '../components/WantTalkCardList';
import { useParams } from 'react-router-dom';

const container = css`
  background: linear-gradient(91.17deg, #B3E6E3 0.07%, #57CBC6 100%);
  padding-top: 140px;
`

const card = css `
  background-color: #fff;
  box-shadow: 0px -4px 12px 6px rgba(51, 51, 51, 0.06);
  border-radius: 40px 40px 0px 0px;
  padding-bottom: 80px;
`

function Profiles() {
  const user = useUser()
  const { id } = useParams()
  const uid = user ? user.uid : null

  return (
    <>
      <div css={container}>
        <div css={card}>
          <Container>
            <Profile />
            { uid === id ? (
              <Container type="small">
              <WantTalkCardList />
            </Container>
            ) : null }
            <Container type="small">
              <ThanksCommentList />
            </Container>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Profiles;