import React from 'react'
import Input from '../input'
import { Device, DevicesContainer } from './style'
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

// const columns: GridColDef[] = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 90,
//     },
//     {
//       field: 'fullName',
//       headerName: 'Full name',
//       description: 'This column has a value getter and is not sortable.',
//       sortable: false,
//       width: 160,
//       valueGetter: (params: GridValueGetterParams) =>
//         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
//   ];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
// ]

const Devices: React.FC = () => {
    return (
        <>
            <Input
                placeholder="Pesquise por um dispositivo..."
                name="searchDevices"
            />

            <DevicesContainer>
                {/* <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                /> */}
                <Device>Microscópio: Laboratório 2 (Arduino #9042)</Device>
                <Device>Microscópio: Laboratório 2 (Arduino #9042)</Device>
                <Device>Microscópio: Laboratório 2 (Arduino #9042)</Device>
                <Device>Microscópio: Laboratório 2 (Arduino #9042)</Device>
                <Device>Microscópio: Laboratório 2 (Arduino #9042)</Device>
                <Device>Microscópio: Laboratório 2 (Arduino #9042)</Device>
            </DevicesContainer>
        </>
    )
}

export default Devices
