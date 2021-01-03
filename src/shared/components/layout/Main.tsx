import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: block;
`;

export const Main = (child: any) => {
  return (
    <Wrapper>
      {child.children}
    </Wrapper>
  );
};

