import React from "react";
import style from './container.module.scss';



export const Container = ({children}) => {
	return (
		<div className={style['main-container']}>
			{children}
		</div>
	);
};