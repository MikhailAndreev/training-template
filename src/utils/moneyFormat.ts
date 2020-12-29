import { Nullable } from '../types/CommonTypes';

const moneyFormat = (amount: Nullable<number | string>) => {
    if (amount) {
        return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    }

    return 0;
};

export default moneyFormat;
