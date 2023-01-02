import styles from './Modal_Header.module.scss'
import { ISelects } from '../../../Mock/Cards'

interface IModal {
    search: string
    searchBar: ISelects | any
}

export default function Modal_Header({search, searchBar }: IModal) {
    return (
        <>
            {search && <div className={styles.Modal}>
                {searchBar.map((item: ISelects) => (
                    <h2>{item.text} </h2>
                ))}
            </div>}
        </>
    )
}
