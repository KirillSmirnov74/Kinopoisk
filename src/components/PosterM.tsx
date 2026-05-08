export function PosterM({ posterUrl }: { posterUrl: string }) {
    return (
        <div className="mb-2">
            <img
                className="w-full h-80 object-contain rounded-lg"
                src={posterUrl}
                alt="Movie poster"
            />
        </div>
    )
}