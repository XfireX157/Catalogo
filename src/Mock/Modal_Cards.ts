export interface Modal_Cards {
    id: number
    top_step: {
        num_01: string,
        info_01: string,
        num_02: string,
        info_02: string
    },
    bottom_step: {
        num_03: string,
        info_03: string,
        num_04: string,
        info_04: string
    }
}

export const Modal_Cards: Modal_Cards[] = [

    {
        id: 1,
        top_step: {
            num_01: "01",
            info_01: "Lorem ipsum dolor sit amet",
            num_02: "02",
            info_02: "Lorem ipsum dolor sit amet",
        },

        bottom_step: {
            num_03: "03",
            info_03: "Lorem ipsum dolor sit amet",
            num_04: "04",
            info_04: "Lorem ipsum dolor sit amet",
        }
    },

    {
        id: 2,
        top_step: {
            num_01: "01",
            info_01: "Lorem ipsum dolor sit amet",
            num_02: "02",
            info_02: "Lorem ipsum dolor sit amet",
        },

        bottom_step: {
            num_03: "01",
            info_03: "Lorem ipsum dolor sit amet",
            num_04: "02",
            info_04: "Lorem ipsum dolor sit amet",
        }
    },
]