import axios, { AxiosRequestConfig } from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from 'utils/requests';
import './styles.css'

function PageNewMovie() {
    
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const title = (event.target as any).title.value;
        const imagem = (event.target as any).imagem.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/movies',
            data: {
                title: title,
                image: imagem
            }
        }

        axios(config).then(responde => {
            navigate("/");
        });
    }

    return (
        <div className="dsmovie-form-container">
            <div className="dsmovie-card-bottom-container">
                <form className="dsmovie-form" onSubmit={handleSubmit}>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="title">Informe o nome do filme</label>
                        <input type="text" className="form-control" id="title" required/>
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="imagem">Informe a url de uma imagem para a capa do filme</label>
                        <input type="text" className="form-control" id="imagem" required/>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    )
}

export default PageNewMovie;