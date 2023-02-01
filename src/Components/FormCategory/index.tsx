import Button from "../Button";
import Label from "../Label";
import Input from "../Input";
import styles from "./FormCategory.module.scss";
import http from "../../http/interceptors";
import { useState } from "react";
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

  setCategoryList: (newCategory: ICategory) => void
}

export default function FormCategory({ setActive, active, setCategoryList }: IForm) {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await http
      .post("/CategoryCreate", {
        categoryName: categoryName,
      })
      .then((response) => {
        console.log(response);
        setCategoryList({categoryName: categoryName})
        setActive({ ...active, formCategory: false })
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        className={styles.CloseForm}
        onClick={() => setActive({ ...active, formCategory: false })}
      />
      <form
        onSubmit={handleSubmit}
        className={styles.CloseForm__Form}
        encType="multipart/form-data"
      >
        <Label id="category">
          <span>Category: </span>
          <Input
            id="category"
            type="text"
            placeholder="Category"
            value={categoryName}
            onChange={(e: any) => setCategoryName(e.target.value)}
            name="category"
          />
        </Label>
        <Button type="submit">Enviar</Button>
      </form>
    </>
  );
}
