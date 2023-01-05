import { Container } from "./styles";

import { HiOutlineArrowLeft } from "react-icons/hi";

export function BackButton() {
  return (
    <Container>
      <a>
        <HiOutlineArrowLeft />
        Voltar
      </a>
    </Container>
  )
}