import ChevronDown from '../assets/icons/Chevron-down.svg?react'

export function UserPick() {
    return (
        <div className='flex items-center'>
            <div className=' px-3 py-3 bg-red-500 rounded-xl mr-3'>
                <span className='text-sm flex items-center font-semibold text-white'>KS</span>
            </div>
            <span className='text-base font-semibold text-white mr-7'>Kirill Smirnov</span>
            <ChevronDown width={17} height={17} color='red' />
        </div>
    )
}