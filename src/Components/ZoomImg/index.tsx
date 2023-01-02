import { useState } from "react"
import styles from './ZoomImg.module.scss'

interface IZoomImg {
    src: string,
    alt: string
}

export default function ZoomImg({alt, src}: IZoomImg) {
    
    const [magnifyStyle, setMagnifyStyle] = useState({ backgroundImage: `url(${src})` })
    const handleMoveMagnify = (e: any): void => {
        const { offsetX, offsetY, target } = e.nativeEvent
        const { offsetWidth, offsetHeight } = target
        const xPercentage = (offsetX / offsetWidth) * 100
        const yPercentage = (offsetY / offsetHeight) * 100

        setMagnifyStyle((prev) => ({ ...prev, display: 'block', top: `${offsetY - 30}px`, left: `${offsetX - 30}px`, backgroundPosition: `${xPercentage}% ${yPercentage}%` }))
    }

    const handleMoveLeave = (): void => {
        setMagnifyStyle((prev) => ({ ...prev, display: 'none' }))
    }

    return (
        <div className={styles.ZoomImg}>
            <img
                src={src}
                alt={alt}
                draggable="false"
                onMouseMove={handleMoveMagnify}
                onMouseLeave={handleMoveLeave}
                style={{touchAction: "none"}}
            />
            <div
                className={styles.ZoomImg__magnify}
                style={(magnifyStyle)}
            ></div>
        </div>
    )
}
