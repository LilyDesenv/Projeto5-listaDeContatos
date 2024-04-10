import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-family: 'Mukta', sans-serif;
  color: ${variaveis.corFonte};
  background-color: ${variaveis.corDeFundo};
  list-style: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  max-width: 1200px;
  margin: 0 auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 40px;
  margin-top: 40px;
  display: block;
`

export default EstiloGlobal
