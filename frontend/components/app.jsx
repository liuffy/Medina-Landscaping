import React from 'react';
import '../../css/app';

const App = () =>{
	return(
			<div className="page">
				<div className="top-row">
					<div className="wordmark">
						<img className="tree-logo"
								 src='../../app/assets/img/tree.svg' /> Medina
					 </div>
					<div className="nav-bar">
						<ul className="nav-list">
							<li className="active">Home</li>
							<li>Portfolio</li>
							<li>Contact</li>
						</ul>
					</div>
				</div>
			</div>
  		)
	}



export default App;