'use client';

import block from 'bem-cn-lite';
import { useRouter } from 'next/navigation';
import { Field, Form } from 'react-final-form';
import { EditableField, FieldType } from '../components/field/Field';
import { BrandButton } from '@/app/components/BrandButton';

import './page.scss';

const b = block('authorize');

export default function Page() {
    const router = useRouter();

    return (
        <Form
            onSubmit={() => {}}
            render={({ handleSubmit }) => (
                <div className={b()}>
                    <div>
                        <h2>Email</h2>
                        <Field<string> name="email">
                            {(props) => (
                                <EditableField
                                    type={FieldType.Line}
                                    inputType="email"
                                    onUpdate={props.input.onChange}
                                />
                            )}
                        </Field>
                        <h2>Пароль</h2>
                        <Field<string> name="password">
                            {(props) => (
                                <EditableField
                                    type={FieldType.Line}
                                    inputType="password"
                                    onUpdate={props.input.onChange}
                                />
                            )}
                        </Field>
                    </div>
                    <BrandButton onClick={handleSubmit}>
                        Подтвердить
                    </BrandButton>
                </div>
            )}
        />
    );
}
