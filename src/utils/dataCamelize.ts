import camelize from 'camelize';
import { IRequestResponse } from '../types/CommonTypes';

const dataCamelize = (r: IRequestResponse) => {
    if (!r || (r && (!r.success || !r.data))) {
        throw r;
    }

    return camelize(r.data);
};

export default dataCamelize;
