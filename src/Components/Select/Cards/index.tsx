import { useState } from "react";
import { useContext } from "react";
import { WhatsAppContext } from "../../../Common/WhatsApp.d";
import { Modal_Cards } from "../../../Mock/Modal_Cards";
import Modal_Card from "../../../Components/Modal_Card";
import { IProducts } from "../../../Types/IProducts";

interface ICards {
  itens: IProducts[];
  url: string
  styles: {
    readonly [styles: string]: string;
  };
}

export default function Cards({ styles, itens, url }: ICards) {
  const [active, setActive] = useState<string | number | null>(null);
  const FilterCard = (item: IProducts) => {
    if (active !== item._id!) {
      setActive(item._id);
    } else {
      setActive(null);
    }
  };
  const Open = useContext(WhatsAppContext);
  const filterCard = active
    ? Modal_Cards.filter((item) => item.id === active)
    : [];

  return (
    <>
      <ul className={styles.SelectMenu__options}>
        {itens.map((item) => (
          <li key={item._id} className={styles.SelectMenu__options__option}>
            <img
              src={url + item.filename}
              alt="Chapa de madeira, tipo pinus"
              onClick={() => FilterCard(item)}
              draggable="false"
            />
            <article className={styles.SelectMenu__options__option__info}>
              <h2>
                <strong>{item._id}</strong> {item.title}
              </h2>
              <p>{item.description} </p>
              <div className={styles.SelectMenu__options__option__info__Buy}>
                <div
                  className={
                    styles.SelectMenu__options__option__info__Buy__price
                  }>
                  <p>{item.category} </p>
                  <div className={styles.SelectMenu__options__option__info__Buy__price__discount}>
                    <span>R$ {item.price} </span>
                    {item.discount === 0 ? null : <p>R$ {item.discount}</p>}
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
      {active && <Modal_Card itens={filterCard} setActive={setActive} />}
    </>
  );
}
