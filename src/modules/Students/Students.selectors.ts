import { IStudentsState } from './Students.types';
import { IStoreState } from '../../store/store.types';
import { Selector } from 'react-redux';
import { IStudent } from '../../components/StudentCard';
import { createSelector } from '@reduxjs/toolkit';

export const studentsState: Selector<IStoreState, IStudentsState> = (state) => state.students;

export const getStudentsSelector = createSelector<IStoreState, IStudentsState, IStudent[]>(
    [studentsState],
    ({data})=>data
)
