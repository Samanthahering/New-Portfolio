import React from 'react';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open'
    }
    return(
            <nav className={drawerClasses}>
                <div className='exit-btn'>
                    <h6 className='close-x' onClick={props.click}>X</h6>
                </div>
                <ul>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/projects'>Projects</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>
            </nav>

)}

export default SideDrawer;