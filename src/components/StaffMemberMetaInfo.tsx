import React from "react"
import { StaffMemberMetaInfoProps } from "../types"
import { formatDate } from "../helpers"
import { InfoField } from "./InfoField"

export function StaffMemberMetaInfo({ profession, birthday, birthplace, death, age }: StaffMemberMetaInfoProps): React.ReactElement {

    const dateOfDeath = formatDate(death)
    const dateOfBirthday = formatDate(birthday)


    return (
        <>
            <span className="text-black text-2xl font-bold">О персоне</span>
            <div className=" pt-6 mb-10">
                <div className="grid grid-cols-[200px_1fr] gap-y-5 text-sm">
                    <InfoField label='Карьера' value={profession} />
                    <InfoField label='Дата рождения' value={dateOfBirthday} />
                    <InfoField label='Место рождения' value={birthplace} />
                    <InfoField label='Возраст' value={age} />
                    <InfoField label='Дата смерти' value={dateOfDeath} />
                </div>
            </div>
        </>
    )
}