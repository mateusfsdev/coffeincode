import styled from "styled-components";

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-around;
background-size: 10px 10px;
background-image:
repeating-linear-gradient(135deg, #222222 0, #464646 1px, #181818 0, #333333 999%);
border-bottom: 1px solid #4f4f4f;

width: 100%;
height: 12%;
color:#FFAF4F;


img {
  height: 7em;
  will-change: filter;
  transition: filter 300ms;
}

img:hover {
  filter: drop-shadow(0 0 0.5em #ffb04f65);

}
.nav a{
  text-decoration: none;
  font-weight: 600;
  margin: 1rem;
  color: #FFAF4F;
  
}

.nav a:hover {
  filter: drop-shadow(-1px 0 0.5em #FFAF4F);
}
.nav a:active {
  color: #9f0dc4;
}


`