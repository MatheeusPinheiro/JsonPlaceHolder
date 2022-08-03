import { useNavigate } from "react-router-dom";
import './styles.css';


export const Botao = () => {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return(
        <div className="botao" onClick={handleClick}>
            Voltar
        </div>
    );
}