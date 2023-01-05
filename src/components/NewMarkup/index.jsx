import { Container } from "./styles";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";


export function NewMarkup({isNew, value, onClick}) {
  return (
    <Container isNew = {isNew}>
        {value}
        <button onClick={onClick}>
        {isNew ? <AiOutlinePlus /> : <AiOutlineClose />}
        </button>
    </Container>
  )
}