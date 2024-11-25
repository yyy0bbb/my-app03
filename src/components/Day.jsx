import { useParams } from "react-router-dom";
import dummy from "../db/data.json";
import Word from "./Word";

function Day(props) {
  // const day = 1;
  // url에 포함된 day값을 가져오기 위해서 useParams()
  // day/1이 파라미터이다.

  const day = useParams().day;
  // :day가 여기로 넘어온다. > 파라미터라고 생각
  const wordList = dummy.words.filter((k) => k.day === Number(day));
  return (
    <table>
      <tbody>
        {/* {dummy.words.map((k) => { */}
        {wordList.map((k) => {
          return <Word key={k.id} word={k} />;
          // word로 보냈으니 props 변경해주기
        })}
      </tbody>
    </table>
  );
}

export default Day;
