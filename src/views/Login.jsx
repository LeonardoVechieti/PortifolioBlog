import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuthentication } from '../hooks/useAuthentication';


const Page = styled.section`
    .container {
        margin-top: 50px;
        width: 100%;
        display: flex;
        flex-direction: column;

    }

    div {
        display: flex;
        justify-content: center;
        button {
            margin-top: 20px;
        }
    }
    
`

export default () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { login, error: authError} = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        const user = {
            email,
            password,
        }

        const res = await login(user)
        console.log(user)
    }

    //Mapear os erros do firebase
    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])


    return (
        <Page>
            <div className='container'>
                <h2>Login</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder='Digite seu email'
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder='Digite sua senha'
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className='primary-button'  >Login</button>
                    </div>

                </form>
            </div>
        </Page>
    )
}
