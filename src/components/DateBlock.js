import React from 'react'
import styled from 'styled-components'

const DateBlockStyled = styled.div`
  display: block;
  height: 70px;
  margin: 0px 5px 0px 5px;
  position: relative;
  padding-left: 104px;

  &::before,
  &::after {
    content: '';
    display: block;
    background-color: #959595;
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
      height: 100%;
      left: calc((104px / 2) - 2px);
    }
  }
`

const Date = styled.time`
  display: inline-block;
  color: #FBB040;
  font-weight: bold;

  &::after {
    content: '|';
    margin-left: 10px;
  }
`
const TitleDate = styled.p`
  display: inline-block;
`
const TextDate = styled.p`
  color: black; 
  display: block;
`
export const DateBlock = ({ date, title, text, children }) => {
  return (
    <DateBlockStyled>
      <Date className="mt-1 mr-2">{date}</Date>
      <TitleDate className="mt-1">{title}</TitleDate>
      <TextDate>{text}</TextDate>
    </DateBlockStyled>
  )
}
