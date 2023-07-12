import { useFetchDocuments } from '../hooks/useFetchDocuments'
import { useQuery } from '../hooks/useQuery'
import PostsDetail from '../components/PostsDetail'
import { Search } from '../components/Search';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default () => {
    const query = useQuery();
    const search = query.get("q");
    const { documents: posts } = useFetchDocuments("posts", search);

    return (
        <Container>
            <Search />
            {posts && posts.length === 0 && (
                <div>
                    <p>Não foi encontrado Posts!</p>
                </div>
            )}
            {posts && posts.map((post) => (
                <PostsDetail key={post.id} post={post} />
            ))}
        </Container>
    )
}

