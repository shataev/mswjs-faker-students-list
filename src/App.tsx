import React, { useEffect } from 'react';

import styles from'./App.module.scss';
import 'sanitize.css';
import { Header } from './components/Header';
import { ContentWrapper } from './components/ContentWrapper';
import { useDispatch } from 'react-redux';
import { getStudentsAction } from './modules/Students';
import { StudentsList } from './components/StudentsList';

function App() {
    const dispatch = useDispatch();

    useEffect( ()=>{
        dispatch(getStudentsAction());
    });

    return (
    <div className={styles.App}>
        <Header/>
        <ContentWrapper/>
    </div>
);
}

export default App;
