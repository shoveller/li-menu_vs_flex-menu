import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import './style.css';

const Wrapper = styled.div.attrs({
  className: "App"
})``;

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const LI = styled.li`
  margin: 0;
  padding: 0;
  border: 0;
  // 목록의 방향을 왼쪽으로 틀어준다
  float: left;
  // 너비를 정해준다
  width: 25%;
`;

// 전통적인 메뉴
const TraditionalMenu = () => {
  return (
    <UL>
      <LI>li 1</LI>
      <LI>li 2</LI>
      <LI>li 3</LI>
      <LI>li 4</LI>
    </UL>
  );
};

const PRE = styled.pre`
  white-space: pre-wrap;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FlexItem = styled.div``;

const FlextMenu = () => {
  return (
    <FlexContainer>
      <FlexItem>플랙스 1</FlexItem>
      <FlexItem>플랙스 2</FlexItem>
      <FlexItem>플랙스 3</FlexItem>
      <FlexItem>플랙스 4</FlexItem>
    </FlexContainer>
  );
}

function App() {
  return (
    <Wrapper>
      <h5>전통적인 방식으로 구현한 메뉴</h5>
      <PRE>
        float: left;로 목록의 방향을 왼쪽으로 틀어주고, 부모에 overflow:
        hidden을 설정하여 float한 아이템의 높이를 정의하는 방식
      </PRE>
      <TraditionalMenu />

      <h5>flex로 구현한 메뉴</h5>
      <FlextMenu />
    </Wrapper>
  );
}

render(<App />, document.getElementById('root'));
