import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';
import Loader from './Loader';
import { showNotification } from '../../utils/showNotification';

interface ILoaderButtonProps extends ButtonProps {
    loading: boolean;
}

const LoaderButton: React.FC<ILoaderButtonProps> = props => {
    const handleChangeEvent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            return !props.loading ? props.onClick(e) : showNotification('danger', 'Идёт загрузка, пожалуйста подождите...');
        }
    };

    return (
        <Button {...props} onClick={handleChangeEvent}>
            {/* If background is transparent loader is invisible */}
            {props.loading ? <Loader size={24} color={props.variant === 'outlined' ? '#18A6F5' : '#fff'} /> : props.children}
        </Button>
    );
};

export default LoaderButton;
