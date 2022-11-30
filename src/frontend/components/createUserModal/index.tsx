import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../input'
import Modal from '../modal'
import Spinner from '../spinner'
import { Form } from './style'
import axios from '../../axios'
import { toast } from 'react-toastify'
import { LoginBtn } from '../button'
import { useYupValidationResolver } from 'hooks/yup'
import * as yup from "yup";

interface Props {
    show: boolean
    setShow(bool: boolean): void
    refreshUsers(): Promise<void>
}

const validationSchema = yup.object({
    firstName: yup.string().required('O primeiro nome é obrigatório'),
    lastName: yup.string().required('O último nome é obrigatório'),
    email: yup.string().required('O email é obrigatório'),
    password: yup.string().required('A senha é obrigatória'),
})

const CreateUserModal: React.FC<Props> = ({ show, setShow, refreshUsers }) => {
    const [loading, setLoading] = useState(false)
    const resolver = useYupValidationResolver(validationSchema)

    const { register, handleSubmit, reset, formState:{errors} } = useForm({resolver})

    const createUser = async (data: any) => {

        setLoading(true)
        try {
            await axios.post('/users/create', data)
            toast.success('Usuário criado com sucesso!')
            await refreshUsers()
            closeModal()
            setLoading(false)
        } catch (err: any) {
            toast.error(err.response.data.error)
            setLoading(false)
        }
    }
    console.log(errors)
    const closeModal = () => {
        setShow(false)
        reset()
    }

    return (
        <Modal
            show={show}
            closeModal={closeModal}
            title={'Criar um novo usuário'}
        >
            {loading ? (
                <Spinner />
            ) : (
                <Form onSubmit={handleSubmit(createUser)}>
                    <Input
                        name="firstName"
                        register={register}
                        label={'Nome'}
                        error={errors.firstName?.message}
                    />
                    <Input
                        name="lastName"
                        register={register}
                        label={'Sobrenome'}
                        error={errors.lastName?.message}

                    />
                    <Input
                        name="email"
                        register={register}
                        label={'Email'}
                        type="email"
                        error={errors.email?.message}
                    />
                    <Input
                        name="password"
                        register={register}
                        label={'Senha'}
                        type="password"
                        error={errors.password?.message}
                    />
                    <Input
                        name="admin"
                        register={register}
                        label={'Admin:'}
                        type="checkbox"
                    />
                    {/* <Input name="admin" register={register} label={'Nome'} /> */}
                    <LoginBtn type="submit">Criar</LoginBtn>
                </Form>
            )}
        </Modal>
    )
}

export default CreateUserModal
