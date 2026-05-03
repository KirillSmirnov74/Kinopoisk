export function Button({ className, text }: { className: string, text: string }) {
    return (
        <button className={className}>{text}</button>
    )
}