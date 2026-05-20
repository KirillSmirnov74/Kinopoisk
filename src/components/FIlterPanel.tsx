import React, { useEffect } from "react";
import Close from '../assets/icons/Close.svg?react';
import { Title } from "./Title";
import { FilterPanelProps, FilterFormValues } from "../types";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { fetchFilters } from "../redux/filters-slice";
import { Button } from "./Button";
import { FormField } from "./FormField";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSearchParams, useNavigate } from "react-router";

export function FilterPanel({ closeFilterPanel }: FilterPanelProps): React.ReactElement {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const genres = useAppSelector((store) => store.filters.genres);
    const countries = useAppSelector((store) => store.filters.countries);


    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FilterFormValues>({
        defaultValues: {
            sortBy: 'RATING',
            filmTitle: '',
            yearFrom: '',
            yearTo: '',
            ratingFrom: '',
            ratingTo: '',
            genre: '',
            country: ''
        }
    });

    const sortBy = watch('sortBy');

    const onSubmit: SubmitHandler<FilterFormValues> = (data) => {
        const params = new URLSearchParams(searchParams);

        if (data.sortBy) params.set('order', data.sortBy);
        if (data.filmTitle.trim()) {
            params.set('keyword', data.filmTitle.trim());
        } else {
            params.delete('keyword');
        }

        if (data.genre) params.set('genres', data.genre);
        else params.delete('genres');

        if (data.country) params.set('countries', data.country);
        else params.delete('countries');

        if (data.yearFrom) params.set('yearFrom', String(data.yearFrom));
        else params.delete('yearFrom');

        if (data.yearTo) params.set('yearTo', String(data.yearTo));
        else params.delete('yearTo');

        if (data.ratingFrom) params.set('ratingFrom', String(data.ratingFrom));
        else params.delete('ratingFrom');

        if (data.ratingTo) params.set('ratingTo', String(data.ratingTo));
        else params.delete('ratingTo');

        navigate(`/films/search?${params.toString()}`);
        closeFilterPanel();
    };

    useEffect(() => {
        dispatch(fetchFilters());
    }, [dispatch])

    const renderAlert = (text: string | undefined) => {
        return (
            <div className="text-xs mt-2 text-red-400">{text}</div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col bg-gray-900 text-gray-200">
            {/* Шапка */}
            <div className="flex items-center justify-between p-5 border-b border-gray-800 shrink-0">
                <Title title='Фильтры' className="text-lg font-semibold" />
                <button type="button" onClick={closeFilterPanel} className="p-1.5 rounded-md text-gray-500 hover:text-white hover:bg-gray-800 active:bg-gray-700 transition-colors cursor-pointer">
                    <Close width={15} height={15} fill="white" />
                </button>
            </div>

            {/* Контент */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
                <section>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block">Сортировка</label>
                    <div className="flex bg-gray-800 p-1 rounded-lg">
                        <input type="hidden" {...register('sortBy')} />

                        <Button
                            type="button"
                            onClick={() => setValue('sortBy', 'RATING')}
                            className={`flex-1 py-1.5 text-sm font-medium rounded-md cursor-pointer transition-colors ${sortBy === 'RATING' ? "bg-gray-700 text-white" : "text-gray-500 hover:bg-gray-800/50"
                                }`}
                            text="По рейтингу"
                        />

                        <Button
                            type="button"
                            onClick={() => setValue('sortBy', 'YEAR')}
                            className={`flex-1 py-1.5 text-sm font-medium rounded-md cursor-pointer transition-colors ${sortBy === 'YEAR' ? "bg-gray-700 text-white" : "text-gray-500 hover:bg-gray-800/50"
                                }`}
                            text="По году"
                        />
                    </div>
                </section>

                {/* Название */}
                <section>
                    <FormField
                        type="text"
                        classNameForLabel="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block"
                        label="Название фильма"
                        placeholder="Введите название..."
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 hover:border-gray-600 transition-all cursor-text"
                        {...register('filmTitle', { maxLength: 50 })}
                    />
                    {errors.filmTitle && renderAlert('Название должно быть не длинее 50 символов')}
                </section>

                <div className="grid grid-cols-2 gap-4">
                    <section>
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">Год выхода</label>
                        <div className="flex gap-2">
                            <div className="flex-1 flex flex-col">
                                <FormField
                                    type="number"
                                    placeholder="От"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 hover:border-gray-600 transition-all cursor-text"
                                    {...register('yearFrom', {
                                        valueAsNumber: true,
                                        min: { value: 1900, message: 'Минимум 1900' },
                                        max: { value: 2026, message: 'Максимум 2026' }
                                    })}
                                />
                                {errors.yearFrom && renderAlert(errors.yearFrom.message)}
                            </div>

                            <div className="flex-1 flex flex-col">
                                <FormField
                                    type="number"
                                    placeholder="До"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 hover:border-gray-600 transition-all cursor-text"
                                    {...register('yearTo', {
                                        valueAsNumber: true,
                                        min: { value: 1900, message: 'Минимум 1900' },
                                        max: { value: 2026, message: 'Максимум 2026' }
                                    })}
                                />
                                {errors.yearTo && renderAlert(errors.yearTo.message)}
                            </div>
                        </div>
                    </section>
                    <section>
                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">Рейтинг</label>
                        <div className="flex gap-2">
                            <div className="flex-1 flex flex-col">
                                <FormField
                                    type="number"
                                    step="0.1"
                                    placeholder="От"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 hover:border-gray-600 transition-all cursor-text"
                                    {...register('ratingFrom', {
                                        valueAsNumber: true,
                                        min: { value: 1, message: 'Минимальный рейтинг 1' },
                                        max: { value: 10, message: 'Максимальный рейтинг 10' }
                                    })}
                                />
                                {errors.ratingFrom && renderAlert(errors.ratingFrom.message)}
                            </div>

                            <div className="flex-1 flex flex-col">
                                <FormField
                                    type="number"
                                    step="0.1"
                                    placeholder="До"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 hover:border-gray-600 transition-all cursor-text"
                                    {...register('ratingTo', {
                                        valueAsNumber: true,
                                        min: { value: 1, message: 'Минимальный рейтинг 1' },
                                        max: { value: 10, message: 'Максимальный рейтинг 10' }
                                    })}
                                />
                                {errors.ratingTo && renderAlert(errors.ratingTo.message)}
                            </div>
                        </div>
                    </section>
                </div>

                <section>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">Жанр</label>
                    <select
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 hover:border-gray-600 transition-all cursor-pointer appearance-none"
                        {...register('genre')}
                    >
                        <option value="">Все жанры</option>
                        {genres.map(g => (
                            <option key={g.id} value={g.id}>{g.genre}</option>
                        ))}
                    </select>
                </section>

                {/* Страна */}
                <section>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">Страна</label>
                    <select
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 hover:border-gray-600 transition-all cursor-pointer appearance-none"
                        {...register('country')}
                    >
                        <option value="">Все страны</option>
                        {countries.map(c => (
                            <option key={c.id} value={c.id}>{c.country}</option>
                        ))}
                    </select>
                </section>
            </div>

            {/* Футер */}
            <div className="p-5 border-t border-gray-800 flex gap-3 bg-gray-900 shrink-0">
                <Button type="button"
                    className="flex-1 py-2 px-4 rounded-lg border border-gray-700 text-gray-400 font-medium text-sm hover:bg-gray-800 hover:text-white active:bg-gray-700 transition-colors cursor-pointer"
                    text="Сбросить"
                />
                <Button
                    type="submit"
                    className="flex-[2] py-2 px-4 rounded-lg bg-gray-700 text-white font-medium text-sm hover:bg-gray-600 active:bg-gray-500 active:scale-[0.98] transition-all cursor-pointer shadow-md hover:shadow-lg"
                    text="Показать результаты"
                />
            </div>
        </form>
    );
}



