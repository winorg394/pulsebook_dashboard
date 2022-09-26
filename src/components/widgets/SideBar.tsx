import React,{FC} from 'react';
import Menu from './Menu';
interface Props {
    // any props that come into the component
}

const SideBar =() =>{
    return(
        <>
        <div>
           navigation

            <Menu/>
        </div>
        </>
    )
}

export default SideBar;