import { AiOutlineWhatsApp } from 'react-icons/ai'
import styles from './WhatsApp.module.scss'
import { useContext } from 'react'
import { WhatsAppContext } from '../../Common/WhatsApp.d'

export default function WhatsApp() {
    const Open = useContext(WhatsAppContext)
    return (
        <div className={styles.WhatsApp}>
            <button title='Botão do WhatsApp' onClick={() => Open?.openWhatsApp()} type='button'><AiOutlineWhatsApp /></button>
        </div>
    )
}
