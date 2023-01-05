import { Container, Header, Avatar } from "./styles";

import { HiOutlineArrowLeft, HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { AiOutlineCamera } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";

export function Profile() {
  return (
    <Container>
      <Header>
        <BackButton />
      </Header>

      <main>
        <Avatar>
          <div>
            <img src="https://github.com/math-cristhyan.png" alt="" />
            <label htmlFor="photo">
              <AiOutlineCamera />
            </label>
            <input type="file" id="photo" />
          </div>
        </Avatar>

        <Input
          style={{ color: "#ffffff" }}
          type="text"
          icon={BiUser}
          value="Matheus Cristhyan"
        />

        <Input
          style={{ color: "#ffffff" }}
          type="email"
          icon={HiOutlineMail}
          value="matheuscristhyan.2@gmail.com"
        />

        <Input
          type="password"
          icon={HiOutlineLockClosed}
          placeholder="Senha atual"
        />

        <Input
          type="password"
          icon={HiOutlineLockClosed}
          placeholder="Nova Senha"
        />

        <Button title = "Salvar"/>

      </main>

    </Container>
  )
}