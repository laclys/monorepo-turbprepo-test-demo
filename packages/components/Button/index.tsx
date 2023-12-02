import React, { FC } from 'react'

export const Button: FC<{ text: string }> = ({ text }) => {
  return <button>{text}</button>
}

export default Button
