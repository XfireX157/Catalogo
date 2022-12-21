import { AiOutlineSearch } from 'react-icons/ai'
import styles from './Header.module.scss'
import { useState } from 'react'

export default function Header() {

    const [active, setActive] = useState({
        logo: true,
    })

    return (
        <div className={styles.Header}>
            {active.logo && <div className={styles.Header__Logo}>
                <img src="/Assets/img/logo.svg" alt="Logo Madeibrás" />
            </div>}
            <div className={active.logo ? styles.Header__Search : styles.Header__SearchActive} >
                {!active.logo && <input type="text" placeholder='Pesquisar' />}
                <span  className={styles.Header__Search__Btn}>
                    <AiOutlineSearch
                        color='#292525'
                        size={24}
                        onClick={() => setActive({ ...active, logo: !active.logo })} />
                </span>
            </div>
        </div>
    )
}
