/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Color from '../../util/Color';

const container = css`
  position: relative;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 46px;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background-color: ${Color.primary};
  }
`;

function Heading({
  text,
  addStyle
} = {}) {
  return (<div css={[container, addStyle]}>{text}</div>)
}


export default Heading;