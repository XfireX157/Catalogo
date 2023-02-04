import styles from './ButtonTopScroll.module.scss'
import { BiUpArrowAlt } from 'react-icons/bi'
import { useEffect, useState } from 'react'

export default function ButtonTopScroll() {
    const [backTop, setBackTop] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackTop(true)
            } else {
                setBackTop(false)
            }
        })
    })

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {backTop && 
                <div className={styles.ButtonTop} onClick={scrollUp}>
                    <BiUpArrowAlt />
                </div>
            }
        </>
    )
}
