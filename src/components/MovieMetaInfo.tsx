import React from "react";
import { PeopleList } from "./PeopleList";
import { MovieMetaInfoProps } from "../types";

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

                <div className="text-gray-500 font-medium">Оригинальное название</div>
                <div className="text-gray-200">{orgName}</div>

                <div className="text-gray-500 font-medium">Слоган</div>
                <div className="text-gray-200">{slogan}</div>

                <div className="text-gray-500 font-medium">Возрастные ограничения</div>
                <div className="text-gray-200">{age}</div>

                <div className="text-gray-500 font-medium">Год производства</div>
                <div className="text-gray-200">{year}</div>

                <div className="text-gray-500 font-medium">Страна</div>
                <div className="text-gray-200">{countries}</div>

                <div className="text-gray-500 font-medium">Бюджет</div>
                <div className="text-gray-200">{symbol} {amount}</div>

                <div className="text-gray-500 font-medium">Режисеры</div>
                <div className="text-gray-200 ">
                    <PeopleList people={directorsData} maxToShow={3} />
                </div>

                <div className="text-gray-500 font-medium">В главных роляж</div>
                <div className="text-gray-200 ">
                    <PeopleList people={actorsData} maxToShow={4} />
                </div>
            </div>
        </div>
    )
}