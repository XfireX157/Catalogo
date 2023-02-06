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

interface IForm {
  active: active
  setActive: React.Dispatch<React.SetStateAction<setActive>>;
  edit: IProducts
  setEdit: React.Dispatch<React.SetStateAction<IProducts>>
  setItemsList: (newItem: IProducts) => void
  categoryMap: ICategory[]
  items: IProducts[]
  setItems: React.Dispatch<React.SetStateAction<IProducts[]>>
}

export default function Form({ setActive, active, setItemsList, edit, setEdit ,categoryMap, items, setItems }: IForm) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [types, setTypes] = useState({
    imageError: '',
    categoryError: '',
    titleError: '',
    descriptionError: '',
    priceError: ''
  })

  console.log(image)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    image && formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("category", category);

    console.log(formData)
    if(edit.id){
      await http.patch(`/Update/${edit.id}`, formData)
      .then((response) => {
        console.log(response.data)
        setItems(items.map((item: any, index: any) => edit.id === index ? response.data.results : item))
        setActive({...active, formAdd: false})
      }).catch((err: any) => {
        console.log(err)
      })
    }else {
      if(!image) return setTypes({...types, imageError: "adicione uma imagem antes", titleError: "", descriptionError: "", categoryError: "", priceError: ""});
      if(!price.length) return setTypes({...types, priceError: "adicione um preço" , titleError: "",  descriptionError: "", categoryError: ""});
      if(category === 'Categoria' || !category.length) return setTypes({...types, categoryError: "adicione uma categoria antes", titleError: "", descriptionError: ""});
      if(!description.length) return setTypes({...types, descriptionError: "adicione uma descrição" , titleError: ""});
      if(!title.length) return setTypes({...types, titleError: "adicione um titulo"});

      else {
        await http.post("/Create", formData)
        .then((response) => {
          console.log(response);
          setItemsList({category, description, filename: response.data.results.filename , price, title, discount})
          setActive({...active, formAdd: false})
        })
        .catch((err: any) => {
          console.log(err);
        });
      }
    }

    setEdit({id: '', category: '', discount: '', description: '', filename: '', price: '', title: ''})
  };

  return (
    <>
      <div
        className={styles.CloseForm}
        onClick={() => setActive({ ...active, formAdd: false })}/>
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
          {image ? (
            <img src={URL.createObjectURL(image)} alt="Url da imagem" />
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
              if(!e.target.files) return
              return setImage(e.target.files[0])
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
