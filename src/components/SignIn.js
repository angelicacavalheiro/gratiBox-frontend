import styled from 'styled-components';

export default function SignIn() {
    return (
        <Conteiner>
            <h1>Bem vindo ao GratiBox</h1>
            <input placeholder="Email"></input>
            <input placeholder="Senha"></input>
            <button>Login</button>
            <h2>Ainda não sou grato</h2>
        </Conteiner>
    )
}

const Conteiner = styled.p`
    background-color: #6D7CE4;

    color: black;
`;