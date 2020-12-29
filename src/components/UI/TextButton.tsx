import React from 'react';
import clsx from 'clsx';
import { makeStyles, Button, ButtonProps, Theme } from '@material-ui/core';

interface ITextButtonProps extends ButtonProps {
    lowercase?: boolean;
}

const TextButton: React.FC<ITextButtonProps> = props => {
    const classes = useStyles();

    return (
        <Button variant="text" disableRipple {...props} className={clsx(props.className, props.lowercase ? classes.lowercase : '')}>
            {props.children}
        </Button>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    lowercase: {
        textTransform: 'none',
        letterSpacing: 0,
        fontWeight: 400,
    },
}));

export default TextButton;
