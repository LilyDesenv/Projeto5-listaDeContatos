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
  margin-bottom: 20px;
  margin-top: 40px;
  display: block;
`

export const TituloCampo = styled.label`
  font-weight: bold;
  background-color: transparent;
  text-align: right;
  display: block;
`

export const Campo = styled.input`
  margin-left: 16px;
  display: block;
  max-width: 600px;
  width: 100%;
  border: none;
  border-bottom: 2px solid ${variaveis.corFonte};
  margin-bottom: 16px;
`

export default EstiloGlobal
