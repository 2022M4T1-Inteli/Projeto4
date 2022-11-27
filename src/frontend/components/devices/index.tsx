import React from 'react'
import { DevicesContainer, EyeIcon, Trash, Edit } from './style'
import { DataGrid, GridColDef, GridToolbarQuickFilter } from '@mui/x-data-grid'
import Link from 'next/link'

const rows = [
    { id: 1, localization: 'Snow', name: 'Jon', age: 35 },
    { id: 2, localization: 'Lannister', name: 'Cersei', age: 42 },
    { id: 3, localization: 'Lannister', name: 'Jaime', age: 45 },
    { id: 4, localization: 'Stark', name: 'Arya', age: 16 },
    { id: 5, localization: 'Targaryen', name: 'Daenerys', age: null },
    { id: 6, localization: 'Melisandre', name: null, age: 150 },
    { id: 7, localization: 'Clifford', name: 'Ferrara', age: 44 },
    { id: 8, localization: 'Frances', name: 'Rossini', age: 36 },
    { id: 9, localization: 'Roxie', name: 'Harvey', age: 65 }
]

interface Props {
    admin?: boolean
    devices: Device[]
}

const Devices: React.FC<Props> = ({ admin, devices }) => {
    const columns: GridColDef[] = [
        {
            field: '_id',
            headerName: 'Identificador',
            flex: 0.2,
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: 'name',
            headerName: 'Dispositivo',
            flex: 0.2,
            align: 'left',
            headerAlign: 'left'
        },
        {
            field: 'locations',
            headerName: 'Última localização',
            flex: 0.2,
            align: 'left',
            headerAlign: 'left',
            renderCell: props => (
                <div>Sala {props.value[props.value.length - 1].room}</div>
            )
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
                <>
                    <Link href={'/devices/' + props.id}>
                        <EyeIcon />
                    </Link>
                    {admin === true && <Trash />}
                </>
            )
        }
    ]

    if (admin) {
        columns.unshift({
            field: 'edit',
            headerName: 'Editar',
            headerAlign: 'left',
            align: 'left',
            disableColumnMenu: true,
            sortable: false,
            flex: 0.1,

            renderCell: props => (
                <Link href={'/devices/edit/' + props.id}>
                    {admin === true && <Edit />}
                </Link>
            )
        })
    }

    return (
        <DevicesContainer>
            <DataGrid
                rows={devices}
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
        </DevicesContainer>
    )
}

export default Devices
