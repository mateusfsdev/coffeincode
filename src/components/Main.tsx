import styled from "styled-components";

export const Main =styled.main`

display: grid;
grid-template-columns: 47% 2fr;
color: #ffb04f75;
width: 100%;
height: 80vh;
border-bottom: 1px solid #4f4f4f;



`

export const Image =styled.div`
img {
  padding: 20%;
  align-items: center;
  width: 18em;
  height: 24em;
  opacity: 0.6;


}

`

export const Text =styled.div`
max-width: 550px;
  h1 span {
    color: #ffb04fe2;
    font-size: 1.2em;
    padding-bottom: 14em;
  }
  h2 {
    max-width: 600px;
    padding: 1.75rem;
    COLOR: #9c9c9c;
  }
  a {
    text-decoration: none;
    font-style: none;
    color: #FFAF4F;   
  }
`