 export function getRatingColor(rating : number | null) : string  {
    if(!rating) return ''
    if (rating >= 8.0) return "bg-emerald-500 border-emerald-500/30";
    if (rating >= 5) return "bg-orange-500 border-orange-500/30";
    return "bg-red-500 border-red-500/30";
};

export function parseAge(age: string | null) : string   {
    if(!age) {
        return '—'
    }
    const parseAge =  age.split('age')[1]
    return parseAge + '+'
}

export function validFilmsWithPoster(films : any[]) {
    const validFilms = films.filter((film) => !film.posterUrl.includes('no-poster'))
    return validFilms
}

