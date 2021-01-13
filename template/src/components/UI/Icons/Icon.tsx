import { FC, ReactNode } from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

interface IIconProps extends SvgIconProps {
    component: ReactNode;
    size: {
        width: number;
        height: number;
    };
}

export const Icon: FC<IIconProps> = props => {
    const { size, component } = props;

    return <SvgIcon viewBox={`0 0 ${size.width} ${size.height}`} component={component} {...props} style={size}></SvgIcon>;
};
