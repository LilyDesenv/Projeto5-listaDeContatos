import styled, { createGlobalStyle } from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: ${variaveis.corCard};
  padding: 16px;
  max-width: 900px;
  display: grid;
  grid-template-columns: auto 1fr 100px;
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
`

export const BotoesDeAcao = styled.div`
  background-color: transparent;
  display: inline;
  margin: auto 0;
  justify-content: center;
`

export const LinkBotao = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin-left: 8px;
  background-color: transparent;
`

export const ImagemBotao = styled.img`
  width: 40px;
  height: 40px;
  background-color: transparent;
`

export const Grid = styled.div`
  background-color: transparent;
`
