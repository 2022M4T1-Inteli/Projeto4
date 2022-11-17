import React, {  useState } from 'react'
import { Subtitle, Title } from '../title'
import { Form, Container } from './style'
import { LoginBtn } from '../button'
import Input from '../input'
import { useForm } from 'react-hook-form'
import axios from '../../axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Spinner from '../spinner'

const LoginForm: React.FC = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit
        // formState: {errors}
    } = useForm()

    const [loading, setLoading] = useState(false)

    const onSubmit = async data => {
        console.log('data')
        setLoading(true)
        console.log(data)
        try {
            await axios.post('/users/login', data)
            router.push('/dashboard')
            toast.success('Login realizado com sucesso!')
        } catch (err) {
            toast.error(err.response.data.error)
            setLoading(false)
        }
    }

    let form = (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Title>IPT - Localizador de dispositivos</Title>
            <Subtitle>
                Faça Login com a sua conta para conseguir visualizar a
                localização dos objetos.
            </Subtitle>
            <Input
                register={register}
                // error={errors && errors.email.type}
                label="Email"
                name="email"
                type={'email'}
            />
            <Input
                register={register}
                // error={errors && errors.email.type}
                label="Senha"
                name="password"
                type={'password'}
            />
            <LoginBtn type="submit">Entrar</LoginBtn>
        </Form>
    )

    if (loading) {
        form = <Spinner />
    }

    return <Container>{form}</Container>
}

export default LoginForm
