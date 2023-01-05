import { Container } from "./styles";

import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { Tag } from "../Tag";


export function MovieDetails({data, ...rest}) {
  return (
    <Container>
      <h1>{data.title}</h1>
      <div>
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSLine />
      </div>
      <p>{data.sinopse}</p>

      {data.tags &&
      <footer>
        {data.tags.map(tag => <Tag  key={tag.id} title = {tag.name}/>)}
      </footer>}
    </Container>
  )
}