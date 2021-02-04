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
		{ compendium && Object.keys(compendium).map((publisher, index) => (
			<Fragment>
				<h2>{publisher}</h2>
				{ compendium[publisher].map((url, index) => (
						<Card url={url} />
					))
				}
			</Fragment>
		))
		}
	</div>
	)
}

export default Publications;
