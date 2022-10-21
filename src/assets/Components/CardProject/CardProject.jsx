//====================================// Imports //==================================
import styled from "styled-components";
import Link from "../Link/Link";

//====================================// imagens //==================================
import HealthyFood from '../../img/HealthyFood.png'


//====================================// Style //==================================
const CardContainer = styled.div`
    width: 700px;
    height: 350px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    flex-wrap: wrap;
    background-color: #f9f1ff;
    border: 1px solid #52006b;
    box-shadow: 0 0 5px #0000004b;

    
    @media (max-width: 1024px) {
        height: 300px;
    }

    @media (max-width: 768px) {
        height: 300px;
        width: 500px;
    }

    @media (max-width: 425px) {
        width: 400px;
    }

    @media (max-width: 375px) {
        width: 360px;
    }
    @media (max-width: 320px) {
        height: 300px;
        width: 300px;
    }
`;

const AboutCard = styled.div`
    position: relative;
    text-align: left;
    overflow: hidden;
    padding: 30px;
    height: 100%;
    float: left;
    width: 40%;

    h1 {
        display: inline-block;
        position: relative;
        font-size: 30px;
        color: var(--cll-primary);
        margin: 0;
    }

    p {
        text-align: center;
        font-size: 1.8rem;
        color: #7d7d7d;
    }

    div {
        position: absolute;
        bottom: 5%;
        display: flex;
        column-gap: 40px;
    }

    @media (max-width: 1430px) {
        h1 {
            font-size: 2.5rem;
        }
        p {
            font-size: 1.6rem;
        }
        div {
            column-gap: 20px;
            a {
                font-size: 1.5rem;
            }
        }
    }

    @media (max-width: 1024px) {
        width: 50%;
        h1 {
            font-size: 2rem;
        }
        p {
            font-size: 1.4rem;
        }
        div {
            column-gap: 10px;
            a {
                font-size: 1.2rem;
            }
        }
    }

    @media (max-width: 768px) {
        width: 55%;
    }

    @media (max-width: 320px) {
        padding: 10px;
        div {
            left: 15px;
        }
    }
`;

const Info = styled.div`
	transition: all 0.3s ease-out;
	/* display: inline-block; */
	position: relative;
	overflow: hidden;
	height: 100%;
	/* float: right; */
	width: 60%;
	display: inline-block;

    &:hover div {
        transform: translateX(0);
    }

    img {
        height: 100%;
    }

    div {
        font-family: var(--ff-body);
        background: rgba(27, 26, 26, 0.9);
        transition: all 0.3s ease-out;
        transform: translateX(-100%);
        position: absolute;
        line-height: 1.8;
        text-align: left;
        font-size: 105%;
        color: #FFF;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;

        h2 {
            text-align: center;
        }

        ul {
            li {
                /* transition: 0.3s ease;
                font-size: 2.5rem;
                margin-left: 10px; */
                img {
                    width: 100px;
                    background-color: #F9F1FF;
                    border-radius: 5px;
                    margin: 5px;
                    padding: 5px;
                }
            }
        }
    }

    @media (max-width: 768px) {
        div {
            h2 {
                font-size: 2rem;
                max-width: 200px;
            }
            ul {
                li {
                    img {
                        width: 50px;
                    }
                }
            }
        }
    }
    @media (max-width: 375px) {
        div {
            h2 {
                font-size: 1.7rem;
                max-width: 150px;
            }
        }
    }
    @media (max-width: 320px) {
        div {
            h2 {
                font-size: 1.4rem;
                max-width: 130px;
            }
        }
    }

`;

//====================================// Code //==================================
const CardProjects = (props) => {


    return ( 
        <CardContainer>
            <AboutCard>
                <h1>{props.Titulo}</h1>
                <p>{props.Description}</p>
                <div>
                    <Link LinkUrl={props.LinkRepositorio}>Repositório</Link>
                    <Link LinkUrl={props.LinkSite}>Site</Link>
                </div>
            </AboutCard>
            <Info>
                <img src={props.Image} alt={props.ImgDescription} />
                <div>
                    <h2>Techs Utilizadas</h2>
                    <ul>
                        <li><img src={props.TechIcon} alt="" /></li>
                    </ul>
                </div>
            </Info>
        </CardContainer>
     );
}
 
export default CardProjects;