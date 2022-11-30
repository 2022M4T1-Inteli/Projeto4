import React, { useState } from 'react'
import { Subtitle, Title } from '../title'
import { Form, Container } from './style'
import { LoginBtn } from '../button'
import Input from '../input'
import { useForm } from 'react-hook-form'
import axios from '../../axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Spinner from '../spinner'
import { useUser } from '@/context/user'
import * as yup from "yup";
import { useYupValidationResolver } from 'hooks/yup'

const validationSchema = yup.object({
    email: yup.string().required('O email é obrigatório'),
    password: yup.string().required('A senha é obrigatória'),
})

const LoginForm: React.FC = () => {
    const router = useRouter()
    const { setUser } = useUser()
    const resolver = useYupValidationResolver(validationSchema)
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({resolver})

    const [loading, setLoading] = useState(false)

    const onSubmit = async data => {
        setLoading(true)
        try {
            const { data: user } = await axios.post('/users/login', data)
            setUser(user)
            router.push('/dashboard')
            toast.success('Login realizado com sucesso!')
        } catch (err: any) {
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
                error={errors.email?.message}
                label="Email"
                name="email"
                type={'email'}
            />
            <Input
                register={register}
                error={errors.password?.message}
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
