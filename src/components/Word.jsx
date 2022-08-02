import { useState } from "react";

function Word(props) {
  const [word, setWord] = useState(props.word);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow)
  }

  function toggleDone() {
    // setIsDone(!isDone)
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone
      })
    })
    .then(response => {
      if(response.ok) {
        setIsDone(!isDone)
      }
    });
  }

  function deleteWord() {
    if(window.confirm('삭제하시겠습니까?')) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: 'DELETE'
      })
      .then(response => {
        if(response.ok) {
          setWord({ id: 0 })
        }
      })
    }
  }

  if (word.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>
        {word.eng}
      </td>
      <td>
        {isShow && word.kor}
      </td>
      <td>              
        <button onClick={toggleShow} className="btn_hide">{isShow ? "Hide" : "Show"}</button>
        <button onClick={deleteWord} className="btn_del">Delete</button>
      </td>
    </tr>
  );
}

export default Word;