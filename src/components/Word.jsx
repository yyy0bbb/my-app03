import React, { useState } from "react";

function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow(params) {
    setIsShow(!isShow);
    // ! >  뜻 참,거짓 뜻이다.
  }

  function toggleDone(params) {
    setIsDone(!isDone);
  }
  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      {/* &&로 이용해서 보기에 안 보이게 할 수 있다 */}
      <td>
        <button onClick={toggleShow}>뜻{isShow ? "숨기기" : "보기"}</button>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}

export default Word;
