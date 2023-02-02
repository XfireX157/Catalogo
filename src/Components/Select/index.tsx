import { useEffect, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { ICategory } from '../../Types/ICategory'
import { IProducts } from '../../Types/IProducts'
import { AiOutlineEdit } from 'react-icons/ai'
import Cards from './Cards'
import styles from './Select.module.scss'
import http from '../../http/interceptors'
import token from '../../http/Token'


interface ISelect {
  categoryMap: ICategory[]
  setCategoryMap: React.Dispatch<React.SetStateAction<ICategory[]>>
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
  setEditCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function Select({categoryMap, setCategoryMap, items, setItems, setEdit, active, setActive, setEditCategory}: ISelect) {

  const [open, setOpen] = useState<boolean | object | null | string | number>(null)
  const [url, setUrl] = useState('')

  const getItems = async () => {
    const res = await http.get("/GetNewsAll")
    setItems(res.data.results)
    setUrl(res.data.url)
  }

  const getCategory = async () => {
    const res = await http.get("/CategoryGetAll")
    setCategoryMap(res.data.results)
  }

  const deleteCategory = async (id: string) => {
    await http.delete(`/CategoryDelete/${id}`)
      .then(() => {
        setCategoryMap(categoryMap.filter((item) => item._id !== id))
        window.location.reload()
      }).catch((err: any) => console.log(err))
  }

  const updateCategory = async (item: any) => {
    setActive({...active, formCategory: true})
    setEditCategory(item)
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
              {token !== null &&<span className={styles.SelectMenu__closeCategory} onClick={() => deleteCategory(item._id!)}>X</span>}
              {token !== null &&<span className={styles.SelectMenu__editCategory} onClick={() => updateCategory({...item})}><AiOutlineEdit /></span>}
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
