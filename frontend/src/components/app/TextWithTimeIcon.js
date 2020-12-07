/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Color from '../../util/Color';

const container = css`
  display: flex;
  align-items: center;
  justify-content: left;
`

const iconStyle = css`
  width: 14px;
  height: 14px;
  margin-right: 4px;
`
const textStyle = css`
  font-size: 12px;
  color: ${Color.gray400};
`

function TextWithTimeIcon({
  text,
  addStyle
} = {}) {
  return (
    <div css={[container, addStyle]}>
      <img css={iconStyle} src={`${process.env.PUBLIC_URL}/icon/clock.svg`} />
      <span css={textStyle}>{text}</span>
    </div>
  )
}

export default TextWithTimeIcon;