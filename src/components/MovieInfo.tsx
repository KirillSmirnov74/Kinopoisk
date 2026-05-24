import React from 'react'
import { Title } from './Title'
import { MovieInfoProps } from '../types'
import { filterStaffMember, getRatingColor, getValidData, parseAge } from '../helpers'
import { MovieMetaInfo } from './MovieMetaInfo'

export function MovieInfo({
    title,
    ratingKinopoisk,
    IMDbRating,
    filmLength,
    description,
    year,
    nameOrg,
    genres,
    countries,
    budget,
    ratingAge,
    slogan,
    staff
}: MovieInfoProps): React.ReactElement {

    const genresToStroke = genres?.map((genre => genre.genre)).join(', ')
    const countntriesToStroke = countries?.map((country) => country.country).join(', ') ?? '—'
    const colors = getRatingColor(ratingKinopoisk)
    const parsedAge = parseAge(ratingAge)
    const directors = filterStaffMember(staff, 'DIRECTOR')
    const actors = filterStaffMember(staff, 'ACTOR')

    const { amount, symbol } = budget?.[0] || {}
    const validAmount = getValidData(amount)
    const validSymbol = getValidData(symbol)
    const validOrgName = getValidData(nameOrg)
    const validYear = getValidData(year)
    const validSlogan = getValidData(slogan)

    return (
        <div>
            <div className="mb-8">
                <Title title={title} className="text-5xl font-bold text-white mb-6" />
                <p className="text-sm font-bold text-gray-400 mb-7 tracking-wide ">{genresToStroke}</p>

                <div className="flex gap-4 items-center">
                    {ratingKinopoisk ? (<span className={`px-4 py-2 rounded-lg text-white text-sm font-bold border ${colors} `}>
                        {ratingKinopoisk}
                    </span>) : null}
                    {IMDbRating ? (<span className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 text-sm font-semibold border border-gray-700">
                        IMDb {IMDbRating}
                    </span>) : null}
                    {filmLength ? (<span className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 text-sm font-medium border border-gray-700">
                        {filmLength} min
                    </span>) : null}
                </div>
            </div>
            {description ? (<div className="mb-10 p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                <p className="text-gray-300 leading-relaxed">
                    {description}
                </p>
            </div>) : null}

            <MovieMetaInfo
                orgName={validOrgName}
                slogan={validSlogan}
                age={parsedAge}
                year={validYear}
                countries={countntriesToStroke}
                symbol={validSymbol}
                amount={validAmount}
                directorsData={directors}
                actorsData={actors}
            />
        </div>
    )
}