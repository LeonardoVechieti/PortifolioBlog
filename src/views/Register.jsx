import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useAuthentication } from '../hooks/useAuthentication'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    
    div {
        width: 100%;
        display: flex;
        justify-content: center;
        button {
            margin-top: 2em;
            width: 50%;
        }
    }
    
`

export default () => {

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const {createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        const user = {
            displayName,
            email,
            password,
        }
        if (password !== confirmPassword) {
            setError('Senhas não conferem')
            return
        }

        const res = await createUser(user)
        console.log(user)
    }

    //Mapear os erros do firebase
    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])


    return (
        <Container>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="displayName"
                        id="name"
                        required
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                <button 
                type="submit" className='primary-button'>Cadastrar</button>
                {error && <p className="error">{error}</p>}
            </form>
        </Container>
    )
}
