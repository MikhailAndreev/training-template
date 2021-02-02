import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { SITE_NAME } from '../../routes/constants';

interface UIScreenProps {
  label: string;
}

const UIScreen: FC<UIScreenProps> = ({ label, children }) => {
  return (
    <>
      <Helmet>
        <title>
          {label} | {SITE_NAME}
        </title>
      </Helmet>
      {children}
    </>
  );
};

export default UIScreen;
