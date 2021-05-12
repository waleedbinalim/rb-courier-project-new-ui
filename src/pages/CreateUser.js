import React from 'react'
import UserForm from '../components/users/UserForm'
import { Typography} from '@material-ui/core'
import styled from 'styled-components'

const Heading = styled(Typography)`
    color: #5b5b5bff;
    font-weight: 600;
`;

export default function CreateUser() {
    return (
        <div className="form--inner">
            <Heading variant="h3">Create User</Heading>
            <UserForm/>
        </div>
    )
}
