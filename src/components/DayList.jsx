import{ Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import styles from '../scss/DayList.module.scss';

function DayList() {
  const days = useFetch('http://localhost:3001/days');
  if(days.length === 0 ) {
    return <span className='loading'>Loading...</span>
  }
  // const [days, setDays] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/days')
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(data => {
  //     setDays(data)
  //   })
  // }, [])

  return (
    <div>
      <ul className={styles.container}>
        {days.map(day => (
        <li key={day.id}>
          <Link 
            className={styles.day}
            to={`/day/${day.day}`}>
              Day {day.day}
          </Link>
        </li>
        ))}
      </ul>
    </div>
  );  
}

export default DayList;