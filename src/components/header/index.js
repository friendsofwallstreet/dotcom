import { h } from 'preact';
import { Link } from 'preact-router/match';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<img src="https://styles.redditmedia.com/t5_2th52/styles/communityIcon_b37n2zfs8k861.png?width=256&s=a9cb63319055ded916e5b12ff03f1e8c63ae6911"/>
		<h1>Friends of Wall Street</h1>
		<nav>
			<Link activeClassName={style.active} href="/"><FontAwesomeIcon icon="exclamation-circle"/> About</Link>
			<Link activeClassName={style.active} href="/publications"><FontAwesomeIcon icon={['far', 'newspaper']}/> Publications</Link>
			<a href="https://github.com/friendsofwallstreet/dotcom"><FontAwesomeIcon icon={['fab', 'github']}/> Github</a>
		</nav>
	</header>
)

export default Header;
