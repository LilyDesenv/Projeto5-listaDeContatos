import CardContato, { CardContatoEdit } from '../../components/CardContato'
import HeaderCardContato from '../../components/HeaderCardContato'
import { MainContainer, Titulo } from '../../styles'

const ListaDeContatos = () => {
  return (
    <MainContainer>
      <Titulo>Lista de Contatos</Titulo>
      <HeaderCardContato />
      <CardContato />
      <CardContato />
      <CardContato />
      <HeaderCardContato />
      <CardContatoEdit />
    </MainContainer>
  )
}

export default ListaDeContatos
