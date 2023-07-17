import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../context/AuthContext'
import { useInsertDocument } from '../hooks/useInsertDocument'
import styled from 'styled-components'


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
    const [title, setTitle] = useState('')
    const [resumo, setResumo] = useState('')
    const [image, setImage] = useState('')
    const [imageMiniatura, setImageMiniatura] = useState('')
    const [category, setCategory] = useState('')
    const [urlRepository, setUrlRepository] = useState('')
    const [deploy, setDeploy] = useState('')
    const [autor, setAutor] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState('')

    const { user } = useAuthValue()

    const { insertDocument, response } = useInsertDocument("posts")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError('')
        //validar image url
        try {
            new URL(image)
            new URL(imageMiniatura)
        }
        catch (error) {
            setFormError('URL da imagem inválida')
            return
        }

        //separar tags
        const tagsArray = tags.split(',').map(tag => tag.trim().toLowerCase())

        //cria arrays de tags
        //checar todos os valores
        //se algum valor for vazio, retorna erro
        //se não, cria o post
        if (!title || !image || !body || !tagsArray) {
            setFormError('Preencha todos os campos')
            return
        }
        insertDocument({
            title,
            resumo,
            image,
            imageMiniatura,
            category,
            urlRepository,
            deploy,
            autor,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
            createdAt: new Date().toISOString()

        })
        if (!response.error) {
            navigate('/blog')
        }
    }

    return (
        <Page>
            <div className='container'>
                <h2>Criar Post</h2>
                <p>Crie um novo post para o blog</p>
                <form className="form" onSubmit={handleSubmit}>
                    <label>
                        <span>Título:</span>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            required
                            placeholder='Título do post'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Resumo:</span>
                        <textarea
                            name="resumo"
                            id="resumo"
                            required
                            placeholder='Resumo do post'
                            value={resumo}
                            onChange={(e) => setResumo(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Miniatura:</span>
                        <input
                            type="text"
                            name="imageMiniatura"
                            id="imageMiniatura"
                            required
                            placeholder='URL da imagem'
                            value={imageMiniatura}
                            onChange={(e) => setImageMiniatura(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Imagem:</span>
                        <input
                            type="text"
                            name="image"
                            id="image"
                            required
                            placeholder='URL da imagem'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Conteúdo:</span>
                        <textarea
                            name="body"
                            id="body"
                            required
                            placeholder='Conteúdo do post'
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Categoria:</span>
                        <input
                            type="text"
                            name="categoria"
                            id="categoria"
                            placeholder='Catgoria do post'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Repositório:</span>
                        <input
                            type="text"
                            name="repository"
                            id="repository"
                            placeholder='URL do repositório'
                            value={urlRepository}
                            onChange={(e) => setUrlRepository(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Deploy:</span>
                        <input
                            type="text"
                            name="deploy"
                            id="deploy"
                            placeholder='URL do deploy'
                            value={deploy}
                            onChange={(e) => setDeploy(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Autor:</span>
                        <input
                            type="text"
                            name="autor"
                            id="autor"
                            required
                            placeholder='Autor do post'
                            value={autor}
                            onChange={(e) => setAutor(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Tags:</span>
                        <input
                            type="text"
                            name="tags"
                            id="tags"
                            required
                            placeholder='Tags do post'
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </label>
                    {!response.loading && <button className={"primary-button"} type='submit' >Criar Post</button>}
                    {response.loading && <button className={"primary-button"} type='submit' disabled >Criando Post...</button>}

                    {response.error && <p className='error'>{response.error}</p>}
                    {formError && <p className='error'>{formError}</p>}
                </form>
            </div>
        </Page>
    )
}
