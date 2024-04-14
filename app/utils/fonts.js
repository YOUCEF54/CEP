import { Roboto } from "next/font/google";

const roboto_init = Roboto({
    subsets:["latin"],
    weight:'500',
    variable: "--font-roboto"
})

export const roboto = roboto_init.variable