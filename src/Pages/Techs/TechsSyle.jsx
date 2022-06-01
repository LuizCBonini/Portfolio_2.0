import styled from "styled-components";

export const TechStyle = styled.section`
    padding-top: var(--pt-section);
    height: 100vh;

    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1017%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M1464 560L0 560 L0 310.39Q45.05 283.44%2c 72 328.49Q116.36 252.85%2c 192 297.2Q237.98 271.18%2c 264 317.16Q346.33 279.5%2c 384 361.83Q390 295.83%2c 456 301.83Q486.49 260.32%2c 528 290.81Q620.26 263.07%2c 648 355.34Q698.21 285.55%2c 768 335.76Q824.6 320.36%2c 840 376.95Q862.46 327.41%2c 912 349.88Q979.5 297.38%2c 1032 364.87Q1037.17 298.04%2c 1104 303.21Q1153.11 232.31%2c 1224 281.42Q1331.27 268.69%2c 1344 375.96Q1396.6 308.56%2c 1464 361.16z' fill='rgba(23%2c 14%2c 71%2c 1)'%3e%3c/path%3e%3cpath d='M1488 560L0 560 L0 360.95Q58.98 299.94%2c 120 358.92Q167.14 334.06%2c 192 381.2Q241.81 359.01%2c 264 408.82Q332.67 357.49%2c 384 426.15Q426.12 348.26%2c 504 390.38Q554.84 321.22%2c 624 372.06Q677.04 353.1%2c 696 406.14Q743.28 381.42%2c 768 428.71Q778.01 366.72%2c 840 376.72Q912.97 329.69%2c 960 402.66Q1016.29 386.95%2c 1032 443.23Q1061.27 400.5%2c 1104 429.77Q1149.67 355.44%2c 1224 401.11Q1275.26 332.37%2c 1344 383.62Q1396.9 364.52%2c 1416 417.42Q1419.7 349.12%2c 1488 352.82z' fill='rgba(73%2c 56%2c 157%2c 1)'%3e%3c/path%3e%3cpath d='M1512 560L0 560 L0 507.47Q13.25 448.72%2c 72 461.97Q100.64 418.62%2c 144 447.26Q196.04 427.3%2c 216 479.34Q259.38 450.71%2c 288 494.09Q303.88 437.96%2c 360 453.84Q412.08 385.92%2c 480 438Q508.97 394.97%2c 552 423.93Q609.41 409.34%2c 624 466.75Q702.51 425.26%2c 744 503.77Q763.68 403.45%2c 864 423.13Q905.06 392.19%2c 936 433.24Q987.12 412.36%2c 1008 463.48Q1085.72 421.21%2c 1128 498.93Q1169.07 468%2c 1200 509.06Q1247.7 436.76%2c 1320 484.46Q1369.42 413.88%2c 1440 463.31Q1499.31 450.62%2c 1512 509.93z' fill='rgba(78%2c 57%2c 183%2c 1)'%3e%3c/path%3e%3cpath d='M1536 560L0 560 L0 580.03Q20.12 480.15%2c 120 500.27Q189.56 449.82%2c 240 519.38Q311.88 471.26%2c 360 543.14Q407.72 518.86%2c 432 566.57Q485.88 500.45%2c 552 554.32Q578.14 508.47%2c 624 534.61Q639.85 478.46%2c 696 494.3Q764.95 443.25%2c 816 512.2Q882.09 458.29%2c 936 524.38Q1005.36 473.74%2c 1056 543.1Q1076.38 491.48%2c 1128 511.86Q1155.42 467.28%2c 1200 494.71Q1252.94 475.65%2c 1272 528.59Q1297.84 482.43%2c 1344 508.27Q1398.41 490.68%2c 1416 545.09Q1469.27 478.36%2c 1536 531.63z' fill='rgba(110%2c 87%2c 224%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1017'%3e%3crect width='1440' height='660' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: bottom center;
    
    section {

        display: flex;
        justify-content: center;
        
        div {
            
            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.11);
            padding: 3rem;
            margin: 2rem 10rem 2rem 2rem;
            width: 70%;
            border-radius: 2rem;
            backdrop-filter: blur(4px);
            


            ul{

                list-style: none;
                display:flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: center;
                
            
                li {

                    color: var(--cll-primary);
                    margin: 3rem;
                    
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    svg {
                        font-size: 3rem;
                    }

                    p{
                        font-size: var(--fs-text);
                        font-weight: var(--fw-text);
                    }
                }
            }
        }
    }

    @media (max-width: 770px;) {
        
    }

`;