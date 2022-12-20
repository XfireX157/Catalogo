import styles from './Footer.module.scss'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <h2>Follow Us</h2>
      <div className={styles.Footer__SocialMidia}>
        <span><AiFillInstagram/></span>
        <span><AiFillFacebook/></span>
      </div>
      <p>Filtro All Rights Reserved</p>
    </div>
  )
}
