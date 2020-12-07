/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const container = css`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 32px;
`
const inner = {
  default: css`
    grid-column: 1 / 13;
  `,
  small: css`
    grid-column: 2 / 12;
    align-content: center;
  `,
}

function Container({
  type = "default",
  addStyle,
  children,
} = {}) {
  return (
    <div css={container}>
      <div css={[inner[type], addStyle]}>{children}</div>
    </div>
  )
}

export default Container;