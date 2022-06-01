import styled from "styled-components";

export const ContactStyle = styled.section`
    padding-top: var(--pt-section);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1740' height='860' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1146%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(110%2c 87%2c 224%2c 1)'%3e%3c/rect%3e%3cpath d='M -101.88277954719841%2c228 C -65.88%2c250.4 6.12%2c336.6 78.11722045280159%2c340 C 150.12%2c343.4 186.12%2c251.8 258.1172204528016%2c245 C 330.12%2c238.2 366.12%2c303.4 438.1172204528016%2c306 C 510.12%2c308.6 546.12%2c255.2 618.1172204528016%2c258 C 690.12%2c260.8 726.12%2c316.4 798.1172204528016%2c320 C 870.12%2c323.6 906.12%2c278.6 978.1172204528016%2c276 C 1050.12%2c273.4 1086.12%2c317 1158.1172204528016%2c307 C 1230.12%2c297 1266.12%2c225.4 1338.1172204528016%2c226 C 1410.12%2c226.6 1497.74%2c303.2 1518.1172204528016%2c310 C 1538.49%2c316.8 1455.62%2c270 1440%2c260' stroke='rgba(32%2c 7%2c 156%2c 0.31)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -23.82816163503074%2c242 C 12.17%2c251.4 84.17%2c286.8 156.17183836496926%2c289 C 228.17%2c291.2 264.17%2c240.2 336.1718383649693%2c253 C 408.17%2c265.8 444.17%2c360.2 516.1718383649693%2c353 C 588.17%2c345.8 624.17%2c230 696.1718383649693%2c217 C 768.17%2c204 804.17%2c277.4 876.1718383649693%2c288 C 948.17%2c298.6 984.17%2c266 1056.1718383649693%2c270 C 1128.17%2c274 1164.17%2c312.8 1236.1718383649693%2c308 C 1308.17%2c303.2 1344.17%2c251.2 1416.1718383649693%2c246 C 1488.17%2c240.8 1591.41%2c278.4 1596.1718383649693%2c282 C 1600.94%2c285.6 1471.23%2c267.6 1440%2c264' stroke='rgba(32%2c 7%2c 156%2c 0.31)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -175.1023180583498%2c293 C -139.1%2c288.6 -67.1%2c262.2 4.897681941650216%2c271 C 76.9%2c279.8 112.9%2c337.6 184.8976819416502%2c337 C 256.9%2c336.4 292.9%2c276.2 364.8976819416502%2c268 C 436.9%2c259.8 472.9%2c306.6 544.8976819416503%2c296 C 616.9%2c285.4 652.9%2c208.8 724.8976819416503%2c215 C 796.9%2c221.2 832.9%2c322 904.8976819416503%2c327 C 976.9%2c332 1012.9%2c237.4 1084.8976819416503%2c240 C 1156.9%2c242.6 1192.9%2c342 1264.8976819416503%2c340 C 1336.9%2c338 1409.88%2c236.6 1444.8976819416503%2c230 C 1479.92%2c223.4 1440.98%2c291.6 1440%2c307' stroke='rgba(32%2c 7%2c 156%2c 0.31)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -228.59372281673802%2c322 C -192.59%2c308 -120.59%2c246 -48.59372281673802%2c252 C 23.41%2c258 59.41%2c346.6 131.40627718326198%2c352 C 203.41%2c357.4 239.41%2c283 311.406277183262%2c279 C 383.41%2c275 419.41%2c345.4 491.406277183262%2c332 C 563.41%2c318.6 599.41%2c218.6 671.406277183262%2c212 C 743.41%2c205.4 779.41%2c293 851.406277183262%2c299 C 923.41%2c305 959.41%2c232.2 1031.4062771832619%2c242 C 1103.41%2c251.8 1139.41%2c345.6 1211.4062771832619%2c348 C 1283.41%2c350.4 1345.69%2c262.8 1391.4062771832619%2c254 C 1437.13%2c245.2 1430.28%2c294 1440%2c304' stroke='rgba(32%2c 7%2c 156%2c 0.31)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1146'%3e%3crect width='1440' height='860' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-repeat: no-repeat;
    height: 120vh;


    h1,
    h2 {
        color: #fff;
    }

    >div.form-box {
        text-align: center;
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            margin: 0 auto;
            padding: 2rem;


            width: 100%;
            max-width: 40rem;

            border: 1px solid var(--cll-primary-lighter);
            border-radius: 1rem;

            background-color: var(--cll-primary-alt);

            label {
                color: var(--cll-primary-lighter);
                font-size: var(--fs-title);
                font-weight: var(--fw-text);
            }

            input,
            textarea {
                padding: .8rem;
                border-radius: 1rem;
                border: 2px solid transparent;
                font-family: inherit;

                &:hover,
                &:focus {
                    outline: none;
                    border-color: var(--cll-primary);
                }
            }

            textarea {
                max-height: 20rem;
                max-width: 30rem;
                resize: vertical;
            }

            button {
                color: #fff;
                background-color: var(--cll-primary);
                border: 1px solid var(--cll-primary-lighter);
                border-radius: 1rem;
                margin-top: 1rem;
                width: 20rem;
                height: 3rem;
                cursor: pointer;
                font-family: inherit;
                font-size: 2rem;
                font-weight: var(--fw-text);
                transition: 250ms ease;

                &:hover {
                    transform: translateY(5%);
                    color: var(--cll-primary-lighter);
                }
            }
        }
    }

    /*>div.contact-content {
        font-size: var(--fs-text);
        font-weight: var(--fw-text);
        width: 70rem;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.21);
        border-radius: 1rem;
        padding: 4rem;
        background-color: var(--cll-primary-alt);
        

        margin: 0 auto;
        text-align: center;

        .social-media {
            color: var(--cll-primary-more-lighter);
            margin: 0 1.5rem;

            
            svg {
                width: 3.5rem;
                height: 3.5rem;
            }

            &:hover {
                color: var(--cll-primary-lighter);
                border-bottom: 2px solid var(--cll-primary-lighter);
            }
        }
    } */
`;