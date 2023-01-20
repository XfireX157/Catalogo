export interface InputProps {
    id: string,
    type: string
    placeholder: string
    value?: string
    onChange: (e: string) => void 
    name: string
}