/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Color from '../../util/Color';
import Shadow from '../../util/Shadow';

const container = css`
  display: block;
  margin-bottom: 20px;
  max-width: 620px;
`;

const labelStyle = css`
  display: block;
  font-size: 12px;
  margin-bottom: 4px;
`;

const formCommonStyle = css`
  display: block;
  width: 100%;
  font-size: 14px;
  background-color: ${Color.primaryLighter};
  padding: 14px;
  border-radius: 4px;

  &:focus {
    box-shadow: 0 0 0 1px ${Color.primary};
  }
`

/*
 * 共通label
 */
const label = (labelText) => (<span css={labelStyle}>{labelText}</span>)

/*
 * Input
 */
export const Input = function Input({
  name,
  placeholder = 'テキストを入力してください',
  labelText,
  addStyle
} = {}) {
  return (
    <div css={[container, addStyle]}>
      {labelText && label(labelText)}
      <input type="text" name={name} css={formCommonStyle} placeholder={placeholder} />
    </div>
  )
}

/*
 * Selector
 */

const selectContainer = css`
  position: relative;

  select {
    padding-right: 38px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 0 6px;
    border-color: ${Color.gray300} transparent transparent transparent;
  }
`;

export const Selector = function Selector({
  name,
  options = [],
  labelText,
  addStyle
} = {}) {
  if (options.length > 0) return (
    <div css={[container, addStyle]}>
      {labelText && label(labelText)}
      <div css={selectContainer}>
        <select css={formCommonStyle} name={name}>
          { options.map(option => (<option value={option.value}>{option.text}</option>))}
        </select>
      </div>
    </div>
  )
  return (<p>error</p>)
}

/*
 * Textarea
 */
export const Textarea = function Textarea({
  name,
  placeholder = 'テキストを入力してください',
  labelText,
  rows = 5,
  addStyle
} = {}) {
  return (
    <div css={[container, addStyle]}>
      {labelText && label(labelText)}
      <textarea name={name} rows={rows} css={formCommonStyle} placeholder={placeholder}></textarea>
    </div>
  )
}

/*
 * CheckBox
 */

const checkBoxContainer = css`
  display: flex;

  label {
    display: inline-block;
    margin-right: 4px;
    padding: 6px 20px;
    background-color: #fff;
    border-radius: 50vh;
    font-size: 14px;
    line-height: 1;
    font-weight: bold;
    color: ${Color.primaryDark};
    border: 1px solid ${Color.primary};
  }

  input {
    &:checked {
      & + label {
        color: #fff;
        background: ${Color.primaryGradation};
      }
    }
  }
`

export const CheckBox = function CheckBox({
  labelText,
  addStyle,
  items,
  name
} = {}) {
  return (
    <div css={[container, addStyle]}>
      {labelText && label(labelText)}
      <div css={checkBoxContainer}>
          { items.map(item => (
            <div>
              <input type="checkbox" value={item.value} id={`${name}_${item.value}`} />
              <label for={`${name}_${item.value}`}>{item.text}</label>
            </div>
          ))}
      </div>
    </div>
  )
};


const searchContainer = css`
  display: flex;
  width: 352px;
  box-shadow: ${Shadow.default};
  border-radius: 50vh;
  height: 50px;
  padding: 8px 8px 8px 16px;
`

const searchButton = css`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: ${Color.primaryGradation};
  box-shadow: ${Shadow.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const searchButtonImg = css`
  width: 16px;
  height: 16px;
`

const searchInput = css`
  border: none;
  width: 100%;
`

export const Search = function Search({
  name,
  placeholder = '検索する',
  addStyle,
  action
} = {}) {
  return (
    <form action={action} method="GET">
      <div css={[searchContainer, addStyle]}>
        <input type="search" css={searchInput} name={name} placeholder={placeholder}/>
        <button css={searchButton}>
          <img css={searchButtonImg} src={`${process.env.PUBLIC_URL}/icon/search.svg`} />
        </button>
      </div>
    </form>
  )
}