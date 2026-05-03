import { FormFieldProps } from "../types";

export function FormField({ id, label, type, value, placeholder }: FormFieldProps) {
    return (
        <>
            <label className=" block mb-2 text-sm text-white" htmlFor={id}>{label}</label>
            <input className="bg-slate-500 rounded-lg px-2 py-2 max-w-sm w-full outline-none text-sm text-white"
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
            />
        </>
    )
}
