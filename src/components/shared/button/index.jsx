/*
    variant =  solid, light, outline, text
    color = primary, secondary, light, dark, danger, warning, success, info
    size = large, meduim, small
*/
const model = {
    variant: {
        solid: {
                primary: 'bg-blue-500 hover:bg-blue-600 text-white',
                secondary: 'bg-indigo-500 hover:bg-indigo-600 text-white',
                light: 'bg-neutral-100 hover:bg-neutral-200 text-rose',
                dark: 'bg-indigo-800 hover:bg-indigo-950 text-white',
                danger: 'bg-red-600 hover:bg-red-600 text-white',
                warning: 'bg-orange-400 hover:bg-orange-500 text-white',
                success: 'bg-green-400 hover:bg-green-500 text-white',
                info: 'bg-fuchsia-400 hover:bg-fuchsia-500 text-white'
        },
        light: {
                primary: 'bg-blue-50 hover:bg-blue-600 text-blue-600 font-semibold hover:text-white',
                secondary: 'bg-indigo-50 hover:bg-indigo-600 text-indigo-600 font-semibold hover:text-white',
                light: 'bg-neutral-50 hover:bg-neutral-600 text-neutral-600 font-semibold hover:text-white',
                dark: 'bg-indigo-50 hover:bg-indigo-600 text-indigo-600 font-semibold hover:text-white',
                danger: 'bg-rose-50 hover:bg-rose-600 text-rose-600 font-semibold hover:text-white',
                warning: 'bg-orange-50 hover:bg-orange-600 text-orange-600 font-semibold hover:text-white',
                success: 'bg-green-50 hover:bg-green-600 text-green-600 font-semibold hover:text-white',
                info: 'bg-fuchsia-50 hover:bg-fuchsia-600 text-fuchsia-600 font-semibold hover:text-white'
        },
        outline: {
                primary: 'border-2 border-blue-500 hover:border-blue-600 text-blue-600 font-semibold',
                secondary: 'border-2 border-indigo-500 hover:border-indigo-600 text-indigo-600 font-semibold',
                light: 'border-2 border-zinc-400 hover:border-zinc-600 text-zinc-600 font-semibold',
                dark: 'border-2 border-indigo-800 hover:border-indigo-950 text-indigo-950 font-semibold',
                danger: 'border-2 border-rose-500 hover:border-rose-600 text-rose-600 font-semibold',
                warning: 'border-2 border-orange-400 hover:border-orange-500 text-orange-500 font-semibold',
                success: 'border-2 border-green-400 hover:border-green-500 text-green-500 font-semibold',
                info: 'border-2 border-fuchsia-400 hover:border-fuchsia-500 text-fuchsia-500 font-semibold'
        },
        text: {
                primary: 'text-blue-500 hover:text-blue-600 font-semibold hover:text-white',
                secondary: 'text-indigo-500 hover:text-indigo-600 font-semibold hover:text-white',
                light: 'text-neutral-500 hover:text-neutral-600 font-semibold hover:text-white',
                dark: 'text-indigo-500 hover:text-indigo-600 font-semibold hover:text-white',
                danger: 'text-rose-500 hover:text-rose-600 font-semibold hover:text-white',
                warning: 'text-orange-500 hover:text-orange-600 font-semibold hover:text-white',
                success: 'text-green-500 hover:text-green-600 font-semibold hover:text-white',
                info: 'text-fuchsia-500 hover:text-fuchsia-600 font-semibold hover:text-white'
        }
    },
    size: {
        large: 'px-8 py-4 rounded',
        meduim: 'px-6 py-3 rounded',
        small: 'px-4 py-2 rounded'
    }
}
const Button = ({children, variant="solid", color="primary", size="meduim", shadow="false", ...rest})=>{
    delete rest.className
    delete rest.style
    return (
        <div>
            <button className={`${model.variant[variant][color]} ${model.size[size]}`} {...rest}>{children}</button>
        </div>
    )
}

export default Button