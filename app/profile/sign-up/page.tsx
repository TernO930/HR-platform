'use client';

import { Field, Form } from 'react-final-form';
import { Profile } from '../../models/profile/profile';
import block from 'bem-cn-lite';
import { EditableField, FieldType } from '../components/field/Field';
import { BrandButton } from '../../components/BrandButton';
import { Essentials } from '../components/essentials/Essentials';
import { Education } from '../components/education/Education';
import arrayMutators from 'final-form-arrays';
import { WorkExperience } from '../components/workExperience/WorkExperience';
import { Skills } from '../components/skills/Skills';
import './page.scss';
import { Avatar } from '../components/avatar/Avatar';

const onSubmit = (data: Profile) => {
    console.log(data);
};

const b = block('profile-edit');

export default function Page() {
    return (
        <Form<Profile>
            mutators={{ ...arrayMutators }}
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <div className={b()}>
                    <div className={b('section', { essentials: true })}>
                        <h2 className={b('header')}>Основная информация</h2>
                        <div className={b('general-info')}>
                            <Avatar />
                            <Essentials />
                        </div>
                        <div className={b('about')}>
                            <h2 className={b('header')}>Про себя</h2>
                            <Field<
                                Profile['essentials']['about']
                            > name="essentials.about">
                                {(props) => (
                                    <EditableField
                                        type={FieldType.Text}
                                        value={props.input.value}
                                        onUpdate={props.input.onChange}
                                        minRows={10}
                                    />
                                )}
                            </Field>
                        </div>
                    </div>
                    <div className={b('section', { education: true })}>
                        <h2 className={b('header')}>Образование</h2>
                        <Education />
                    </div>
                    <div className={b('section', { work: true })}>
                        <h2 className={b('header')}>Опыт работы</h2>
                        <WorkExperience />
                    </div>
                    <div className={b('section', { skills: true })}>
                        <h2 className={b('header')}>Ключевые навыки</h2>
                        <Skills />
                    </div>
                    <div className={b('section', { skills: true })}>
                        <h2 className={b('header')}>Пароль</h2>
                        <Field<string> name="password">
                            {(props) => (
                                <EditableField
                                    type={FieldType.Line}
                                    onUpdate={props.input.onChange}
                                    inputType="password"
                                />
                            )}
                        </Field>
                    </div>
                    <BrandButton onClick={handleSubmit}>
                        Зарегестрироваться
                    </BrandButton>
                </div>
            )}
        />
    );
}
