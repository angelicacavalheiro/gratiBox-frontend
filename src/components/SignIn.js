import styled from 'styled-components';

export default function SignIn() {
    return (
        <Container>
            <h1>Bem vindo ao GratiBox</h1>
            <input placeholder="Email"></input>
            <input placeholder="Senha"></input>
            <button>Login</button>
            <h2>Ainda não sou grato</h2>
        </Container>
    )
}

const Container = styled.p`
    color: #FFFFFF;
    font-family: Roboto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1{
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        text-align: center;
        margin: 101px auto 53px auto;
    }

    input{
        width: 325px;
        height: 64px;
        background: #FFFFFF;
        border: 1px solid #604848;
        border-radius: 10px;
        margin: 0 auto 8px auto;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #000000;

        ::placeholder,
        ::-webkit-input-placeholder {
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: rgba(96, 72, 72, 0.4);
        }
    }

    button{
        width: 237px;
        height: 56px;
        background: #8C97EA;
        border-color: #8C97EA;
        border-radius: 10px;
        margin: 144px auto 21px auto;
        font-family: Roboto;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
        text-align: center;
        color: #FFFFFF;
        cursor: pointer;
    }

    h2{
        width: 214px;
        height: 29px;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        margin: 0 auto 108px auto;
        cursor: pointer;
    }
`;