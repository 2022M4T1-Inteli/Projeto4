import React from 'react'
import { Subtitle, Title } from '../title'
import { Form, Container } from './style'
import { LoginBtn } from '../button'
import Input from '../input'
import { useForm } from 'react-hook-form'

const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        // formState: { errors }
    } = useForm()

    const onSubmit = data => console.log(data)

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Title>IPT - Localizador de dispositivos</Title>
                <Subtitle>
                    Faça Login com a sua conta para conseguir visualizar a
                    localização dos objetos.
                </Subtitle>
                <Input
                    {...register('email', { required: true })}
                    // error={errors && errors.email.type}
                    label="Email"
                    name="email"
                />
                <LoginBtn type="submit">Entrar</LoginBtn>{' '}
            </Form>
        </Container>
    )
}

export default LoginForm
