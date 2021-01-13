export type Nullable<T> = T | null;
// export type StringOrNumber = string | number;
// export type SortOrders = 'asc' | 'desc';

// Axios request
export interface IRequestResponse {
    success: boolean;
    errors: [] | null;
    message: string | null;
    data: any;
}

// useParam hook
// export interface IStringParams {
//     [key: string]: string;
// }
