import { IProducts } from '../../../Mock/Cards'
import { useState } from 'react'
import { useContext } from 'react'
import { WhatsAppContext } from '../../../Common/WhatsApp.d'
import { Modal_Cards } from '../../../Mock/Modal_Cards'
import Modal_Card from '../../../Components/Modal_Card'

interface ICards {
    itens: IProducts[]
    styles: {
        readonly [styles: string]: string
    }
}

export default function Cards({ styles, itens }: ICards) {
    const [active, setActive] = useState<string | number |null>(null)
    const FilterCard = (item: IProducts) => {
        if (active !== item.id) {
            setActive(item.id)
        } else {
            setActive(null)
        }
    }
    const Open = useContext(WhatsAppContext)
    const filterCard = active ? Modal_Cards.filter(item => item.id === active) : []
    
    return (
        <>
            <ul className={styles.SelectMenu__options}>
                {itens.map((item) => (
                    <li
                        key={item.id}
                        className={styles.SelectMenu__options__option}>
                        <img
                            src={item.img}
                            alt="Chapa de madeira, tipo pinus"
                            onClick={() => FilterCard(item)}
                            draggable="false"/>
                        <article className={styles.SelectMenu__options__option__info} >
                            <h2> <strong>{item.id}</strong> {item.title} </h2>
                            <p>{item.description} </p>
                            <div className={styles.SelectMenu__options__option__info__Buy}>                       
                                <span>R$ {item.price.toFixed(2).replace('.', ',')} </span>
                                <button type='button' onClick={() => Open?.openWhatsApp()}>Comprar agora</button>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
            {active && <Modal_Card itens={filterCard} setActive={setActive} />}
        </>
    )
}
