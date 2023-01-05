import { Container, Form, BackgroundSignIn } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiArrowSmLeft } from "react-icons/hi";

export function SignUp() {
  return (
    <Container>

      <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir</p>

      <h2>Crie sua conta</h2>

      <Input 
      type = "text"
      icon={HiOutlineUser}
      placeholder = "Nome"
      />

      <Input 
      type = "email"
      icon={HiOutlineMail}
      placeholder = "E-mail"
      />

      <Input 
      type = "password"
      icon={HiOutlineLockClosed}
      placeholder = "Senha"
      />

      <Button title = "Cadastrar" />

      <a href="/">
        <HiArrowSmLeft />
        Voltar para o login
        </a>
      </Form>

      <BackgroundSignIn />


    </Container>
  )
}