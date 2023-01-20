import { AiFillFileAdd, AiFillFolderAdd } from 'react-icons/ai'
import styles from './ButtonAdding.module.scss'

interface IAddButton {
  onClick: () => void
}

export default function ButtonAdding({onClick}:IAddButton) {
  return (
    <div className={styles.ButtonAdding} onClick={onClick}>
      <AiFillFolderAdd/>
    </div>
  )
}
