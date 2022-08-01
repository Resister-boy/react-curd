import { useParams } from 'react-router-dom';
import Word from './Word'
import useFetch from '../hooks/useFetch';
import styles from '../scss/Day.module.scss'

function Day() {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`)

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
    </div>
  )
}

export default Day;