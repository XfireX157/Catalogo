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
  const [categoryMap, setCategoryMap] = useState<ICategory[]>([]);
  const [items, setItems] = useState<IProducts[]>([]);
  const [edit, setEdit] = useState<IProducts>({id: '', category: '', description: '', filename: '', price: '', title: '', discount: ''});
  const [editCategory, setEditCategory] = useState("");
  const [active, setActive] = useState({
    formCategory: false,
    formAdd: false,
    modal: false,
    type: false,
  });

  const setCategoryList = (newCategory: ICategory) => {
    setCategoryMap([...categoryMap, { ...newCategory }]);
  };

  const setItemsList = (newItem: IProducts) => {
    setItems([...items, newItem]);

    console.log(items)
  };

  return (
    <div>
      <div>
        <Header />
        <Video />
        <Select
          categoryMap={categoryMap}
          setCategoryMap={setCategoryMap}
          items={items}
          setItems={setItems}
          setActive={setActive}
          active={active}
          setEdit={setEdit}
          setEditCategory={setEditCategory}
        />
        {active.formAdd && (
          <Form
            setActive={setActive}
            active={active}
            setItemsList={setItemsList}
            setItems={setItems}
            items={items}
            edit={edit}
            categoryMap={categoryMap}
            setEdit={setEdit}
          />
        )}
        {active.formCategory && (
          <FormCategory
            setActive={setActive}
            active={active}
            setCategoryList={setCategoryList}
            editCategory={editCategory}
          />
        )}
        <Footer />
      </div>
      {token !== null && <ButtonAdding setActive={setActive} active={active} />}
      <ButtonTopScroll />
      <WhatsApp />
    </div>
  );
}

export default Home;
