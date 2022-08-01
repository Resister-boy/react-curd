import useFetch from "../hooks/useFetch";
import { useNavigate } from 'react-router-dom';
import styles from '../scss/CreateDay.module.scss'

function CreateDay() {
  const days = useFetch('http://localhost:3001/days');
  const navigate = useNavigate();

  function addDay() {
    fetch('http://localhost:3001/days/', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        day: days.length + 1
      })
    })
    .then(response => {
      if(response.ok) {
        alert('날짜 생성이 완료되었습니다');
        navigate('/');
      }
    });
  }

  return (
    <div className={styles.container}>
      <h3>Recent Date: Day {days.length}</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}

export default CreateDay;