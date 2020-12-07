/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Shadow from '../../util/Shadow';

const container = css`
  border-radius: 50%;
  box-shadow: ${Shadow.default};
  overflow: hidden;
  background-color: #fff;

  img {
    object-fit: cover;
    width: 100%;
    border-radius: 50%;
  }
`

function ProfileIcon({
  size = '60px',
  imageUrl,
  alt,
  addStyle
} = {}) {
  return (<div css={[
    container,
    css`
      width: ${size};
      height: auto;
      padding: calc(${size} / 14);
    `, 
    addStyle]}>
      <img src={imageUrl} alt={alt}/>
    </div>)
}


export default ProfileIcon;