import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { fetchStaffMemberDetails, fetchFilmsDetailsByIds, clearStaffMember } from '../redux/staff-slice'
import { PosterL } from '../components/PosterL'
import { Title } from '../components/Title'
import { getFilmsWithPoster } from '../helpers'
import { SwiperComponent } from '../components/Swiper'
import { StaffMemberMetaInfo } from '../components/StaffMemberMetaInfo'

export function StaffMember(): React.ReactElement {

    const { staffId } = useParams()
    const dispatch = useAppDispatch()

    const {
        data: staffMemBer,
        filmography: filmsByStaffMember,
        filmsDetails: filmsByStaff,
        loading
    } = useAppSelector((store) => store.staffMember)

    const filmsWithPoster = getFilmsWithPoster(filmsByStaff || [])

    useEffect(() => {
        dispatch(clearStaffMember())
        dispatch(fetchStaffMemberDetails(Number(staffId)))
    }, [dispatch, staffId])

    useEffect(() => {
        if (filmsByStaffMember && filmsByStaffMember.length > 0) {
            const uniqueIds = Array.from(new Set(filmsByStaffMember.map(film => film.filmId)))
            dispatch(fetchFilmsDetailsByIds(uniqueIds))
        }
    }, [filmsByStaffMember, dispatch])

    if (loading || !staffMemBer) {
        return (
            <div className="flex items-center justify-center min-h-[50vh] w-full">
                <p className="text-gray-400 text-lg">Загрузка...</p>
            </div>
        )
    }

    return (
        <div className="flex px-12 gap-12 w-full max-w-7xl mx-auto py-10">
            <PosterL posterUrl={staffMemBer.posterUrl} />
            <div>
                <div className="mb-15 flex-col">
                    <Title title={staffMemBer.nameRu} className="text-5xl font-bold text-white mb-3" />
                    <span className="text-xl font-semibold text-gray-500">{staffMemBer.nameEn}</span>
                </div>
                <StaffMemberMetaInfo
                    profession={staffMemBer.profession}
                    birthday={staffMemBer.birthday}
                    birthplace={staffMemBer.birthplace}
                    death={staffMemBer.death}
                    deathplace={staffMemBer.deathplace}
                    age={staffMemBer.age}
                />
                <div className="max-w-3xl w-full mb-10 mt-12">
                    <Title title="Лучшие работы" className="text-3xl font-bold text-white mb-8"
                    />
                    <SwiperComponent data={filmsWithPoster} />
                </div>
            </div>
        </div>
    )
}