import { store } from 'react-notifications-component';

export const showNotification = (
    type: 'success' | 'danger' | 'info' | 'default' | 'warning' | undefined,
    message: string,
    container?: 'bottom-left' | 'top-left' | 'top-right' | 'top-center' | 'center' | 'bottom-right' | 'bottom-center' | undefined,
    duration?: number,
) => {
    store.addNotification({
        message: message,
        type: type,
        insert: 'top',
        container: container || 'bottom-left',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
            duration: duration || 5000,
            onScreen: true,
            showIcon: true,
        },
        slidingExit: {
            duration: 100,
            timingFunction: 'linear',
            delay: 0,
        },
    });
};
