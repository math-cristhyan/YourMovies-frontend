import { Container, Stars, CreateInfo } from "./styles";

import { Header } from "../../components/Header";
import { BackButton } from "../..//components/BackButton";

import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";

export function Details() {
  return (
    <Container>
      <Header />


      <main>
        <BackButton />
        <div>
          <h1>Interestelar</h1>
          <Stars>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </Stars>
        </div>

          <CreateInfo>
            <img src="https://github.com/math-cristhyan.png" alt="" />
            <p className="AuthorDetail">Por Matheus Cristhyan</p>

            <div>
            <MdOutlineWatchLater />
            <p className="DateAndHour">29/12/2022 às 18:18</p>
            </div>
          </CreateInfo>
          
      </main>
    </Container>
  )
}