import styled from "styled-components";

export const HeaderStyle = styled.header`

    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    align-itens: center;
    position: fixed;
    backdrop-filter: blur(4px);
    border-bottom: 0.2rem solid var(--cll-primary-alt);
    z-index: 3;


    h2 {
        color: var(--cll-primary-alt);
        font-size: var(--fs-title);
    }

    >div {

        display: flex;
        align-items: center;

        .nav-bar {

            .mobile-menu {

                display: none;

                div{
                    width: 3rem;
                    height: .2rem;
                    background: var(--cll-primary);
                    margin: .8rem;
                    transition: 0.5s;
                }
            }

            >ul.menu {
                list-style: none;
                display: flex;
            }

            li a span {
                color: var(--cll-primary-alt);
                margin-left: 1.5rem;
                font-weight: var(--fw-text);
                text-transform: uppercase;
                font-size: var(--fs-text);
                letter-spacing: .3rem;
                
                &:hover {
                    border-bottom: 2px solid var(--cll-primary-alt);
                }
            }

        }
    }

    @media (max-width: 999px) {

        ul.menu {
            position: absolute;
            top: 14.5vh;
            right: 0;
            width: 50vw;
            height: 85vh;
            background-color: var(--cll-primary-lighter);
            border-radius: 1rem 0 0 1rem;
            border-left: 2px solid var(--cll-primary);
            border-top: 2px solid var(--cll-primary);
            border-bottom: 2px solid var(--cll-primary);
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            transform: translateX(100%);
            transition: transform 0.3s ease-in;
        }

        ul.menu.active {
            transform: translateX(0);
        }
        
        >div .nav-bar {

            .mobile-menu {
                display: block;
                cursor: pointer;
            }
            
            li {

                opacity: 0;

                a span {
                    margin-left: 0;
                }
            }
        }

        .mobile-menu.active .line1 {
            transform: rotate(-45deg) translate(-8px, 8px);
        }
        .mobile-menu.active .line2 {
            opacity: 0;
        }
        .mobile-menu.active .line3 {
            transform: rotate(45deg) translate(-5px, -7px);
        }

        @keyframes navLinkFade {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
    }
    
`;