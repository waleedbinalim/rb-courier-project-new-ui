import React, {useState} from 'react'
import { Typography , TextField , Button} from '@material-ui/core'
import styled from 'styled-components'

const Heading = styled(Typography)`
    color: #5b5b5bff;
    font-weight: 600;
`;
const Inputs = styled(TextField)`
    margin: 10px 0px;
`;

export default function Signup() {

    const [auth, setAuth] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(auth.email && auth.password){
            try {
                let data = JSON.stringify(auth)
                const res = await fetch('/signup' , {
                    method: 'POST',
                    body: data,
                    headers: {'Content-Type': 'application/json'}
                })
            } 
            catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className="form--inner">
            <Heading variant="h3" >Sign Up</Heading>
            <div className="form-card">
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Inputs label="Email" variant="outlined" fullWidth required onKeyUp={(e) => setAuth({...auth , email: e.target.value})}/>
                    <Inputs label="Password" type="password" variant="outlined" fullWidth required onKeyUp={(e) => setAuth({...auth , password: e.target.value})}/>
                    <Button type="submit" variant="contained" color="secondary">Sign Up</Button>
                </form>
            </div>
        </div>
    )
}

// ,,,