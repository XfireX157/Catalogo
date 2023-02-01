import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import styles from "./Form.module.scss";
import http from "../../http/interceptors";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import { IProducts } from "../../Types/IProducts";
import { ICategory } from "../../Types/ICategory";

interface IForm {
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
  edit: any
  setItemsList: (newItem: IProducts) => void
  categoryMap: ICategory[]
}

export default function Form({ setActive, active, setItemsList, edit, categoryMap }: IForm) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState<any>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("category", category);

    if (!image.length) {
      console.log("adicione uma imagem antes");
    }

    if(edit){
      await http.patch(`/Update/${edit.id}`, formData)
      .then((response) => {
        console.log(response)
        setActive({...active, formAdd: false})
      }).catch((err: any) => {
        console.log(err)
      })
    }else {
      await http
      .post("/Create", formData)
      .then((response) => {
        console.log(response);
        setItemsList({category, description, filename: image, price, title, discount})
        setActive({...active, formAdd: false})
      })
      .catch((err: any) => {
        console.log(err);
      });
    }
  };

  return (
    <>
      <div
        className={styles.CloseForm}
        onClick={() => setActive({ ...active, formAdd: false })}
      />
      <form
        onSubmit={handleSubmit}
        className={styles.CloseForm__Form}
        encType="multipart/form-data"
      >
        <div>
          {active.type === "Adicionar um novo card" ? <p> {active.type} </p> : <p>{active.type}</p>}
        </div>
        <Label id="title">
          <span>Title: </span>
          <Input
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
            name="title"
          />
        </Label>

        <Label id="description">
          <span>Description: </span>
          <Input
            id="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
            name="description"
          />
        </Label>

        <Label id="category">
          <span>Category: </span>
          <select 
            name="category" 
            id="category"
            onChange={(e) => setCategory(e.target.value)}>
            <option></option>
              {categoryMap.map(item => (
                <option key={item._id}>{item.categoryName}</option>
              ))}
          </select>
        </Label>

        <Label id="price">
          <span>Price: </span>
          <Input
            id="price"
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e: any) => setPrice(e.target.value)}
            name="price"
          />
        </Label>

        <Label id="discount">
          <span>Discount: </span>
          <Input
            id="discount"
            type="text"
            placeholder="Discount"
            value={discount}
            onChange={(e: any) => setDiscount(e.target.value)}
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
          }}
        >
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
            onChange={(e: any) => setImage(e.target.files[0])}
            name="file"
          />
        </Label>
        <Button type="submit">Enviar</Button>
      </form>
    </>
  );
}
