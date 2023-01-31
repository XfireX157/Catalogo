import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import styles from "./Form.module.scss";
import http from '../../http/interceptors'
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";

interface IForm {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Form({ setActive }: IForm) {

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

    if(!image.length) {
      console.log('adicione uma imagem antes')
    }

    await http.post('/Create', formData)
      .then((response) => {
        console.log(response)
      })
      .catch((err: any) => {
        console.log(err)
      })
  };

  return (
    <>
      <div className={styles.CloseForm} onClick={() => setActive(false)} />
      <form
        onSubmit={handleSubmit}
        className={styles.CloseForm__Form}
        encType="multipart/form-data"
      >
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
          <Input
            id="category"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e: any) => setCategory(e.target.value)}
            name="category"
          />
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
