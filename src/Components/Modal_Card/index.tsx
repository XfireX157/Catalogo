import styles from './Modal_Card.module.scss'
import { Modal_Cards } from '../../Mock/Modal_Cards'
import ZoomImg from '../ZoomImg'
import Compare from '../Compare'

interface IModal_Card {
  itens: Modal_Cards[]
  setActive: React.Dispatch<React.SetStateAction<string | number | null>>
}

export default function Modal_Card({ itens, setActive }: IModal_Card) {
  return (
    <div className={styles.ModalCard} onClick={() => setActive(null)}>
      <div className={styles.ModalCard__Card}>
        <Compare 
          src1="https://thumbs.dreamstime.com/b/ilustração-criativa-abstrata-com-leão-colorido-cor-preta-de-190846410.jpg"
          src2="https://thumbs.dreamstime.com/b/ilustração-criativa-abstrata-com-leão-colorido-cor-preta-de-190846410.jpg"
          alt1="Imagens coloridas"
          alt2='Imagens escuras'
        />
        <div className={styles.ModalCard__Card__Object}>
          {itens.map((item) => (
            <>
              <div className={styles.ModalCard__Card__Object__Info}>
                <div className={styles.ModalCard__Card__Object__Info__Step}>
                  <span> {item.top_step.num_01}</span>
                  <p> {item.top_step.info_01} </p>
                </div>
                <div className={styles.ModalCard__Card__Object__Info__Step}>
                  <span> {item.top_step.num_02} </span>
                  <p> {item.top_step.info_02} </p>
                </div>
              </div>
              <ZoomImg src={item.img} alt='Imagem do produto'/> 
              <div className={styles.ModalCard__Card__Object__Info}>
                <div className={styles.ModalCard__Card__Object__Info__Step}>
                  <span> {item.bottom_step.num_03} </span>
                  <p> {item.bottom_step.info_03} </p>
                </div>
                <div className={styles.ModalCard__Card__Object__Info__Step}>
                  <span> {item.bottom_step.num_04} </span>
                  <p> {item.bottom_step.info_04} </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

