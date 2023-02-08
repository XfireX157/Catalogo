import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import styles from "./Form.module.scss";
import http from "../../http/interceptors";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import { IProducts } from "../../Types/IProducts";
import { ICategory } from "../../Types/ICategory";
import { active, setActive } from "../../Types/IActive";
import { IEdit } from "../../Types/IEdit";

interface IForm {
  active: active
  setActive: React.Dispatch<React.SetStateAction<setActive>>;
  edit: IEdit
  setEdit: React.Dispatch<React.SetStateAction<IEdit>>
  setItemsList: (newItem: IProducts) => void
  categoryMap: ICategory[]
  items: IProducts[]
  setItems: React.Dispatch<React.SetStateAction<IProducts[]>>
}

export default function Form({ setActive, active, setItemsList, edit, setEdit, categoryMap, items, setItems }: IForm) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [filename, setFilename] = useState<any>(null);
  const [types, setTypes] = useState({
    imageError: '',
    categoryError: '',
    titleError: '',
    descriptionError: '',
    priceError: ''
  })

  console.log(edit)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      image: filename || edit.filename,
      title: title.length ? title : edit.title,
      description: description.length ? description : edit.description,
      price: price.length ? price : edit.price,
      discount: discount.length ? discount : edit.discount,
      category: category.length ? category : edit.category
    };

    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("discount", data.discount!);
    formData.append("category", data.category);

    if (edit.id) {
      await http.patch(`/Update/${edit.id}`, formData)
        .then((response) => {
          setItems(items.map(((item: any) => {
            if (item.id === edit.id) {
              return {
                ...items,
                ...data,
                filename: response.data.results.filename
              }
            }
            return item

           
          })))
          setActive({ ...active, formAdd: false })
          setEdit({ id: '', category: '', discount: '', description: '', filename: '', price: '', title: '' })
        }).catch((err: any) => {
          console.log(err)
        })
    } else {
      if (!filename) return setTypes({ ...types, imageError: "adicione uma imagem antes", titleError: "", descriptionError: "", categoryError: "", priceError: "" });
      if (!price.length) return setTypes({ ...types, priceError: "adicione um preço", titleError: "", descriptionError: "", categoryError: "" });
      if (category === 'Categoria' || !category.length) return setTypes({ ...types, categoryError: "adicione uma categoria antes", titleError: "", descriptionError: "" });
      if (!description.length) return setTypes({ ...types, descriptionError: "adicione uma descrição", titleError: "" });
      if (!title.length) return setTypes({ ...types, titleError: "adicione um titulo" });

      else {
        await http.post("/Create", formData)
          .then((response) => {
            console.log(response);
            setItemsList({ category, description, filename: response.data.results.filename, price, title, discount })
            setActive({ ...active, formAdd: false })
          })
          .catch((err: any) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <>
      <div
        className={styles.CloseForm}
        onClick={() => setActive({ ...active, formAdd: false })} />
      <form
        onSubmit={handleSubmit}
        className={styles.CloseForm__Form}
        encType="multipart/form-data">
        <div>
          {active.type === true ? <p> Adicionar um card </p> : <p>Editar um card </p>}
        </div>
        <Label id="title">
          <Input
            id="title"
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
          <p className={styles.CloseForm__Form__error}> {types.titleError} </p>
        </Label>
        <Label id="description">
          <Input
            id="description"
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
          />
          <p className={styles.CloseForm__Form__error}> {types.descriptionError} </p>
        </Label>
        <Label id="category">
          <select
            className={styles.CloseForm__Form__select}
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)}>
            <option>Categoria</option>
            {categoryMap.map(item => (
              <option key={item._id}>{item.categoryName}</option>
            ))}
          </select>
          <p className={styles.CloseForm__Form__error}>{types.categoryError}</p>
        </Label>
        <Label id="price">
          <Input
            id="price"
            type="text"
            placeholder="Preço"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            name="price"
          />
          <p className={styles.CloseForm__Form__error}>{types.priceError}</p>
        </Label>
        <Label id="discount">
          <Input
            id="discount"
            type="text"
            placeholder="Desconto"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            name="discount"
          />
        </Label>
        <Label
          id="file"
          props={{
            color: "#edf0e8",
            alignItems: "center",
            height: true,
            boxShadow: "2px 4px  rgb(60, 59, 59)",
          }}>
          {filename ? (
            <img src={URL.createObjectURL(filename)} alt="Url da imagem" />
          ) : (
            <div>
              <IoIosAdd fontSize={35} />
            </div>
          )}
          <Input
            id="file"
            type="file"
            placeholder="File"
            onChange={(e) => {
              if (!e.target.files) return
              return setFilename(e.target.files[0])
            }}
            name="file"
          />
        </Label>
        <p className={styles.CloseForm__Form__error}> {types.imageError} </p>
        <Button type="submit">Enviar</Button>
      </form>
    </>
  );
}
