/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Card from "./app/Card";
import ProfileIcon from "./app/ProfileIcon";
import Color from '../util/Color';

const container = css`
  margin-bottom: 40px;
`

const header = css`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${Color.gray200};
`

const profileContainer = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
` 

const profile = css`
  width: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
` 

const profileArrow = css`
  padding-bottom: 24px;
`

const profileText = css`
  font-size: 14px;
  font-weight: bold;
  color: ${Color.gray400};
`

const profileTextSuffix = css`
  font-size: 12px;
  color: ${Color.gray400};
`

const commentBalloon = css`
  position: relative;
  background-color: ${Color.gray100};
  padding: 16px 24px;
  border-radius: 4px;

  &::before {
    position: absolute;
    content: '';
    top: -8px;
    left: 64px;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent ${Color.gray100} transparent;
  }
`

const talkTitle = css`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`

const talkTitleIcon = css`
  margin-right: 8px;
`

const talkDescription = css`
  font-size: 14px;
  color: ${Color.gray500};
`

function ThanksComment({ interviewer, interviewee, body, want_talk }) {
  return (
    <Card addStyle={container}>
      <div css={header}>
        <div css={profileContainer}>
          <div css={profile}>
            <ProfileIcon 
              size="74px"
              imageUrl={interviewer.image_url}
              alt={`${interviewer.name}のプロフィールアイコン`}
            />
            <p>
              <span css={profileText}>{interviewer.name}</span>
              <span css={profileTextSuffix}>さん</span>
            </p>
          </div>
          <img css={profileArrow} src={`${process.env.PUBLIC_URL}/icon/arrow.svg`} />
          <div css={profile}>
            <ProfileIcon 
              size="74px"
              imageUrl={interviewee.image_url}
              alt={`${interviewee.name}のプロフィールアイコン`}
            />
            <p>
              <span css={profileText}>{interviewee.name}</span>
              <span css={profileTextSuffix}>さん</span>
            </p>
          </div>
        </div>
        <p css={commentBalloon}>{body}</p>
      </div>

      <div css={body}>
        <p css={talkTitle}>
          <img  css={talkTitleIcon} src={`${process.env.PUBLIC_URL}/icon/reply.svg`} />
          <span>{want_talk.title}</span>
        </p>
        <p css={talkDescription}>{want_talk.description}</p>
      </div>
    </Card>
  )
}

export default ThanksComment