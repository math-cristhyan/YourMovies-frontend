import { Container, ArrowLeft, InputArea, TextArea, Markup, ButtonsArea } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NewMarkup } from "../../components/NewMarkup";

import { HiOutlineArrowLeft } from "react-icons/hi";
export function NewFilm() {
  return (
    <Container>
      <Header />

    <main>
      <ArrowLeft>
        <HiOutlineArrowLeft />
        Voltar
      </ArrowLeft>

      <h1>Novo filme</h1>
      <InputArea>
        <Input placeholder = "Titulo"/>
        <Input placeholder = "Sua nota (de 0 a 5)" />
      </InputArea>

      <TextArea 
      placeholder="Observações"
      />

      <Markup>
        <NewMarkup value= "React"/>
        <NewMarkup value= "Novo marcador" isNew = {true}/>
      </Markup>

      <ButtonsArea>
        <button>
          Excluir filme
        </button>

        <button>
          Salvar alterações
        </button>
      </ButtonsArea>

    </main>
    </Container>
  )
}
