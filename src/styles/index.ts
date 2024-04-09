import { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-family: 'Mukta', sans-serif;
  color: ${variaveis.corFonte};
  background-color: ${variaveis.corDeFundo};
}
`

export default EstiloGlobal
