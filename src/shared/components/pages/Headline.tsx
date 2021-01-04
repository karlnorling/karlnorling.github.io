import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Title = styled.h1`
  background: #ffcc33;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.27);
  color: #333;
  flex: 0 0 55px;
  font-size: 48px;
  font-weight: 200;
  padding: 20px 0 25px 0;
  text-align: center;
  margin: 0;
`;

const blinkAnimation = keyframes`
{
  0% {
    opacity: 0;
  }
  25% {
    opacity: .3;
  }
  50% {
    opacity: .5;
  }
  75% {
    opacity: .8;
  }
  100% {
    opacity: 1;
  }
}
`;

const Blink = styled.span`
  color: #c10000;
  animation: ${blinkAnimation} 1.2s steps(5, start) infinite;
`;

export interface Letter {
  letter: string;
  delay: number;
  effect?: string;
};

interface HeadlineProps {
  letters: Letter[];
  hasCursor: Boolean;
}

const blinkData = [{
  letter: ' ',
  delay: 200
}, {
  letter: '_',
  delay: 100,
  effect: 'blink'
}];

export const Headline = ({ letters, hasCursor }: HeadlineProps) => {
  const [text, setText] = useState(' ');
  const [cursor, setCursor] = useState('');

  if (hasCursor) {
    letters = letters.concat(blinkData);
  }

  useEffect(() => {
    const printText = (index: number) => {
      if (index !== letters.length) {
        const data = letters[index];
        if (data.effect) {
          setTimeout(() => {
            const text = data.letter;
            setCursor(text);
            index += 1;
            printText(index);
          }, data.delay);
        } else {
          setTimeout(() => {
            const text = letters.slice(0, index+1).map(l => l.letter).join('');
            setText(text);
            index += 1;
            printText(index);
          }, data.delay);
        }
      }
    };
    printText(0);
  }, []);
  return (<Title>{text}<Blink>{cursor}</Blink></Title>);
};
