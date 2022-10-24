import React from 'react'
import { Title } from '../title'
import { Box, Container } from './style'
import { LoginBtn } from '../button'
import Input from '../input'

const LoginForm: React.FC = () => {
    return (
        <Container>
            <Box>
                <Title>Login</Title>

                <Input
                    label="Email"
                    name='email'
                    style={{ width: '100%' }}
                />

                <LoginBtn>Submit</LoginBtn>
            </Box>
        </Container>
    )
}

export default LoginForm
