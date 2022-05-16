import DB from './mock';
import { User, Repository, History } from "../models/types";

/*
    General Interface for Database.
    Please inject real database here.
 */

export type modelTypes = {
    User: User,
    Repository: Repository,
    History: History,
};
export type tableNames = keyof modelTypes;

export type getParams<T extends tableNames> = {
    table: T,
    params?: Partial<modelTypes[T]>,
}
export const get = async <T extends tableNames>({ table, params } : getParams<T>) : Promise<modelTypes[T][]> => {
    // TODO: replace real db
    const result = await DB[table]() as modelTypes[T][];
    if(!params) return result;
    return result.filter((data) => {
        for(const [key, value] of Object.entries(params)) {
            if(value !== data[key as keyof modelTypes[T]]) return false;
        }
        return true;
    })
};