import React from 'react'
import styled from 'styled-components'

const DateBlockStyled = styled.div`
  display: block;
  height: 70px;
  margin: 0px 5px 0px 5px;

`

const DrawBlock = styled.div`
  display: inline-block;
  height: 70px;
  width: 15%;
  
`

const TextBlock = styled.div`
  display: inline-block; 
  height: 70px;
  width: 85%;
  float: right;
`

const Circle = styled.div`
  background-color: #959595;
  width: 24px;
  height: 24px;
  border: 1px solid #959595;
  border-radius: 100px;
  margin: auto;
  
`

const VerticalLine = styled.div`
  background-color: #959595;
  width: 6px;
  height: 50px;
  border: 1px solid #959595;
  margin-left: 7px;
  margin: auto;
  
`

const Date = styled.p`
  display: inline-block;
  color: #FBB040;
  margin: 0px 5px 0px 2px;
`
const TitleDate = styled.p`
  display: inline-block;
  margin: 0px 5px 0px 2px;
  
`
const TextDate = styled.p`
  color: black; 
  display: block; 
`
export const DateBlock = ({ date, title, text, children }) => {

  return (
    <DateBlockStyled>
      <DrawBlock>
        <Circle />
        <VerticalLine />
      </DrawBlock>
      <TextBlock>
        <Date>
          {date}
        </Date>
        <TitleDate>
          {title}
        </TitleDate>
        <TextDate>{text}</TextDate>
      </TextBlock>
    </DateBlockStyled>
  )
}
