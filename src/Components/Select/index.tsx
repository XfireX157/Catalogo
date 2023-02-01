import styles from './Select.module.scss'
import { useEffect, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { ICategory } from '../../Types/ICategory'
import { IProducts } from '../../Types/IProducts'
import Cards from './Cards'
import axios from 'axios'
import http from '../../http/interceptors'

interface ISelect {
  categoryMap: ICategory[]
  setCategory: React.Dispatch<React.SetStateAction<ICategory[]>>
  items: IProducts[]
  setItems: React.Dispatch<React.SetStateAction<IProducts[]>>
  active: {
    formCategory: boolean;
    formAdd: boolean;
    modal: boolean;
    type: string
  };

  setActive: React.Dispatch<
    React.SetStateAction<{
      formCategory: boolean;
      formAdd: boolean;
      modal: boolean;
      type: string
    }>
  >;
  setEdit: React.Dispatch<React.SetStateAction<string>>
}

export default function Select({categoryMap, setCategory, items, setItems, setEdit, active, setActive}: ISelect) {

  const [open, setOpen] = useState<boolean | object | null | string | number>(null)
  const [url, setUrl] = useState('')

  const getItems = async () => {
    const res = await http.get("/GetNewsAll")
    setItems(res.data.results)
    setUrl(res.data.url)
  }

  const getCategory = async () => {
    const res = await http.get("/CategoryGetAll")
    setCategory(res.data.results)
  }

  useEffect(() => {
    getCategory()
    getItems()
  }, [])

  const filtered = (category: ICategory) => {
    if (open !== category.categoryName) {
      setOpen(category.categoryName!)
    } else {
      setOpen(null)
    }
  }
  const filterCategory = open ? categoryMap.filter((item) => item.categoryName === open) : categoryMap
  const filterItems = filterCategory ? items.filter((item) => item.category === open) : []

  return (
    <>
      <section className={styles.SelectMenu} id="products">
        {filterCategory.map((item) => (
          <>
            <div
              key={item._id}
              onClick={() => filtered(item)}
              className={open === item.categoryName ? styles.SelectMenu__btnActive : styles.SelectMenu__btn}>
              <div className={styles.SelectMenu__btn__info}>
                <span>{item.categoryName}</span>
              </div>
              {open === item.categoryName ? <MdKeyboardArrowDown size={35} /> : <MdKeyboardArrowUp size={35} />}
            </div>
            {open && <Cards styles={styles} itens={filterItems} url={url} items={items} setItems={setItems} setEdit={setEdit} active={active} setActive={setActive} />}
          </>
        ))}
      </section>
    </>
  )
}
