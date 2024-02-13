import React from 'react';

interface IInputCompProps {
  title?: string;
  type?: string;
  placeholder?: string;
}

const InputComp = ({ title, type = 'text', placeholder }: IInputCompProps) => {
  return (
    <article>
      <label>{title}</label>
      <br />
      <input type={type} placeholder={placeholder} />
    </article>
  );
};

export default InputComp;
