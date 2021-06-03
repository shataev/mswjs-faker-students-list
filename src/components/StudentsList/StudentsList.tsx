import { FC } from 'react';
import styles from './StudentsList.module.scss'
import { useSelector } from 'react-redux';
import { getStudentsSelector } from '../../modules/Students';
import { StudentCard } from '../StudentCard';

export const StudentsList:FC = ()=>{

    const students = useSelector(getStudentsSelector);

    return (
        <div className={styles.studentsList}>
            {students.map(student=>{
                return <StudentCard { ...student } key={student.id}/>
            })}
        </div>
    )
}
