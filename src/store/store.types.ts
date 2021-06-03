import { IStudent } from '../components/StudentCard/StudentCard.types';
import { IStudentsState } from '../modules/Students';

export interface IStoreState {
    students: IStudentsState
}
