import { ICategory } from "../../../Types/ICategory";
import { ISearchBar } from "../../../Types/ISearchBar";
import styles from "./Modal_Header.module.scss";

interface IModal {
  search: string;
  searchBar: any;
  url: string;
}

export default function Modal_Header({ search, searchBar, url }: IModal) {
  return (
    <>
      {search && (
        <div className={styles.Modal}>
          {searchBar.map((item: ISearchBar) => (
            <div className={styles.Modal__items}>
              <img src={url + item.filename} alt="" />
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
