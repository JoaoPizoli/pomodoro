import { Logo } from './components/Logo'
import { Container }  from './components/Container'
import { Menu } from './components/Menu'

import './styles/global.css'
import './styles/theme.css'

export function App(){
  return (
    <>
    <Container>
      <Logo/>
    </Container>
    
    <Container>
      <Menu/>
    </Container>
      
    </>
  )
}