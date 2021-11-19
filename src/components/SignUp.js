import styled from 'styled-components';

export default function SignUp() {
    return (
        <Conteiner>
            <h1>Bem vindo ao GratiBox</h1>
            <input placeholder="Nome"></input>
            <input placeholder="Email"></input>
            <input placeholder="Senha"></input>
            <input placeholder="Confirmar senha"></input>
            <button>Cadastrar</button>
        </Conteiner>
    )
}

const Conteiner = styled.p`

    color: black;
`;