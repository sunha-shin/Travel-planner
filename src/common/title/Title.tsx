import React from 'react';

interface ITitleProps {
  title: string;
}

const Title = ({ title }: ITitleProps) => {
  return <h2>{title}</h2>;
};

export default Title;
