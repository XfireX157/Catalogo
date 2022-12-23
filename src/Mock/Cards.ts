
export interface IProducts {
    id: number
    title: string
    category: string
    description: string
    price: number
}

export interface ISelects {
    id: number
    text: string
    products?: IProducts[]    
}

export const CardsMock: ISelects[] = [
    {
        id: 1,
        text: "chapa",
        products: [
            {
                id: 1,
                title: "Pinus de Madeira",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
                category: "chapa",
                price: 32,
            },

            {
                id: 2,
                title: "Chapa plastificada",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
                category: "chapa",
                price: 32,
            }
        ]
    },

    {
        id: 2,
        text: "forro",
        products: [
            {
                id: 1,
                title: "Pinus de Madeira",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
                category: "chapa",
                price: 32,
            }
        ]
    },

    {
        id: 3,
        text: "polisten",
        products: [
            {
                id: 1,
                title: "Pinus de Madeira",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
                category: "chapa",
                price: 32,
            }
        ]
    },

    {
        id: 4,
        text: "porta",
        products: [
            {
                id: 1,
                title: "Pinus de Madeira",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
                category: "chapa",
                price: 32,
            }
        ]
    }
]