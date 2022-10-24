import React, { useRef } from 'react'
import { Input as InputStyle, Label, Error } from './style'

interface Props {
    name: string
    label?: string
    error?: string
}
type InputProps = JSX.IntrinsicElements['input'] & Props

const Input: React.FC<InputProps> = ({ name, label, error, ...rest }) => {
    const inputRef = useRef(null)

    return (
        <div>
            {label && <Label htmlFor={name}>{label}</Label>}
            <InputStyle name={name} id={name} ref={inputRef as any} {...rest} />
            {error && <Error>{error}</Error>}
        </div>
    )
}
export default Input
