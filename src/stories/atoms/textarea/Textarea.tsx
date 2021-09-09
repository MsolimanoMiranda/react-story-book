import React from 'react';
import './textarea.scss';
const DEFAULT_TEXTAREA_ROWS = 5;

interface TextareaProps {
  rows?: number;
  placeholder: string;
  onChange?: () => void;
  children?:any
}

export const Textarea = ({
  rows=DEFAULT_TEXTAREA_ROWS,
  placeholder,
  onChange,
  ...props
}: TextareaProps) => {
  
  return (
    <textarea
    className={'textarea'}
    rows={rows}
    placeholder={placeholder}
    onChange={onChange}
  >
    {props.children}
  </textarea>
  );
};
