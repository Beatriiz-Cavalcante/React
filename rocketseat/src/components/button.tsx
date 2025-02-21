//forma dinâmica

interface ButtonProps {
    text?: string
}
//usando a parte dinâmica é preciso definir o tipo da variárel
export function Button(props: ButtonProps) {
    return <button className="bg-violet-500 px-5 py-2 rounded-sm">{props.text || "Plano B"}</button>
    /*entre chaves passa o parâmetro a ser recebido ou um default*/
}

//forma estática 
/*
export function Button() {
    return <button className="bg-violet-500 px-5 py-2 rounded-sm">oi</button>
}
*/