import React from 'react'
import { DevicesContainer, EyeIcon } from './style'
import { DataGrid, GridColDef, GridToolbarQuickFilter } from '@mui/x-data-grid'
import Link from 'next/link'

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Identificador',
        flex: 0.2,
        headerAlign: 'right',
        align: 'right'
    },
    {
        field: 'name',
        headerName: 'Dispositivo',
        flex: 0.2,
        align: 'right',
        headerAlign: 'right'
    },
    {
        field: 'localization',
        headerName: 'Última localização',
        flex: 0.2,
        align: 'right',
        headerAlign: 'right'
    },
    {
        field: 'actions',
        headerName: 'Ações',
        headerAlign: 'right',
        align: 'right',
        disableColumnMenu: true,
        sortable: false,
        flex: 0.4,

        renderCell: props => (
            <Link href={'/devices/' + props.id}>
                <EyeIcon />
            </Link>
        )
    }
]

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

const Devices: React.FC = () => {
    return (
        <DevicesContainer>
            <DataGrid
                rows={rows}
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
