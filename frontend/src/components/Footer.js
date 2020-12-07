/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Color from '../util/Color';

const container = css`
  padding: 24px;
  background-color: ${Color.gray500};
  text-align: center;
  font-size: 14px;
  text-align: center;
  color: #fff;
`;

function Footer() {
  return (
    <footer css={container}> © 2020 Ateam want 1on1 </footer>
  )
}

export default Footer;