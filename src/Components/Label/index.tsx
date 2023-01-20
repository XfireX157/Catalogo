import { ILabel } from '../../Types/Label'
import styles from './Label.module.scss'

export default function Label({children, id}: ILabel) {
  return (
    <label className={styles.Label} id={id}>
        {children}
    </label>
  )
}
