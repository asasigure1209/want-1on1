/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Card from "./app/Card";
import TextWithTimeIcon from "./app/TextWithTimeIcon";
import Button from "./app/Button";
import Label from "./app/Label";
import Color from '../util/Color';


const header = css`
  border-bottom: 1px solid ${Color.gray200};
  padding-bottom: 20px;
  margin-bottom: 16px;
`;

const descriptionStyle = css`
  font-size: 14px;
  font-weight: bold;
  color: ${Color.gray400};
`;

const titleContainer = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

const titleSytle = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
  margin-right: 16px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    margin-right: 8px;
    background-color: ${Color.primary}
  }
`;

const labels = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > * {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

const body = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > * {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

function WantTalkCard({ profession = '営業', company = 'ライフ', created_at, title, description, id, onClick }) {

  return (
    <Card addStyle={css`
      margin-bottom: 32px;
    `}>
      <div css={header}>
        <TextWithTimeIcon text={created_at} addStyle={css`
          margin-bottom: 12px;
        `}/>
        
        <div css={titleContainer}>
          <h3 css={titleSytle}>{title}</h3>
          <div css={labels}>
            <Label type='border' text={profession} />
            <Label type='border' text={company} />
          </div>
        </div>
        <p css={descriptionStyle}>{description}</p>
      </div>

      <div css={body}>
        <Button text="面談を削除" type="border" />
        <Button text="面談をクローズ" onClick={onClick} type="accent" />
      </div>
    </Card>
  )
}

export default WantTalkCard;
