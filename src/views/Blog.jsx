import styled from 'styled-components'
import { useFetchDocuments } from '../hooks/useFetchDocuments'
import PostsDetail from '../components/PostsDetail'
import { Search } from '../components/Search'


const Container = styled.section`
    .container {
        margin-top: 50px;
    }
`

export default () => {
    const { documents: posts} = useFetchDocuments("posts")
    return (
        <Container>
            <div className='container'>
            <div>
                {posts && posts.map((post) => (
                    <PostsDetail key={post.id} post={post} />
                ))}
            </div>
            </div>
        </Container>
    )
}

