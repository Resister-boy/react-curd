import { useParams, Link } from 'react-router-dom';
import Word from './Word'
import useFetch from '../hooks/useFetch';
import styles from '../scss/Day.module.scss'

function Day() {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`)
  const days = useFetch('http://localhost:3001/days');
  console.log(days)
  const prevDay = Number(day) - 1
  const nextDay = Number(day) + 1

  // const wordList = Dummy.words.filter(word => word.day === Number(day))
  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(data => {
  //     setWords(data);
  //   })
  // }, [day])

  return (
    <div className={styles.container}>
      <h2 className={styles.day}>Day{day}</h2>
      <h3 className="loading">{words.length === 0 && <span>Loading...</span>}</h3>
      <table>
        <tbody>
          {words.map(word => (
            <Word 
              key={word.id}
              word={word} />
          ))}
        </tbody>
      </table>
      <div className={styles.buttonBox}>
        {day > 1 
        ? <Link 
            to={`/day/${prevDay}`}
            className={styles.button}>
            Prev Day
          </Link> : null}
          {day < days 
          ? <Link 
              to={`/day/${nextDay}`}
              className={styles.button}>
              Next Day
          </Link> : null
          }
      </div>
      <div>
        <h2>
          {days === day 
            ? "등록되지 않은 날짜입니다" 
            : ''}
        </h2>
      </div>
    </div>
  )
}

export default Day;