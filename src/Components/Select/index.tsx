import styles from './Select.module.scss'
import { ISelects, CardsMock } from '../../Mock/Cards'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useState } from 'react'
import Cards from './Cards'

export default function Select() {

  const [active, setActive] = useState<boolean | object | null | string | number>(null)

  const filtered = (category: ISelects) => {
    if (active !== category.products) {
      setActive(category.products!)
    } else {
      setActive(null)
    }
  }

  const filterCards = active ? CardsMock.filter((item) => item.products === active) : CardsMock

  return (
    <>
      <section className={styles.SelectMenu} id="products">
        {filterCards.map((item) => (
          <>
            <div
              onClick={() => filtered(item)}
              className={active === item.products ? styles.SelectMenu__btnActive : styles.SelectMenu__btn}
              key={item.id}>
              <span>{item.text}</span>
              {active === item.products ? <MdKeyboardArrowDown size={35} /> : <MdKeyboardArrowUp size={35} />}
            </div>
            {active && <Cards styles={styles} itens={item.products!} />}
          </>
        ))}
      </section>
    </>
  )
}
