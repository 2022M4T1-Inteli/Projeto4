import React, { useRef } from 'react'
import { Input as InputStyle, Label, Error, CheckboxLabel, Checkbox, CheckboxContainer } from './style'

interface Props {
    name: string
    register: any
    label?: string
    error?: any
}
type InputProps = JSX.IntrinsicElements['input'] & Props

const Input: React.FC<InputProps> = ({
    register,
    name,
    label,
    error,
    ...rest
}) => {
    const inputRef = useRef(null)

    if (rest.type == 'checkbox') {
        return (
            <CheckboxContainer>
                {label && <CheckboxLabel htmlFor={name}>{label}</CheckboxLabel>}
                <Checkbox
                    name={name}
                    id={name}
                    ref={inputRef as any}
                    {...register(name)}
                    {...rest}
                />
            </CheckboxContainer>
        )
    }

    return (
        <div>
            {label && <Label htmlFor={name}>{label}</Label>}
            <InputStyle
                name={name}
                id={name}
                ref={inputRef as any}
                {...register(name)}
                {...rest}
            />
            {error && <Error>{error}</Error>}
        </div>
    )
}

export default Input
