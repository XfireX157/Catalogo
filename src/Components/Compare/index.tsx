import styles from './Compare.module.scss'
import { useState, useRef } from 'react'

interface ICompareProps {
  src1: string
  src2: string
  alt1: string
  alt2: string
}


export default function Compare({ src1, src2, alt1, alt2 }: ICompareProps) {

  const [imageRevealFraq, setImageRevealFraq] = useState<any>(0.5)
  const imageContainer = useRef<HTMLDivElement>(undefined!)

  const slide = (xPosition: number) => {
    const containerBoundingRect = imageContainer.current.getBoundingClientRect()
    setImageRevealFraq(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0
      } else if (xPosition > containerBoundingRect.right) {
        return 1
      } else {
        return (xPosition - containerBoundingRect.left) / containerBoundingRect.width
      }
    })
  }

  const handleTouchMove = (event: any) => {
    slide(event.touches.item(0).clientX)
  }

  const handleMouseDown = (): void => {
    window.onmousedown = handleMouseMove
    window.onmouseup = handleMouseUp
  }

  const handleMouseMove = (event: MouseEvent): void => {
    slide(event.clientX)
  }

  const handleMouseUp = (): void => {
    window.onmousemove = undefined!
    window.onmouseup = undefined!
  }

  return (
    <div className={styles.Container}>
      <div ref={imageContainer} className={styles.Container__BoxImg}>
        <img
          src={src1}
          alt={alt1}
          className={styles.Container__BoxImg__img1}
        />
        <img
          style={{
            filter: "grayscale(100%)",
            clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${imageRevealFraq * 100}% 100%, 0 100%)`
          }}
          src={src2}
          alt={alt2}
          className={styles.Container__BoxImg__img2}
        />
        <div
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
          className={styles.boxTransition}
          style={{
            left: `${imageRevealFraq * 100}%`,
            touchAction: "none"
          }}
        >
          <div className={styles.boxTransition__path}>
            <div className={styles.boxTransition__path__ball}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
