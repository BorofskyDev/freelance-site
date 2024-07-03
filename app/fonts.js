import { Inconsolata, Lato, Playfair_Display } from "next/font/google";

export const inconsolata = Inconsolata({
    subsets: ["latin"],
    variable: '--font-link'
})

export const lato = Lato({
    subsets: ["latin"],
    variable: '--font-body',
    weight: ['100', '300', '400', '700', '900']
})

export const playfairDisplay = Playfair_Display ({
    subsets: ["latin"],
    variable: '--font-heading',
    weight: ['400', '500', '600', '700', '800', '900']
})