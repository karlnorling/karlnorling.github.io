import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = (child: any) => {
  return (
    <Wrapper>
      {child.children}
    </Wrapper>
  );
};

