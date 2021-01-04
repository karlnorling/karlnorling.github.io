import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Main = (child: any) => {
  return (
    <Wrapper>
      {child.children}
    </Wrapper>
  );
};

