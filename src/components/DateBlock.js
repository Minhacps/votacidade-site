import React from 'react'
import styled from 'styled-components'

const DateBlockStyled = styled.div`
  display: block;
  margin: 0px 5px;
  padding: 0 0 30px 104px;
  position: relative;

  &::before,
  &::after {
    content: '';
    display: block;
    background-color: ${({theme}) => theme.secondaryColor};
    position: absolute;
    top: 0;
  }

  &::before {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: calc((104px / 2) - 12px);
  }

  &:not(:last-child) {
    &::after {
      width: 4px;
      height: calc(100% + 20px);
      left: calc((104px / 2) - 2px);
    }
  }
`

const Date = styled.time`
  display: inline-block;
  color: ${({theme}) => theme.primaryColor};
  font-weight: bold;

  &::after {
    content: '|';
    margin-left: 10px;
  }
`
const TitleDate = styled.p`
  display: inline-block;
  margin-bottom: 7px;
`
const TextDate = styled.p`
  display: block;
  color: black;
  margin-bottom: 15px;
  word-break: break-word;
`
export const DateBlock = ({ date, title, text, children }) => {
  return (
    <DateBlockStyled>
      <Date className="mr-2">{date}</Date>
      <TitleDate>{title}</TitleDate>
      {text && <TextDate>{text}</TextDate>}
    </DateBlockStyled>
  )
}
