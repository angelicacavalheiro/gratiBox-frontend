import styled from 'styled-components';
import imgAdress from '.././assets/image03.jpg'
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Adress() {
    return (
        <Container>
            <h1>Bom te ver por aqui, @User.</h1>
            <h2>"Agradecer é arte de atrair coisas boas"</h2>
            <AdressInputs>
                <img src={imgAdress} alt="pessoa meditando"/>
                <input type="text" placeholder="Nome completo"/>
                <input type="text" placeholder="Endereço de entrega"/>
                <input type="text" placeholder="CEP"/>                    
                <input type="text" placeholder="Cidade"/>
                <button>
                    <h3>Estado</h3> <MdKeyboardArrowDownStyled/>                            
                </button>                           
            </AdressInputs>
            <Button>Finalizar</Button>
        </Container>
    )
}

const AdressInputs = styled.div`
    width: 356px;
    height: 429px;
    background: pink;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    background-color: #ffffff;

    img{
        width: 300px;
        height: 172px;
        border-radius: 25px;
    }

    input{
        display: flex;
        justify-content: space-between;
        padding-left: 10px;
        width: 290px;
        height: 44px;
        border-radius: 5px;
        background-color: #E0D1ED;
        border-color: #E0D1ED;
        margin-bottom: 7px;
        text-align: start;
        font-family: Roboto;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #4D65A8;
        ::placeholder,
        ::-webkit-input-placeholder {     
            color: #4D65A8;
        }
    }
    button{
        display: flex;
        justify-content: space-between;
        padding: 0px 10px 0px 10px;
        width: 290px;
        height: 44px;
        background-color: #E0D1ED;
        color: #4D65A8;
        border-radius: 5px;
        font-family: Roboto;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
    } 
    h3{
        padding-top: 10px;
    }
    
`;

const MdKeyboardArrowDownStyled = styled(MdKeyboardArrowDown)`
    color: #4D65A8;
    font-size: 35px;
    height: 44px;
`;

const Container = styled.div`
    font-family: Roboto;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1{
        width: 341px;
        height: 29px;
        font-weight: bold;
        font-size: 26px;
        line-height: 30px;
        margin: 101px auto 22px auto;
    }
    h2{
        width: 333px;
        height: 33px;    
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        margin: 0 auto;
    }
`;

const Button = styled.button `     
    width: 202px;
    height: 39px;
    background: #8C97EA;
    border-color: #8C97EA;
    border-radius: 10px;
    margin: 31px auto 23px auto;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    font-family: Roboto;
    text-align: center;
`;








