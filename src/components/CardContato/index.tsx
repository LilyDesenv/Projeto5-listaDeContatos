import {
  BotoesDeAcao,
  Campo,
  Card,
  Grid,
  ImagemBotao,
  LinkBotao,
  TituloCampo
} from './styles'

import a from '../../images/icons/edit.svg'
const CardContato = () => {
  return (
    <Card>
      <Grid>
        <TituloCampo htmlFor="nome">Nome Completo:</TituloCampo>
        <TituloCampo htmlFor="email">E-mail:</TituloCampo>
        <TituloCampo htmlFor="telefone">Telefone:</TituloCampo>
      </Grid>
      <Grid>
        <Campo type="text" id="nome" />
        <Campo type="email" id="email" />
        <Campo type="text" id="telefone" />
      </Grid>
      <BotoesDeAcao>
        <LinkBotao>
          <ImagemBotao
            src="https://servidor-estaticos-pi-nine.vercel.app/edit.svg"
            alt="Editar Contato"
            title="Editar Contato"
          />
        </LinkBotao>
        <LinkBotao>
          <ImagemBotao
            src="https://servidor-estaticos-pi-nine.vercel.app/trash-2.svg"
            alt="Excluir Contato"
            title="Excluir Contato"
          />
        </LinkBotao>
      </BotoesDeAcao>
    </Card>
  )
}

export default CardContato
