import { ReactNode } from "react";

export interface ILabel {
    id: string
    children: ReactNode
    props?: {
        color: string
        alignItems: string
        height: boolean | string
        boxShadow: string
    }
}