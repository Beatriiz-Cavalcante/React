//forma dinâmica

import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<'button'> {
    /*text?: string <- define o parâmetro como texto*/
    children: ReactNode //qualquer tipo/tag como parâmetro
}
//usando a parte dinâmica é preciso definir o tipo da variárel
export function Button(props: ButtonProps) {
    return (
        <button className="flex justify-between items-center px-5 h-12 bg-gray-500 font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
        {...props}
        />
    )
    /*entre chaves passa o parâmetro a ser recebido ou um default*/
}

//forma estática 
/*
export function Button() {
    return <button className="bg-violet-500 px-5 py-2 rounded-sm">oi</button>
}
*/