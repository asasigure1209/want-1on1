/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Color from '../../util/Color';


const base = css`
  display: inline-block;
  font-size: 12px;
  padding: 6px 12px;
  line-height: 1;
  font-weight: bold;
  border-radius: 50vh;
`;

const labelStyles = {
  primary: css`
    ${base}
    color: #fff;
    background: ${Color.primaryGradation};
    
  `,
  border: css`
    ${base}
    color: ${Color.primaryDark};
    background-color: #fff;
    border: 1px solid ${Color.primary};
    padding: 5px 11px;
  `,
  weak: css`
    ${base}
    color: ${Color.gray400};
    background: ${Color.gray100};
  `
}

function Label({
  type = "primary",
  text,
  addStyle
} = {}) {
  return (<div css={[labelStyles[type], addStyle]}>{text}</div>)
}


export default Label;