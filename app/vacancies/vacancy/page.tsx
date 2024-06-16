'use client';

import type { VacancyFull } from '@/app/models/vacancy';
import { VacancyTab } from '../components/vacancyTab';
import { EmploymentForm } from '@/app/models/vacancy/employment-form';
import block from 'bem-cn-lite';
import './page.scss';
import { Label } from '@gravity-ui/uikit';
import { ContactForm } from './components/contactForm';
import { useState } from 'react';
import { AccompanyingLetter } from '../components/accompanyingLetter/AccampanyingLetter';
import { useSearchParams } from 'next/navigation';

const b = block('vacancy');

const sample: VacancyFull = {
    id: 'RandomIndex',
    title: 'Название',
    salary: 'от 100 тысяч',
    experience: '1 год',
    employmentForms: [EmploymentForm.FullTime, EmploymentForm.Remote],
    selected: Math.floor(Math.random() * 3 - 1) > 0,

    places: ['Москва, Санкт-Петербург'],
    description:
        'Some long long description.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    expectations: Array.from({ length: 7 }).map(
        (_, id) =>
            `Ожидание Lorem ipsum dolor sit amet, consectetur adipiscing elit ${id}`
    ),
    skills: Array.from({ length: 5 }).map((_, id) => `Skill ${id}`),
    offers: Array.from({ length: 6 }).map(
        (_, id) =>
            `Предлашаем Lorem ipsum dolor sit amet, consectetur adipiscing elit ${id}`
    ),
};

export default function VacancyPage() {
    const [showLetter, setShowLetter] = useState(false);
    const queryParams = useSearchParams();

    return (
        <div className={b()}>
            <VacancyTab
                {...sample}
                id={queryParams.get('id')}
                onSelectedSwitch={() => {}}
                noLink
                onConfirm={() => {
                    setShowLetter(!showLetter);
                }}
            />
            {showLetter && <AccompanyingLetter onConfirm={() => {}} />}
            <div className={b('details')}>
                <div className={b('info', { text: true })}>
                    <p>{sample.description}</p>
                </div>
                <div className={b('info', { list: true })}>
                    <h3 className={b('title')}>Ожидания от кандидата</h3>
                    <ul>
                        {sample.expectations.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={b('info', { enum: true })}>
                    <h3 className={b('title')}>Ключевые навыки</h3>
                    <div>
                        {sample.skills.map((skill, index) => (
                            <Label size="m" key={index}>
                                {skill}
                            </Label>
                        ))}
                    </div>
                </div>
                <div className={b('info', { list: true })}>
                    <h3 className={b('title')}>Мы предлагаем</h3>
                    <ul>
                        {sample.offers.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={b('contact-form')}>
                <h3 className={b('title')}>
                    Если остались вопросы, то напишите нам
                </h3>
                <ContactForm onConfirm={console.log} />
            </div>
        </div>
    );
}
