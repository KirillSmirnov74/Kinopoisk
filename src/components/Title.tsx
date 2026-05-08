export function Title({ title, className }: { title: string | null, className: string }) {
    return (
        <h1 className={className}>{title}</h1>
    )
}