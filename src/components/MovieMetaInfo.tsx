import React from 'react'
import { PeopleList } from './PeopleList'
import { MovieMetaInfoProps } from '../types'

export function MovieMetaInfo({
    orgName,
    slogan,
    age,
    year,
    countries,
    symbol,
    amount,
    directorsData,
    actorsData,
}: MovieMetaInfoProps): React.ReactElement {

    return (
        <div className="border-t border-gray-700/50 pt-8 mb-10">
            <div className="grid grid-cols-[200px_1fr] gap-y-5 text-sm">

                <span className="text-gray-500 font-medium">Оригинальное название</span>
                <span className="text-gray-200">{orgName}</span>

                <span className="text-gray-500 font-medium">Слоган</span>
                <span className="text-gray-200">{slogan}</span>

                <span className="text-gray-500 font-medium">Возрастные ограничения</span>
                <span className="text-gray-200">{age}</span>

                <span className="text-gray-500 font-medium">Год производства</span>
                <span className="text-gray-200">{year}</span>

                <span className="text-gray-500 font-medium">Страна</span>
                <span className="text-gray-200">{countries}</span>

                <span className="text-gray-500 font-medium">Бюджет</span>
                <span className="text-gray-200">{symbol} {amount}</span>

                <span className="text-gray-500 font-medium">Режисеры</span>
                <div className="text-gray-200 ">
                    <PeopleList people={directorsData} maxToShow={3} />
                </div>

                <span className="text-gray-500 font-medium">В главных роляж</span>
                <div className="text-gray-200 ">
                    <PeopleList people={actorsData} maxToShow={4} />
                </div>
            </div>
        </div>
    )
}