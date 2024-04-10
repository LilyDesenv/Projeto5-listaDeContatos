import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  height: 100vh;
  margin: 0 auto;
`

export const Botao = styled.button`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.corBotao};
  border-radius: 50%;
  margin-right: 8px;
  margin-top: 40px;
  height: 56px;
  width: 56px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.corHeaderCard};
`
