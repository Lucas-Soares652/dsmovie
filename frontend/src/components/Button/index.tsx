import { Link } from "react-router-dom";
import './styles.css'

function Button(){
    return(
        <div className="dsmovie-button-container">
            <Link to="/new-movie">
                    <button className="btn btn-primary dsmovie-btn mt-3">Adicionar novo filme</button>
            </Link>
        </div>
    );
}

export default Button;