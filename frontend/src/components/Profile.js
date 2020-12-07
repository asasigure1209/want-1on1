import { useParams } from "react-router-dom";
import { useProfile } from "../hooks/profileHook";
import ProfileIcon from "./app/ProfileIcon";
import Label from "./app/Label";

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const container = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 32px;
  margin-bottom: 32px;
`

const left = css`
  grid-column: 1 / 4;
  margin-top: -60px;
`

const right = css`
  grid-column: 4 / 13;
  padding-top: 42px;
`

const name = css`
  display: block;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 12px;
  line-height: 1;
`

const labels = css`
  display: flex;
  margin-bottom: 20px;
  
  & >  * {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`

function Profile() {
  let { id } = useParams();
  const [profile, isLoading, error] = useProfile(id)

  if (isLoading)
    return <p>Loading...</p>

  if (error)
    return <p>{error}</p>

  return (
    <div css={container}>
      <div css={left}>
        <ProfileIcon 
          size="100%"
          imageUrl={profile.user.image_url}
        />
      </div>
      <div css={right}>
        <span css={name}>{profile.user.name}</span>
        <div css={labels}>
          <Label text={profile.user.company} />
          <Label text={profile.user.profession} />
        </div>
        <p>{profile.description}</p>
      </div>
    </div>
  )
}

export default Profile;
