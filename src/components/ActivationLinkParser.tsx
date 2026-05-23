import { Title } from '../components/Title'
import { FormField } from '../components/FormField'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from './Button'

export function ActivationLinkParser(): React.ReactNode {
    const [link, setLink] = useState('')
    const navigate = useNavigate()

    const handleChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLink(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const linkParts: string[] = link.split('activate')
        const path: string = '/auth/activate' + linkParts[1]
        console.log(path)
        navigate(path)
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
            <div className="w-full max-w-md">
                <Title
                    title='Вставьте ссылку в поле'
                    className='text-2xl font-bold text-center text-white mb-6'
                />
                <form onSubmit={handleSubmit} className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-xl">
                    <FormField
                        id="link"
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        onChange={handleChangeLink}
                    />
                    <Button
                        type="submit"
                        className="mt-4 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all"
                        text='Перейти'
                    />
                </form>
            </div>
        </div>
    )
}