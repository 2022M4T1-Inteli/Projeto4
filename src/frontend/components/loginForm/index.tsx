import React from 'react'
import { Subtitle, Title } from '../title'
import { Form, Container } from './style'
import { LoginBtn } from '../button'
import Input from '../input'

const LoginForm: React.FC = () => {
    return (
        <Container>
            <Form>
                <Title>IPT - Localizador de dispositivos</Title>
                <Subtitle>
                    Faça Login com a sua conta para conseguir visualizar a
                    localização dos objetos.
                </Subtitle>
                <Input label="Email" name="email" style={{ width: '100%' }} />
                <LoginBtn>Entrar</LoginBtn>{' '}
            </Form>
        </Container>
    )
}

export default LoginForm
