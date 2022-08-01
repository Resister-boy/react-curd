import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import styles from '../scss/CreateWord.module.scss'

function CreateWord() {
  const days = useFetch('http://localhost:3001/days');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  
  function onSubmit(event) {
    event.preventDefault();

    if(!isLoading) {
      setIsLoading(true)
      fetch(`http://localhost:3001/words/`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          day: dayRef.current.value, 
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false
        })
      })
      .then(response => {
        if(response.ok) {
          alert('생성이 완료되었습니다')
          navigate(`/day/${dayRef.current.value}`, {replace: true})
        }
      });
      setIsLoading(false)
    }

    // console.log(engRef.current.value);
    // console.log(korRef.current.value);
    // console.log(dayRef.current.value);



  }

  const engRef = useRef(null)
  const korRef = useRef(null)
  const dayRef = useRef(null)

 

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.input_area}>
          <label>English</label>
          <input type="text" placeholder="영어 단어를 입력해주세요" ref={engRef} />
        </div>
        <div className={styles.input_area}>
          <label>Korean</label>
          <input type="text" placeholder="단어의 뜻을 입력해주세요" ref={korRef} />
        </div>
        <div className={styles.input_area}>
          <label>Day</label>  
          <select ref={dayRef}>
            {days.map(day => (
              <option key={day.id} value={day.day}>{day.day}</option>
            ))}
          </select>
        </div>
        <div className={styles.buttonBox}>
          <button onClick={onSubmit}>{isLoading ? "Saving..." : "저장"}</button>
        </div>
      </form>
    </div>
  );
}

export default CreateWord;