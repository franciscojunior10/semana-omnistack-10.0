import React from 'react';
import './styles.css';
import api from './../../services/api';

function DevItem({ dev }) {
    async function excluirConta(e){
        e.preventDefault();
        const response = api.delete(`devs/${dev._id}`);
    }
    
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <div className="div-opcoes">
                <div className="div-opcao">
                    <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
                </div>

                <div className="div-opcao">
                    <a onClick={excluirConta} href="#">Excluir conta</a>
                </div>
            </div>
                
        </li>
    );
}

export default DevItem;