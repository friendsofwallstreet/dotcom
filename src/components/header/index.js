import { h } from 'preact';
import { Link } from 'preact-router/match';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<img src="https://a.thumbs.redditmedia.com/nmh5l-zCsmmc3y2ehfjtWRJjGmCEWEJDTjtW3AGMz60.png"/>
		<h1>Friends of Wall Street</h1>
		<nav>
			<Link activeClassName={style.active} href="/"><FontAwesomeIcon icon="exclamation-circle"/> About</Link>
			<Link activeClassName={style.active} href="/publications"><FontAwesomeIcon icon={['far', 'newspaper']}/> Publications</Link>
			<a target="_blank" href="https://github.com/friendsofwallstreet/dotcom"><FontAwesomeIcon icon={['fab', 'github']}/> Github</a>
		</nav>
	</header>
)

export default Header;
