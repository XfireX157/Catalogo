import { ReactNode } from 'react'

export interface IButton {
    type: "button" | "submit" | "reset" 
    children: ReactNode
    onClick?: () => void
}