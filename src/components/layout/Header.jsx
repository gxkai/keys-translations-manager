import React, { memo } from 'react';

export default memo(function Header() {
	return (
		<div className="navbar-header">
			<button
				type="button"
				className="navbar-toggle"
				data-toggle="collapse"
				data-target=".navbar-collapse"
			>
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"/>
				<span className="icon-bar"/>
				<span className="icon-bar"/>
			</button>
			<span className="navbar-brand">
				{' '}
				Keys-Translations Manager
			</span>
		</div>
	);
});
