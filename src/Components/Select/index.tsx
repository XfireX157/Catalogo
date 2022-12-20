import styles from './Select.module.scss'
import {IoIosArrowDown} from 'react-icons/io'

export default function Select() {
  return (
    <section className={styles.SelectMenu}>
      <div className={styles.SelectMenu__btn}>
        <span>Select you option</span>
        <i><IoIosArrowDown/></i>
      </div>

      <ul className={styles.SelectMenu__options}>
        <li className={styles.SelectMenu__options__option}>
          <img src="Assets/img/Pinus_cm.png" alt="Chapa de madeira, tipo pinus" />
          <article className={styles.SelectMenu__options__option__info}>
            <h2> <strong>01</strong> Pinus de Madeira</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
            <div  className={styles.SelectMenu__options__option__info__Buy}>
              <span>R$32,00</span>
              <button>Comprar agora</button>
            </div>
          </article>
        </li>
      </ul>
    </section>
  )
}
