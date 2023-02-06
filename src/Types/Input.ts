export interface InputProps {
    id: string,
    type: string
    placeholder: string
    value?: string | ReadonlyArray<string>
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    name: string
}