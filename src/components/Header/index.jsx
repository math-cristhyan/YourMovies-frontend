import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <h2>Matheus Crsithyan</h2>
          <p>sair</p>
        </div>

        <img src="https://github.com/math-cristhyan.png" alt="" />
      </Profile>

    </Container>
  )
}