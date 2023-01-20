import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import styles from "./Form.module.scss";
import { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className={styles.Form} encType="multipart/form-data">
      <Label id="title">
        <span>Title: </span>
        <Input
          id="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e)}
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
          onChange={(e) => setDescription(e)}
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
          onChange={(e) => setCategory(e)}
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
          onChange={(e) => setPrice(e)}
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
          onChange={(e) => setDiscount(e)}
          name="discount"
        />
      </Label>
      <Button type="submit">
        Enviar
      </Button>
    </form>
  );
}
