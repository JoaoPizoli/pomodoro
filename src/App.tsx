import { Logo } from './components/Logo'
import { Container }  from './components/Container'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'

import './styles/global.css'
import './styles/theme.css'
import { DefaultInput } from './components/DefaultInput'

export function App(){
  return (
    <>
    <Container>
      <Logo/>
    </Container>
    
    <Container>
      <Menu/>
    </Container>

    <Container>
      <CountDown/>
    </Container>

    <Container>
      <form action="" className='form'>
        <div className='formRow'>
          <DefaultInput  labelText='salve' id='input' type='text' />
        </div>

        <div className='formRow'>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='formRow'>
          <p>Ciclos</p>
          <p>0 0 0 0 0 0</p>
        </div>

        <div className='formRow'>
          <button>Enviar</button>
        </div>
      </form>
    </Container>

    </>
  )
}