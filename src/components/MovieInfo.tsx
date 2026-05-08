import React from "react";
import { Title } from "./Title";
import { MovieInfoProps } from "../types";
import { getRatingColor, parseAge } from "../helpers";

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
    slogan
}: MovieInfoProps): React.ReactElement {

    const genresToStroke = genres?.map((genre => genre.genre)).join(', ')
    const countntriesToStroke = countries?.map((country) => country.country).join(', ')
    const colors = getRatingColor(ratingKinopoisk)
    const parseddAge = parseAge(ratingAge)


    const { amount, symbol } = budget?.[0] || {};
    const validAmount = amount ?? '—'
    const validSymbol = symbol ?? ''
    const validOrgName = nameOrg ?? '—'
    const validYear = year ?? '—'
    const validSlogan = slogan ?? '—'

    return (
        <div>
            <div className="mb-8">
                <Title title={title} className="text-5xl font-bold text-white mb-6" />
                <p className="text-sm font-medium text-gray-500 mb-3 tracking-wide">{genresToStroke}</p>

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


            <div className="border-t border-gray-700/50 pt-8 mb-10">
                <div className="grid grid-cols-[200px_1fr] gap-y-5 text-sm">

                    <div className="text-gray-500 font-medium">Оригинальное название</div>
                    <div className="text-gray-200">{validOrgName}</div>

                    <div className="text-gray-500 font-medium">Слоган</div>
                    <div className="text-gray-200">{validSlogan}</div>

                    <div className="text-gray-500 font-medium">Возрастные ограничения</div>
                    <div className="text-gray-200">{parseddAge}</div>

                    <div className="text-gray-500 font-medium">Год производства</div>
                    <div className="text-gray-200">{validYear}</div>

                    <div className="text-gray-500 font-medium">Страна</div>
                    <div className="text-gray-200">{countntriesToStroke}</div>

                    <div className="text-gray-500 font-medium">Бюджет</div>
                    <div className="text-gray-200">{`${validSymbol} ${validAmount}`}</div>
                </div>
            </div>
        </div>
    )
}