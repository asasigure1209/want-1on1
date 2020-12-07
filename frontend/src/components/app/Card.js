/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Shadow from '../../util/Shadow';

const container = css`
  border-radius: 12px;
  box-shadow: ${Shadow.default};
  padding: 20px 28px;
`

function Card({
  addStyle,
  children,
} = {}) {
  return (
    <div css={[container, , addStyle]}>
      {children}
    </div>
  )
}

export default Card;