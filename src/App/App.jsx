import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useLocation,
	NavLink as Link
} from 'react-router-dom';
import { useEffect } from 'react';

//Pages
import Home from '../Pages/Home';
import Templates from '../Pages/Templates';
import About from '../Pages/About';

//Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	AOS.init({
		duration: 1200,
	});
	
  	return (
		<Router>
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-custom">
				<div className="container">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto my-1 mb-lg-0">
							<li className="nav-item">
								<Link to="/" className="nav-link" exact={true} activeClassName="active">Home</Link>
							</li>
							<li clasNames="nav-item">
								<Link to="/templates" className="nav-link">Templates</Link>
							</li>
							<li clasNames="nav-item">
								<Link to="/about" className="nav-link">About</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			
			<Switch className="overflow-hidden">
				<Route exact path="/">
					<ScrollToTop />
					<Home />
				</Route>
				<Route path="/templates">
					<ScrollToTop />
					<Templates />
				</Route>
				<Route path="/about">
					<ScrollToTop />
					<About />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Router>
  	);
}

function NotFound() {
	return (
		<div className="cover-error">
            <div className="position-absolute top-50 start-50 translate-middle">
				<div className="text-center text-white">
                    <h1>Error 404 : Not Found</h1>
                </div>
			</div>
		</div>
	)
}

function ScrollToTop() {
	const { pathname } = useLocation();
  
	useEffect(() => {
	  window.scrollTo(0, 0);
	}, [pathname]);
  
	return null;
  }

export default App;
