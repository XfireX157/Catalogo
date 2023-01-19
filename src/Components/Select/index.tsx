import styles from './Select.module.scss'
import { ISelects, CardsMock } from '../../Mock/Cards'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import {BsFillDoorClosedFill} from 'react-icons/bs'
import { useState } from 'react'
import Cards from './Cards'

export default function Select() {

  const [active, setActive] = useState<boolean | object | null | string | number>(null)

  const filtered = (category: ISelects) => {

    if (active !== category.id) {
      setActive(category.id!)
    } else {
      setActive(null)
    }
  }
  const filterCards = active ? CardsMock.filter((item) => item.id === active) : CardsMock

  return (
    <>
      <section className={styles.SelectMenu} id="products">
        {filterCards.map((item) => (
          <>
            <div
              onClick={() => filtered(item)}
              className={active === item.id ? styles.SelectMenu__btnActive : styles.SelectMenu__btn}
              key={item.id}>
              <div className={styles.SelectMenu__btn__info}>
                <span> <BsFillDoorClosedFill /> </span>
                <span>{item.text}</span>
              </div>
              {active === item.id ? <MdKeyboardArrowDown size={35} /> : <MdKeyboardArrowUp size={35} />}
            </div>
            {active && <Cards styles={styles} itens={item.products!} />}
          </>
        ))}
      </section>
    </>
  )
}
