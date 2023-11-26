import { useSelector } from "react-redux";
import { RootState } from "../store";
import { VisitedCharactersState } from "../store/visitedCharactersSlice";
import { GridContainer } from "../containers";
import { CardCharacter, CloseButton, NoData } from "../components";
import { useNavigate } from "react-router-dom";


export const VisitedCharactersPage = () => {
  const navigate = useNavigate();

  const { characters } = useSelector<RootState, VisitedCharactersState>((store) => store.visited);

  if (!characters) {
    return <NoData msg="No tienes personajes visitados"/>
  }

  return (
    <GridContainer>


      {characters.map((character) => (
        <CardCharacter key={character.id} character={character} />

      ))}
      <CloseButton handleClick={() => navigate(-1)}/>
    </GridContainer>
  )
}
