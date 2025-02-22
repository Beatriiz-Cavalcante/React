import { ComponentProps } from "react";


interface InpurtRootProps extends ComponentProps<'div'> {
    error?: boolean
}

export function InputRoot({error = false, ...props}: InpurtRootProps){
    return(
        <div
        date-error = {error} 
        className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
        {...props}
        />
    )
}

interface InpurtIconProps extends ComponentProps<'span'> {
}

export function InputIcon(props: InpurtIconProps){
    return(
        <span
         className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
         {...props}
         />
    )
}

interface InpurtFieldProps extends ComponentProps<'input'> {
}

export function InputField(props: InpurtFieldProps){
    return(
        <input
            className="flex-1 outline-0 placeholder-gray-400"
            {...props}
        />
    )
}