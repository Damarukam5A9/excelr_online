import {useState} from 'react';
import nani from './nani.jpg';
import wallpaper from './wallpaper.jpg';

const Example3 = () => {
    let[image,setImage]=useState(nani);
    let change=()=>{
        setImage(wallpaper);
    }

    return (
        <>
        <img src={image} alt="" width="200px" height="200px"/>
        <br/>
        <button onClick={change}>Click</button>
        </>
    );

};
export default Example3;