import { ComponentProps } from "react"

interface IconButtonProps extends ComponentProps<'button'> {
    /*componentsprops é para dar as definições padrões do html para um elemento tsx*/
}

export function IconButton(props: IconButtonProps) {
    return (
        <button className="px-1.5 bg-gray-500 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
        {...props}
        />       
    )
}