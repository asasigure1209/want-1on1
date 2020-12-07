/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Color from '../../util/Color';
import Shadow from '../../util/Shadow';

const base = css`
  display: inline-block;
  padding: 12px 22px;
  letter-spacing: 1.2px;
  border-radius: 50vh;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;

  &:hover {
    opacity: 0.8;
  }
`;

const buttonStyle = {
  primary: css`
    ${base}
    color: #fff;
    background: ${Color.primaryGradation};
    box-shadow: ${Shadow.primary};
    
  `,
  border: css`
    ${base}
    padding: 10px 20px;
    color: ${Color.primaryDark};
    background-color: #fff;
    border: 2px solid ${Color.primary};
    box-shadow: ${Shadow.default};
  `,
  accent: css`
    ${base}
    color: #fff;
    background: ${Color.accent};
    box-shadow: ${Shadow.accent};
  `
}

// TODO: イベント発火できるようにする(emit的な)
function Button({
  type = "primary",
  text,
  addStyle,
  onClick
} = {}) {
  return (<button css={[buttonStyle[type], addStyle]} onClick={onClick}>{text}</button>)
}


export default Button;