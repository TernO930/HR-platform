import { Avatar, Button } from '@gravity-ui/uikit';
import block from 'bem-cn-lite';

import './User.scss';
import Link from 'next/link';
import { Routes } from '@/app/constants/routes';
import { BrandButton } from '../BrandButton';

const b = block('user');

export const User = ({ authorized }: { authorized?: boolean }) => {
    if (!authorized) {
        return (
            <div className={b('actions')}>
                <Link
                    className={b('authorize')}
                    href={`${Routes.Profile}/authorize`}
                >
                    <BrandButton onClick={() => {}}>
                        Авторизироваться
                    </BrandButton>
                </Link>
                <Link
                    className={b('sign-up')}
                    href={`${Routes.Profile}/sign-up`}
                >
                    <Button size="l">Зарегестрироваться</Button>
                </Link>
            </div>
        );
    }

    return (
        <Link className={b()} href={Routes.Profile}>
            <Avatar
                className={b('avatar')}
                imgUrl="/images/user-avatar-default.svg"
                size="l"
                view="outlined"
            />
            <div className={b('user-info')}>
                <span className={b('name')}>User Name</span>
                <span className={b('email')}>sample@sample.net</span>
            </div>
        </Link>
    );
};
