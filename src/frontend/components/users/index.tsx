import React, { useState } from 'react'
import { UsersContainer, Trash, BtnContainer } from './style'
import {
    DataGrid,
    GridColDef,
    GridRowId,
    GridToolbarQuickFilter
} from '@mui/x-data-grid'

import { CreateBtn } from '../button'
import axios from '../../axios'
import { toast } from 'react-toastify'
import ConfirmModal from '../confirmModal'
import CreateUserModal from '../createUserModal'
import { BlueInlineBadge, GreenInlineBadge } from '../badge'

interface Props {
    users: User[]
}

const Users: React.FC<Props> = ({ users: usersFromProps }) => {
    const columns: GridColDef[] = [
        {
            field: '_id',
            headerName: 'Identificador',
            flex: 0.2,
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: 'firstName',
            headerName: 'Nome',
            flex: 0.2,
            align: 'left',
            headerAlign: 'left'
        },
        {
            field: 'lastName',
            headerName: 'Sobrenome',
            flex: 0.2,
            align: 'left',
            headerAlign: 'left'
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 0.2,
            align: 'left',
            headerAlign: 'left'
        },
        {
            field: 'admin',
            headerName: 'Cargo',
            flex: 0.2,
            align: 'center',
            headerAlign: 'center',
            renderCell: props =>
                props.value ? <BlueInlineBadge>Admin</BlueInlineBadge> : <GreenInlineBadge>Usuário</GreenInlineBadge>
        },
        {
            field: 'actions',
            headerName: 'Ações',
            headerAlign: 'center',
            align: 'center',
            disableColumnMenu: true,
            sortable: false,
            flex: 0.1,

            renderCell: props => (
                <Trash onClick={() => openConfirmModal(props.id)} />
            )
        }
    ]

    const [users, setUsers] = useState(usersFromProps)
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [deleteId, setDeleteId] = useState<GridRowId | null>(null)

    const refreshUsers = async () => {
        try {
            const { data: newUsers } = await axios.get('/users')
            setUsers(newUsers)
        } catch (err) {
            toast.error('Erro ao atualizar informações de usuários!')
        }
    }

    const openConfirmModal = (id: GridRowId) => {
        setDeleteId(id)
        setShowConfirmModal(true)
    }

    const closeConfirmModal = () => {
        setDeleteId(null)
        setShowConfirmModal(false)
    }

    const deleteUser = async () => {
        try {
            if (deleteId) {
                setLoading(true)
                await axios.delete('/user/' + deleteId)
                toast.warning('Usuário excluído com sucesso!')
                setLoading(false)
                refreshUsers()
            }
        } catch (err: any) {
            toast.error(err.response.data.error)
            setLoading(false)
        }
        setShowConfirmModal(false)
    }

    return (
        <>
            <CreateUserModal
                show={showCreateModal}
                setShow={setShowCreateModal}
                refreshUsers={refreshUsers}
            />
            <ConfirmModal
                show={showConfirmModal}
                confirmHandler={deleteUser}
                title="Tem certeza que deseja deletar esse usuário?"
                loading={loading}
                closeModal={closeConfirmModal}
            />
            <BtnContainer>
                <CreateBtn onClick={() => setShowCreateModal(true)}>
                    Criar usuário
                </CreateBtn>
            </BtnContainer>
            <UsersContainer>
                <DataGrid
                    rows={users}
                    getRowId={row => row._id}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    components={{ Toolbar: GridToolbarQuickFilter }}
                    componentsProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 }
                        }
                    }}
                />
            </UsersContainer>
        </>
    )
}

export default Users
