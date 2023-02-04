import Button from "../Button";
import Label from "../Label";
import Input from "../Input";
import styles from "./FormCategory.module.scss";
import http from "../../http/interceptors";
import { useState } from "react";
import { ICategory } from "../../Types/ICategory";
import { active, setActive } from "../../Types/IActive";

interface IForm {
  active: active;
  setActive: React.Dispatch<React.SetStateAction<setActive>>;
  setCategoryList: (newCategory: ICategory) => void
  editCategory: any
}

export default function FormCategory({ setActive, active, setCategoryList, editCategory }: IForm) {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(editCategory) {
      await http.patch(`/CategoryUpdate/${editCategory._id}`, {
        categoryName: categoryName
      }).then((response) => {
        console.log(response)
        setActive({...active, formCategory: false})
      }).catch((err: any) => console.log(err))
    }else {
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
    }
  };

  return (
    <>
      <div
        className={styles.CloseForm}
        onClick={() => setActive({ ...active, formCategory: false })}/>
      <form
        onSubmit={handleSubmit}
        className={styles.CloseForm__Form}
        encType="multipart/form-data">

        {active.type === true ? <p> Adicionar uma categoria </p> : <p>Editar uma categoria</p>}

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
