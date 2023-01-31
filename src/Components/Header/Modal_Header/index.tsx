import { ICategory } from '../../../Types/ICategory'
import styles from './Modal_Header.module.scss'

interface IModal {
    search: string
    searchBar: any
}

export default function Modal_Header({search, searchBar }: IModal) {
    return (
        <>
            {search && <div className={styles.Modal}>
                {searchBar.map((item: any) => (
                    <h2>{item.text} </h2>
                ))}
            </div>}
        </>
    )
}
