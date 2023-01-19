

export interface IProducts {
    id: number
    title: string
    img: string
    description: string
    price: number
    category: string
    discount?: number
}

export interface ISelects {
    id: number
    text: string
    products?: IProducts[]    
}

export const CardsMock: ISelects[] = [
    {
        id: 1,
        text: "Chapa",
        products: [
            {
                id: 1,
                title: "Pinus de Madeira",
                img: "Assets/img/Pinus_cm.png",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
                price: 32,
                category: "Chapa",
                discount: 14
            },

            {
                id: 2,
                title: "Chapa plastificada",
                img: "Assets/img/Plastificadoo_cm.png",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
                price: 32,
                category: "Chapa",
                discount: 14
            },

            {
                id: 3,
                title: "Chapa plastificada",
                img: "Assets/img/Madeirit_cm.png",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
                price: 32.20,
                category: "Chapa",
                discount: 14
            }
        ]
    },
    {
        id: 2,
        text: "Forro",
        products: [
            {
                id: 4,
                title: "Forro de Madeira",
                img: "https://deckdeck.com.br/wp-content/uploads/2022/01/Forro-Lambril-De-Cedrinho-10-cm.jpg",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
                price: 32,
                category: "Forro"
            }
        ]
    },
    {
        id: 3,
        text: "Polisten",
        products: [
            {
                id: 5,
                title: "Polisten sayerlack",
                img: "https://www.sayerlack.com.br/storage/products/February2020/c9cziU1Esn7OK9r4JD6N.png",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
                price: 32,
                category: "Forro"
            }
        ]
    },
    {
        id: 4,
        text: "Porta",
        products: [
            {
                id: 6,
                title: "Porta de Madeira",
                img: "https://http2.mlstatic.com/D_NQ_NP_973368-MLB50133309871_052022-O.webp",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
                price: 32,
                category: "Portas"
            }
        ]
    }
]