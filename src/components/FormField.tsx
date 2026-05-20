import { FormFieldProps } from "../types";

export function FormField({
    id,
    label,
    type,
    value,
    placeholder,
    className,
    step,
    classNameForLabel,
    ...props
}: FormFieldProps) {
    return (
        <>
            <label className={classNameForLabel} htmlFor={id}>
                {label}
            </label>
            <input
                className={className}
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                step={step}
                {...props}
            />
        </>
    );
}
