import block from 'bem-cn-lite';
import { ViewIconBlock, ViewIconInline } from './ViewIcon';
import { Button, Icon } from '@gravity-ui/uikit';

import './ViewMenu.scss';

const b = block('view-menu');

export const ViewMenu = ({
    block,
    className,
    onChange,
}: {
    block?: boolean;
    className?: string;
    onChange: (block) => void;
}) => {
    return (
        <div className={b(null, className)}>
            <Button
                className={b('block', { active: block })}
                onClick={() => onChange(true)}
                size="l"
                view="flat"
            >
                <Icon data={ViewIconBlock} />
            </Button>
            <Button
                className={b('inline', { active: !block })}
                onClick={() => onChange(false)}
                size="l"
                view="flat"
            >
                <Icon data={ViewIconInline} />
            </Button>
        </div>
    );
};
