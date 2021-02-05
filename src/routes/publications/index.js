import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import Card from '../../components/card'
import style from './style'

const Publications = () => {

	const [compendium, updateCompendium] = useState([])

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/friendsofwallstreet/dotcom/main/data/compendium.json')
		.then(resp => {
			resp.json().then(data => {
				updateCompendium(data.publishers)
			})
		})
	}, [])
	
	return (
		<div class={style.publications}>
			<div class={style.column}>
				<a href='/add-content' class={style.postBtn}><FontAwesomeIcon icon='plus'/> Add a Source</a>
			</div>
			<div class={style.column}>
			{ compendium && Object.keys(compendium).map((publisher, index) => (
				<Fragment>
					<h2>{publisher}</h2>
					{ compendium[publisher].map((url, index) => (
							<Card url={url} />
						))
					}
				</Fragment>
			))}
			</div>
		</div>
	)
}

export default Publications;
