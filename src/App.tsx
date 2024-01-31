
import { Header } from './components/Header'
import { Main, Image, Text } from './components/Main'
import { Footer } from './components/Footer'

import background from "./assets/back.png";
import logoCode from './assets/logo.png'
import devCode from './assets/dev.png'


export default function App() {
  return (
    <>
      <Header>
          <img src={logoCode}/>
        <nav className='nav'>
          <a href="/home">Home</a>
          <a href="/">Projects</a>
          <a href="#">Contact</a>
        </nav>
      </Header>

      <Main style={{ backgroundImage: `url(${background})` }}>
        <Image><img src={devCode}/></Image>
        <Text>
        <h1><span>Coffee in code</span> é um projeto pessoal com intuito de registro educativo, feito pelo desenvolvedor frontend e mobile <a href="https://github.com/mateusfsdev">Mateus Sant'ana</a></h1>
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, natus veniam! Recusandae, commodi. Error rerum nobis ut ea aliquam, aspernatur doloremque quia eos magnam dignissimos quas eum nulla aliquid reiciendis.</h2>
        </Text>
      </Main>

      <Footer>
        <span>Feito com ❤ por  &nbsp;
          <a href="https://github.com/mateusfsdev">Mateus Sant'ana</a></span>
      </Footer>
    </>
    
  )
}


