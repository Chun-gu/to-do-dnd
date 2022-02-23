import { useRecoilState } from "recoil";
import { toDoState } from "../../atoms";
import { Wrapper } from "./styled";

const Index = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);

  return <Wrapper>index</Wrapper>;
};

export default Index;
