import styled from 'styled-components'
import { useFetchDocuments } from '../hooks/useFetchDocuments'
import PostsDetail from '../components/PostsDetail'
import { Search } from '../components/Search'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    
`

export default () => {
    const { documents: posts, loading } = useFetchDocuments("posts")
    return (
        <Container>
            <Search />
            <div>
                {loading && <p>Carregando...</p>}
                {posts && posts.map((post) => (
                    <PostsDetail key={post.id} post={post} />
                ))}
            </div>
        </Container>
    )
}

