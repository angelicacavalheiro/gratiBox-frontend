import styled from 'styled-components';
import imgAdress from '.././assets/image03.jpg'
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Details() {
    return (
        <Container>
            <h1>Bom te ver por aqui, @User.</h1>
            <h2>"Agradecer é arte de atrair coisas boas"</h2>
            <Options>
                <img src={imgAdress} alt="pessoa meditando"/>
                <PlanType>
                    <h3>Plano: </h3>
                    <MdKeyboardArrowDownStyled/>
                </PlanType>

                <Delivery>
                    <h3>Entrega </h3>
                    <MdKeyboardArrowDownStyled/>
                </Delivery> 

                <Products>
                    <h3> Quero receber </h3> 
                    <div>
                        <p>                            
                            <input type="checkbox" id="Chás"/>
                            <h4> Chás </h4>                        
                            <input type="checkbox" id="Incesos" />
                            <h4> Incesos </h4>                            
                        </p>                        
                        <p>
                            <input type="checkbox" id="Produtos orgânicos" />
                            <h4> Produtos orgânicos </h4>
                        </p>                      
                    </div>                  
                   
                </Products>
            </Options>
            <button>Próximo</button>
        </Container>
    )
}

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
    button{     
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
    }
`;

const Options = styled.div`
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
`;
const PlanType = styled.div`  
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 8px;
    width: 290px;
    height: 44px;
    border-radius: 5px;
    background-color: #E0D1ED;
    margin-bottom: 7px;
    h3{
        padding-top: 10px;
        color: #4D65A8;
    }  
`;

const Delivery = styled.div`  
    display: flex; 
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 8px;
    width: 290px;
    height: 44px;
    border-radius: 5px;
    background-color: #E0D1ED;
    margin-bottom: 7px;
    h3{
        padding-top: 10px;
        color: #4D65A8;        
    }
    h4{
        color: #E63C80;
    }   
`;

const Products = styled.div`  
    display: flex; 
    flex-direction: column;
    padding-left: 10px;
    padding-right: 8px;
    width: 290px;
    height: 111px;
    border-radius: 5px;
    background-color: #E0D1ED;
    div{
        display: flex;
        flex-direction: column;
    }
    p{
            display: flex;
    }
    h3{
        color: #4D65A8;   
        margin-bottom: 15px;
        padding-top: 10px;
    }
    h4{    
        font-weight: normal;
        width: 270px;
        color: #4D65A8;  
        margin-bottom: 5px;
    }   
`;


