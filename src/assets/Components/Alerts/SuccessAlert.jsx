import styled, { keyframes } from "styled-components";

//=========================================// Style //==========================================================//

const BlurOutContract = keyframes`
    0%{
        transform: translateY(0);
        filter:blur(.01px);
        transform: translate(-50%);
    } 
    20%{
        transform:translateY(100px);
        transform: translate(-50%);
        filter:blur(2px);
        opacity: 1;
    }
    80%{
        transform:translateY(100px);
        transform: translate(-50%);
        filter:blur(2px);
        opacity: 1;
    }
    100%{
        opacity:0;
        transform:translateY(0px);
        transform: translate(-50%);
        filter:blur(.01px);
    }
`;

const SuccessCard = styled.div`
    display: ${props => props.showAlert ? 'block' : 'none'};
    background-color: #009b00;
    color: #ffffff;
    font-weight: 300;
    border-radius: 10px;
    font-size: 2rem;
    position: fixed;
    padding: 10px;
    left: 50%;
    transform: translate(-50%);
    top: 100px;
    overflow: hidden;
    box-shadow: 0 5px 0 0 green;
    animation:${BlurOutContract} 2s linear forwards;
    animation-play-state: ${props => props.showAlert ? 'play' : 'paused'};

    @media(max-width: 425px) {
        font-size: 1.5rem;
        width: max-content;
    }
`;


//==================================// HTML // JavaScript //===============================================//

function Success(props) {
    return (
            <>
                <SuccessCard showAlert={props.showAlert}>{props.message}</SuccessCard>
            </>
        )
}
 
export default Success;