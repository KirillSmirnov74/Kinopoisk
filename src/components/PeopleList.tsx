import React from 'react';
import { PeopleListProps } from '../types';



export function PeopleList({ people, maxToShow = 3 }: PeopleListProps): React.ReactElement {

    if (!people || people.length === 0) {
        return <span className="text-gray-200">—</span>;
    }

    const visiblePeople = people.slice(0, maxToShow);
    const remainingCount = people.length - maxToShow;

    return (
        <div className="text-gray-200 flex items-center flex-wrap gap-x-1">
            {visiblePeople.map((person, index, arr) => (
                <span key={person.staffId}>
                    {person.nameRu}
                    {index < arr.length - 1 && ', '}
                </span>
            ))}

            {remainingCount > 0 && (
                <a className='cursor-pointer'>
                    ... еще
                </a>
            )}
        </div>
    );
};
