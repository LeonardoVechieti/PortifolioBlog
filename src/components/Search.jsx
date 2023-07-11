import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    padding: 0;

    form {
        width: 80%;
        display: flex;
        justify-content: end;
    }

    input {
        width: 400px;
        max-width: 300px;
        height: 40px;
        padding: 0.5em;
    }        
`


export const Search = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        
        if (query) {
            navigate(`/blog/search?q=${query}`)
        }
    }
    return (
        <Container>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Pesquisar Posts" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button className="secondary-button" type="submit" >Pesquisar</button>
            </form>
            
        </Container>
    )
}
