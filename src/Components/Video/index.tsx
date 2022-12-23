import styles from './Video.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { HashLink } from 'react-router-hash-link'

export default function Video() {

  const StartPage = () => {

  }

  return (
    <div className={styles.Video}>
      <div className={styles.Video__text}>
        <h1>MADEIRAS EM GERAL</h1>
       
          <HashLink to={`/#products`}>
            <p>Comece</p>
            <MdKeyboardArrowDown size={45} />
          </HashLink>
      
      </div>
      <video src="/Assets/img/cinematic.mp4" autoPlay loop muted ></video>
    </div>
  )
}
