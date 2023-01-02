import styles from './Footer.module.scss'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <h2>Follow Us</h2>
      <div className={styles.Footer__SocialMidia}>
        <span> <a title='Link instagram' href="https://www.instagram.com/madeibras/"> <AiFillInstagram/> </a></span>
        <span> <a title='Link facebook' href="https://www.facebook.com/madeibras"><AiFillFacebook/> </a></span>
      </div>
      <p>Filtro All Rights Reserved</p>
    </div>
  )
}
