import { React, useContext } from 'react';
import { Context } from './context';

const Main = () => {
    const { darkmode, setDarkmode } = useContext(Context);

    return (
        <section className={
            darkmode ? 'darkmode' : ''
        }>
            <h1>main</h1>
        </section>
    )
}
export default Main