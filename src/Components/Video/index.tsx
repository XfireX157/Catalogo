import styles from './Video.module.scss'
import {MdKeyboardArrowDown} from 'react-icons/md'

export default function Video() {
  return (
    <div className={styles.Video}>
      <div className={styles.Video__text}>
        <h1>MADEIRAS EM GERAL</h1>
        <span className={styles.Video__text__started}>
          <p>Comece</p>
          <MdKeyboardArrowDown size={45}/>
        </span>
      </div>
      <video src="/Assets/img/cinematic.mp4" autoPlay loop muted ></video>
    </div>
  )
}
