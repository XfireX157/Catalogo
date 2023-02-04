import React, {createContext} from "react";

type ContextProviderProps = {
    children: React.ReactNode
}

interface ContextWhatsAppProps {
    openWhatsApp: Function
}

export const WhatsAppContext = createContext<ContextWhatsAppProps | null>(null)

export const WhatsAppProvider = ({children}: ContextProviderProps) => {

    const Numbers = [
        //Romualdo
        'https://wa.me/5511958851545?text=Olá quero fazer um orçamento!',
        //Gabriele
        'https://wa.me/5511940881707?text=Olá quero fazer um orçamento!',
        //Joyce
        'https://wa.me/5511969760878?text=Olá quero fazer um orçamento!',
        //Arthur
        'https://wa.me/5511934421941?text=Olá quero fazer um orçamento!',
        //Rodrigo
        'https://wa.me/5511960189904?text=Olá quero fazer um orçamento!',
    ]

    const getRandom = (min: number , max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const geRandom = Numbers[getRandom(0, Numbers.length - 1)]

    const openWhatsApp = () =>{
        window.open(geRandom, '_blank')  
    }

    return(
        <WhatsAppContext.Provider value={{openWhatsApp}}>
            {children}
        </WhatsAppContext.Provider>
    )
}