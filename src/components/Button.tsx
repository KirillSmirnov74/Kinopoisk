export function Button({ type, className, text, onClick }: { type?: 'button' | 'submit' | 'reset', className: string, text: string, onClick?: () => void }) {
    return (
        <button type={type} onClick={onClick} className={className}>{text}</button>
    )
}