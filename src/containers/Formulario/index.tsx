import { Campo, MainContainer, Titulo, TituloCampo } from '../../styles'
import { BotaoSalvar, Form, FormCard, Grid } from './styles'

const Formulario = () => {
  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form>
        <FormCard>
          <Grid>
            <TituloCampo htmlFor="nome">Nome Completo:</TituloCampo>
            <Campo type="text" id="nome" />
            <TituloCampo htmlFor="email">E-mail:</TituloCampo>
            <Campo type="email" id="email" />
            <TituloCampo htmlFor="telefone">Telefone:</TituloCampo>
            <Campo type="text" id="telefone" />
          </Grid>
          <BotaoSalvar>Salvar</BotaoSalvar>
        </FormCard>
      </Form>
    </MainContainer>
  )
}

export default Formulario
