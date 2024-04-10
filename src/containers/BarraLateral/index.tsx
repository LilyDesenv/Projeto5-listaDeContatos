import { Aside, Botao, ImagemVoltar } from './styles'

const BarraLateral = () => {
  return (
    <Aside>
      <Botao title="Adicionar novo Contato">+</Botao>
      <Botao>
        <ImagemVoltar
          src="https://servidor-estaticos-pi-nine.vercel.app/arrow-left-circle.svg"
          alt="Voltar"
          title="Voltar"
        />
      </Botao>
    </Aside>
  )
}

export default BarraLateral
