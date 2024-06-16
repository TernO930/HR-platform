'use client';

import { EmploymentForm } from '../models/vacancy/employment-form';
import { VacancyTab, VacancyTabProps } from './components/vacancyTab';
import block from 'bem-cn-lite';

import './page.scss';
import { useState } from 'react';
import { AccompanyingLetter } from './components/accompanyingLetter/AccampanyingLetter';
import { ViewMenu } from './components/viewMenu/ViewMenu';

const b = block('vacancies-page');

const sample: Omit<VacancyTabProps, 'onConfirm'>[] = Array.from({
    length: 10,
}).map((_, index) => ({
    id: index.toString(),
    title: 'Название вакансии',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    salary: 'от 100 тысяч',
    experience: '3 года',
    employmentForms: [EmploymentForm.FullTime, EmploymentForm.Remote],
    selected: Math.floor(Math.random() * 3 - 1) > 0,
    places: ['Москва, Санкт-Петербург'],
    onSelectedSwitch: () => {},
}));

export default function Page() {
    const [letterId, setLetterId] = useState<number | undefined>();
    const [block, setBlock] = useState(false);

    return (
        <div className={b('container')}>
            <ViewMenu onChange={setBlock} block={block} className={b('view')} />
            <div className={b()}>
                {sample.map((vacancy, index) => (
                    <VacancyTab
                        {...vacancy}
                        key={vacancy.id}
                        onConfirm={() => {
                            if (letterId === index) {
                                return setLetterId(undefined);
                            }
                            setLetterId(index);
                        }}
                        confirmed={letterId === index}
                        block={block}
                        className={b('vacancy', { inline: !block })}
                    />
                ))}
                {letterId !== undefined && (
                    <AccompanyingLetter
                        className={b('letter')}
                        onConfirm={() => {
                            setLetterId(undefined);
                        }}
                        style={{
                            gridRowStart:
                                Math.ceil((letterId + 1) / (block ? 3 : 1)) + 1,
                            gridRowEnd:
                                Math.ceil((letterId + 1) / (block ? 3 : 1)) + 2,
                        }}
                    />
                )}
            </div>
        </div>
    );
}
