import styled from 'styled-components';
import imgAdress from '.././assets/image05.jpg';

export default function Home() {
    return (
        <Conteiner>
            <h1>Bem vindo ao GratiBox</h1>
            <h2>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</h2>
            <Center>
                <button>Quero Começar</button>
                <h3>Já sou logado</h3>
            </Center>            
        </Conteiner>
    )
}

const Conteiner = styled.div`
    font-family: Roboto;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        width: 341px;
        height: 29px;
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        text-align: center;
        margin: 53px auto 44px auto;
    }
    h2{
        margin: 0 auto;
        width: 341px;
        height: 92px;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
    }
`;

const Center = styled.div`
    font-family: Roboto;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${imgAdress});
    width: 410px;
    height: 525px;
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 

    button{
        width: 202px;
        height: 45px;
        background: #8C97EA;
        border-radius: 10px;
        border-color: #8C97EA;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        margin: 420px auto 0 auto;
    }

    h3{
        width: 180px;
        height: 28px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        margin: 17px auto 10px auto;

    }
`;


