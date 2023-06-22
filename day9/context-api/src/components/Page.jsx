import React, { useContext } from 'react'
import Main from './Main';
import Header from './Header';
import { Context } from './context';

const Page = () => {
    const { darkmode, setDarkmode } = useContext(Context);

    return (
        <div className={darkmode ? 'App darkmode' : 'App'}>
            <Header />
            <Main />
        </div>
    )
}
export default Page;