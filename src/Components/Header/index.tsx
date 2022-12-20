import styles from './Header.module.scss'
import { Fade as Hamburger } from 'hamburger-react'


export default function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.Header__Logo}>
                <img src="/Assets/img/logo.svg" alt="Logo Madeibrás" />
            </div>
            <div>
                <Hamburger color='#FFF' size={30} />
            </div>
        </div>
    )
}
