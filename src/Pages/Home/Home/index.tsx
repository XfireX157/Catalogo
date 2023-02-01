import { useState } from "react";
import ButtonAdding from "../../../Components/ButtonAdding";
import ButtonTopScroll from "../../../Components/ButtonTopScroll";
import Footer from "../../../Components/Footer";
import Form from "../../../Components/Form";
import Header from "../../../Components/Header";
import Select from "../../../Components/Select";
import Video from "../../../Components/Video";
import WhatsApp from "../../../Components/WhatsApp";
import token from "../../../http/Token";
import FormCategory from "../../../Components/FormCategory";
import { ICategory } from "../../../Types/ICategory";
import { IProducts } from "../../../Types/IProducts";

function Home() {

  const [categoryMap, setCategory] = useState<ICategory[]>([])
  const [items, setItems] = useState<IProducts[]>([])
  const [edit, setEdit] = useState('')
  const [active, setActive] = useState({
    formCategory: false,
    formAdd: false,
    modal: false,
    type: ""
  })

  const setCategoryList = (newCategory: ICategory) => {
    setCategory([...categoryMap, {...newCategory}])
  }

  const setItemsList = (newItem: IProducts) => {
    setItems([...items, newItem])
  }

  return (
    <div>
      <div>
        <Header />
        <Video />
        <Select categoryMap={categoryMap} setCategory={setCategory} items={items} setItems={setItems} setActive={setActive} active={active} setEdit={setEdit} />
        {active.formAdd && <Form setActive={setActive} active={active} setItemsList={setItemsList} edit={edit} categoryMap={categoryMap} />}
        {active.formCategory && <FormCategory setActive={setActive} active={active} setCategoryList={setCategoryList}  />}
        <Footer />
      </div>
      {token !== null && <ButtonAdding setActive={setActive} active={active} />}
      <ButtonTopScroll />
      <WhatsApp />
    </div>
  );
}

export default Home;
