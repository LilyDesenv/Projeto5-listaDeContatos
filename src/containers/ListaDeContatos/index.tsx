import CardContato from '../../components/CardContato'
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
      <CardContato />
    </MainContainer>
  )
}

export default ListaDeContatos
