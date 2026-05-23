import React, { useEffect, useState } from 'react'
import KinopoiskLogo from '../assets/icons/Kinopoisk.svg?react'
import Search from '../assets/icons/Search.svg?react'
import { MovieNavigation } from './MoviesNavigation'
import { UserPick } from './UserPick'
import { FormFieldForHeader } from './FormFieldForHeader'
import { Collapse } from './Collapse'
import { Title } from './Title'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { fetchAboutUser } from '../redux/auth-slice'

export function Header(): React.ReactElement {
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const [isOpenCollapse, setIsOpenCollapse] = useState<boolean>(false)
  const user = useAppSelector((store) => store.auth.AboutUser)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAboutUser())
  }, [])

  function handleCloseSearch() {
    setIsSearch(false)
  }

  function handleClickChevronDown() {
    setIsOpenCollapse(!isOpenCollapse)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-md border-b border-white/20 relative">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">

          <div className="flex items-center gap-3 shrink-0">
            <KinopoiskLogo width={36} height={36} className="text-white" />
            <Title
              className="text-2xl font-bold text-white tracking-wide"
              title="КИНОПОИСК"
            />
          </div>

          <nav className="flex items-center gap-6">
            <MovieNavigation />
          </nav>

          <div className="flex items-center gap-4">
            {!isSearch ? (
              <button
                type="button"
                onClick={() => setIsSearch(true)}
                className="p-2 rounded-xl text-gray-600 hover:bg-white/60 hover:text-black transition-all cursor-pointer"
              >
                <Search width={26} height={24} fill='white' />
              </button>
            ) : (
              <FormFieldForHeader onClose={handleCloseSearch} />
            )}
            <UserPick onClick={handleClickChevronDown} isOpen={isOpenCollapse} infoAboutUser={user} />
          </div>
        </div>
      </div>
      {isOpenCollapse && (<Collapse onCloseCollapse={() => setIsOpenCollapse(false)} />)}
    </header>
  )
}
