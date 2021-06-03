import { factory } from '@mswjs/data';

import {StudentModel as student} from './models'

export const db = factory({
    student
})
