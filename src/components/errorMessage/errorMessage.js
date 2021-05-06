import React from 'react';
import './errorMessage.css';
import img from './error.gif';

const ErrorMessage = () => {
	return (
		<>
			<div className='error-display'>
				<img className='error-img' src={img} alt='error'></img>
				<div className='error-txt'>
					<span>Something goes wrong</span>
				</div>
			</div>
		</>
	)
}

export default ErrorMessage;