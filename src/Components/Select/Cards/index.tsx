import { useState } from "react";
import { useContext } from "react";
import { WhatsAppContext } from "../../../Common/WhatsApp.d";
import { Modal_Cards } from "../../../Mock/Modal_Cards";
import { IProducts } from "../../../Types/IProducts";
import { AiOutlineEdit } from "react-icons/ai";
import { active, setActive } from "../../../Types/IActive";
import Modal_Card from "../../../Components/Modal_Card";
import http from "../../../http/interceptors";
import token from "../../../http/Token";

interface ICards {
  itens: IProducts[];
  url: string;
  styles: {
    readonly [styles: string]: string;
};
  items: IProducts[];
  setItems: React.Dispatch<React.SetStateAction<IProducts[]>>;
  setEdit: React.Dispatch<React.SetStateAction<IProducts>>;
  active: active;
  setActive: React.Dispatch<React.SetStateAction<setActive>>;
}

export default function Cards({
  styles,
  itens,
  url,
  items,
  setItems,
  setEdit,
  active, 
  setActive
}: ICards) {
  const [open, setOpen] = useState<string | number | null>(null);

  const FilterCard = (item: IProducts) => {
    if (open !== item.id!) {
      setOpen(item.id!);
    } else {
      setOpen(null);
    }
  };
  const Open = useContext(WhatsAppContext);
  const filterCard = open
    ? Modal_Cards.filter((item) => item.id === open)
    : [];

  const deleteCard = async (id: string) => {
    await http
      .delete(`/Delete/${id}`)
      .then(() => {
        setItems(items.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCard = (item: IProducts) => {
    setActive({...active, formAdd: true, type: false})
    setEdit({...item})
  };

  return (
    <>
      <ul className={styles.SelectMenu__options}>
        {itens.map((item) => (
          <li key={item.id} className={styles.SelectMenu__options__option}>
            {token !== null && 
              <span
                className={styles.SelectMenu__options__option__close}
                onClick={() => deleteCard(item.id!)}>
                X
              </span>
            }
            {token !== null && <span
              className={styles.SelectMenu__options__option__edit}
              onClick={() => updateCard(item)}>
              <AiOutlineEdit />
            </span>}
            <img
              src={url + item.filename}
              alt="Chapa de madeira, tipo pinus"
              onClick={() => FilterCard(item)}
              draggable="false"
            />
            <article className={styles.SelectMenu__options__option__info}>
              <h2>{item.title}</h2>
              <p>{item.description} </p>
              <div className={styles.SelectMenu__options__option__info__Buy}>
                <div className={styles.SelectMenu__options__option__info__Buy__price}>
                  <p>{item.category} </p>
                  <div className={styles.SelectMenu__options__option__info__Buy__price__discount}>
                    <span>R$ {item.price} </span>
                    {item.discount === "" ? null : <p>R$ {item.discount}</p>}
                  </div>
                </div>
                <button type="button" onClick={() => Open?.openWhatsApp()}>
                  Comprar agora
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
      {open && <Modal_Card itens={filterCard} setActive={setOpen} />}
    </>
  );
}
