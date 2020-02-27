import React, { useState, useEffect } from 'react'

	const NavBar = props => {

		const [filter, setFilter] = useState('all')
		const [mode, setMode] = useState(false)
		
		const handleClick = event => {
			setFilter(event.currentTarget.innerText.toLowerCase())
		}
		useEffect(() => props.handleSelect(filter),[filter])
		
		const handleMode = () => {
			setMode(!mode)
		}

		useEffect(() => props.handleMode(mode),[mode])
		
		return(
			<nav className="navBar">
				<ul className="navBar">
					<li onClick={handleClick} className={`navBar${filter === 'all' ? ' active' : ''} ${props.modeParent}`} value="all">All</li>
					<li onClick={handleClick} className={`navBar${filter === 'even' ? ' active' : ''} ${props.modeParent}`} value="even">Even</li>
					<li onClick={handleClick} className={`navBar${filter === 'odd' ? ' active' : ''} ${props.modeParent}`} value="odd">Odd</li>
					<li onClick={handleMode} className={`navBar ${props.modeParent}`}>{props.modeParent === 'dark' ? 'Light Mode' : 'Dark Mode'}</li>
				</ul>
			</nav>
		)
	}

export default NavBar