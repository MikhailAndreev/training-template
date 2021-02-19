import { Button, ButtonProps, useTheme } from '@material-ui/core';

import Loader from './Loader';
import NotificationService from '../../services/NotificationService';

interface ILoaderButtonProps extends ButtonProps {
  loading: boolean;
}

const LoaderButton: React.FC<ILoaderButtonProps> = props => {
  const { loading, variant, children, onClick, ...rest } = props;
  const { palette } = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      return loading ? NotificationService.showError('Идёт загрузка, пожалуйста подождите...') : onClick(e);
    }
  };

  return (
    <Button {...rest} onClick={handleClick}>
      {loading ? <Loader size={24} color={variant === 'outlined' ? palette.primary.main : '#fff'} /> : children}
    </Button>
  );
};

export default LoaderButton;
