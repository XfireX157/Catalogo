import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'
import styles from './Header.module.scss'
import Modal_Header from './Modal_Header'

export default function Header() {

    const [search, setSearch] = useState('')
    const [active, setActive] = useState({
        logo: true,
    })

    const searchBar = () => {
        if (!search) return []
        // else {
        //     return CardsMock.filter((item) =>
        //         item.text
        //             .toLocaleLowerCase()
        //             .normalize('NFD')
        //             .replace(/[^a-zA-Zs]/g, "")
        //             .includes(search)
        //     )
        // }
    }
    return (
        <>
            <div className={styles.Header}>
                {active.logo &&
                    <div className={styles.Header__Logo}>
                        <img src="/Assets/img/logo.svg" alt="Logo Madeibrás" />
                    </div>}
                <div className={active.logo ? styles.Header__Search : styles.Header__SearchActive}>
                    {!active.logo &&
                        <input
                            type="text"
                            placeholder='Pesquisar'
                            onChange={(e) => setSearch(e.target.value)}
                        />}
                    <span className={styles.Header__Search__Btn}>
                        <AiOutlineSearch
                            color='#292525'
                            size={24}
                            onClick={() => setActive({ ...active, logo: !active.logo })} />
                    </span>
                </div>
            </div>
            <Modal_Header searchBar={searchBar()} search={search} />
        </>
    )
}
