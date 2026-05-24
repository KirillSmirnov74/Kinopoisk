import { StaffMember } from './types'

export function getRatingColor(rating : number | null) : string  {
    if(!rating) return ''
    if (rating >= 8.0) return "bg-emerald-500 border-emerald-500/30"
    if (rating >= 5) return "bg-orange-500 border-orange-500/30"
    return "bg-red-500 border-red-500/30"
}

export function parseAge(age: string | null) : string   {
    if(!age) {
        return '—'
    }
    const parseAge =  age.split('age')[1]
    return parseAge + '+'
}

export function getFilmsWithPoster(films : any[]) {
    if (!films) return []
    const validFilms = films.filter((film) => !film.posterUrl.includes('no-poster'))
    return validFilms
}

export function filterStaffMember(staff: StaffMember[] | null,profession: string) {
    if(!staff) {
        return []
    }
    const staffProfession = staff.filter((member) => member.professionKey?.includes(profession))
    return staffProfession ? staffProfession : []
}

export function formatDate(dateString: string | null): string {
  if (!dateString) return  ''
  return dateString.split('-').reverse().join('.')
}


export function getValidData(
  value: string | number | null | undefined, 
  fallback: string = '—'
): string {
  const stringValue = value != null ? String(value).trim() : ''
  return stringValue || fallback;
}