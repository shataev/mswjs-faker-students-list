import {rest} from 'msw';

import {STUDENTS_LIST_ROUTE_MASK} from '../mocks.constants';
import {db} from '../db';
import {IStudent} from '../../components/StudentCard/StudentCard.types';

export const getStudentsHandler = rest.get(STUDENTS_LIST_ROUTE_MASK, (req, res, ctx) => {
  const students:IStudent[] = [];

  for (let i = 0; i < 6; i += 1) {
    students.push(db.student.create());
  }

  return res(
      ctx.json({
        students,
      }),
  );
});
