import camelize from 'camelize';
import { IRequestResponse } from '../types/CommonTypes';

const dataCamelize = <T, R = T>(r: IRequestResponse<T>): R => {
    if (!r || (r && (!r.success || !r.data))) {
        throw r;
    }

    return camelize(r.data);
};

export default dataCamelize;
