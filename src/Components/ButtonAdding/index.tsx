import { AiFillFolderAdd } from "react-icons/ai";
import { BsInputCursor, BsPencilSquare } from "react-icons/bs";
import styles from "./ButtonAdding.module.scss";

interface IAddButton {
  onClick?: () => void;
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
}

export default function ButtonAdding({ setActive, active }: IAddButton) {
  const modalArray = [
    {
      id: 1,
      icon: <BsPencilSquare />,
      title: "Novo card",
      onClick: () =>
        setActive({
          ...active,
          formAdd: !active.formAdd,
          formCategory: false,
          modal: false,
          type: "Adicionar um novo card"
        }),
    },
    {
      id: 2,
      icon: <BsInputCursor />,
      title: "Nova categoria",
      onClick: () =>
        setActive({
          ...active,
          formCategory: !active.formCategory,
          formAdd: false,
          modal: false,
          type: "Editar o card"
        }),
    },
  ];

  return (
    <>
      <div
        className={styles.ButtonAdding}
        onClick={() => setActive({ ...active, modal: !active.modal })}
      >
        <AiFillFolderAdd />
      </div>
      {active.modal && (
        <div className={styles.ButtonAdding__modal}>
          <ul className={styles.ButtonAdding__modal__list}>
            {modalArray.map((item) => (
              <li
                key={item.id}
                className={styles.ButtonAdding__modal__list__listColum}
                onClick={item.onClick}>
                <span
                  className={styles.ButtonAdding__modal__list__listColum__icon}>
                  {item.icon}
                </span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
