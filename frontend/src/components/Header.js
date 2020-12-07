import { Link } from "react-router-dom"
import { useUser } from "../hooks/useUser"
import Container from "../components/app/Container"
import ProfileIcon from "../components/app/ProfileIcon"
import { Search } from "../components/app/Form";

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Color from '../util/Color';

const container = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${Color.gray200};
  padding: 16px 0;
`;

const left = css`
  display: flex;
  align-items: center;
`

function Header() {
  const user = useUser()

  return (
    <header>
      <Container addStyle={container}>
        <Link to='/'>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} />
        </Link>
        <div css={left}>
          <Search 
            action='/search'
            placeholder='プロフィールを検索'
            name='want'
            addStyle={css`
              margin-right: 16px;
              flex-shrink: 0;
            `}
          />
          {
            user ? <Link to={`/profiles/${user.uid}`}>
              <ProfileIcon 
                size={'50px'}
                imageUrl={user.photoURL}
                alt='ユーザーアイコン' /></Link> : null
          }
        </div>
      </Container>
    </header>
  )
}

export default Header