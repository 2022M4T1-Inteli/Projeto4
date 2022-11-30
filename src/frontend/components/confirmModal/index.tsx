import React from 'react'

import Modal from '../modal'

import { ButtonContainer, Paragraph } from './style'
import { Button, LoginBtn } from '../button'
import Spinner from '../spinner'

interface Props {
    title: string
    show: boolean
    closeModal(): void
    confirmHandler(): void
    loading: boolean
    obs?: string
}

const ConfirmModal: React.FC<Props> = ({
    title,
    show,
    closeModal,
    confirmHandler,
    obs,
    loading
}) => {
    let modalContent = (
        <>
            {obs && (
                <Paragraph>
                    <strong>Observação:</strong> {obs}
                </Paragraph>
            )}
            <ButtonContainer>
                <Button onClick={closeModal}>Cancelar</Button>
                <LoginBtn onClick={confirmHandler}>Confirmar</LoginBtn>
            </ButtonContainer>
        </>
    )
    if (loading) {
        modalContent = <Spinner />
    }

    return (
        <Modal title={title} show={show} closeModal={closeModal}>
            {modalContent}
        </Modal>
    )
}

export default ConfirmModal
