import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
    let attachedclasses = [classes.SideDrawer , classes.Close];
    if(props.open){
        attachedclasses = [classes.SideDrawer , classes.Open];
    }
    return(
        <Auxiliary>
        <Backdrop  show={props.open} clicked={props.closed}/>
        <div className={attachedclasses.join(' ')} onClick={props.closed}>
            <div className={classes.Logo}>
                <Logo height="70px"/>
            </div>
            <nav>
                <NavigationItems isAuthenticated={props.isAuth}/>
            </nav>
        </div>
        </Auxiliary>
    );
};
 //boolean property show is true bydefault else we do pass false
export default sideDrawer;