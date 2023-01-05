import { Container, Form, BackgroundSignIn } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

export function SignIn() {
  return (
    <Container>

      <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir</p>

      <h2>Fazer seu login</h2>

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

      <Button title = "Entrar" />

      <a href="/">Criar conta</a>
      </Form>

      <BackgroundSignIn />


    </Container>
  )
}