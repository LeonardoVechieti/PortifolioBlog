import { useFetchDocuments } from '../hooks/useFetchDocuments'
import { useQuery } from '../hooks/useQuery'
import PostsDetail from '../components/PostsDetail'
import styled from 'styled-components'


const Container = styled.section`
   .container {
        margin-top: 50px;
    }
`

export default () => {
  
    let query = useQuery();
    let search = query.get("q");
    let { documents: posts } = useFetchDocuments("posts", search);

    return (
        <Container>
            <div className='container'>
                {posts && posts.length === 0 && (
                    <div>
                        <p>Não foi encontrado Posts relacionados a sua pesquisa!</p>
                    </div>
                )}
                {posts && posts.map((post) => (
                    <PostsDetail key={post.id} post={post} />
                ))}
            </div>

        </Container>
    )
}

