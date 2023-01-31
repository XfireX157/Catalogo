import styles from './Select.module.scss'
import { useEffect, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { ICategory } from '../../Types/ICategory'
import { IProducts } from '../../Types/IProducts'
import Cards from './Cards'
import axios from 'axios'


export default function Select() {

  const [active, setActive] = useState<boolean | object | null | string | number>(null)
  const [category, setCategory] = useState<ICategory[]>([])
  const [items, setItems] = useState<IProducts[]>([])
  const [url, setUrl] = useState('')

  const getItems = async () => {
    const res = await axios.get("https://api-catalogo.up.railway.app/GetNewsAll")
    setItems(res.data.results)
    setUrl(res.data.url)
  }

  const getCategory = async () => {
    const res = await axios.get("https://api-catalogo.up.railway.app/CategoryGetAll")
    setCategory(res.data.results)
  }

  useEffect(() => {
    getCategory()
    getItems()
  }, [])

  const filtered = (category: ICategory) => {
    if (active !== category.categoryName) {
      setActive(category.categoryName!)
    } else {
      setActive(null)
    }
  }
  const filterCategory = active ? category.filter((item) => item.categoryName === active) : category
  const filterItems = filterCategory ? items.filter((item) => item.category === active) : []

  return (
    <>
      <section className={styles.SelectMenu} id="products">
        {filterCategory.map((item) => (
          <>
            <div
              onClick={() => filtered(item)}
              className={active === item.categoryName ? styles.SelectMenu__btnActive : styles.SelectMenu__btn}
              key={item._id}>
              <div className={styles.SelectMenu__btn__info}>
                <span>{item.categoryName}</span>
              </div>
              {active === item.categoryName ? <MdKeyboardArrowDown size={35} /> : <MdKeyboardArrowUp size={35} />}
            </div>
            {active && <Cards styles={styles} itens={filterItems} url={url} />}
          </>
        ))}
      </section>
    </>
  )
}
