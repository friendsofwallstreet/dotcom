import { h } from 'preact'
import style from './style'
import { useEffect, useState } from 'preact/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (props) => {

  const [card, updateCard] = useState({})

  useEffect(() => {
    if(props.url) {
      fetch('https://raw.githubusercontent.com/friendsofwallstreet/dotcom/main/data/content/'+encodeURIComponent(props.url)+'.json')
      .then(resp => {
        resp.json().then(data => {
          updateCard(prevCard => data)
        })
      })
    }
  }, [props.url])

	return (
    <div class={style.card}>
      <a href={atob(props.url)} ><h3 class={style.title}>{card.title && atob(card.title)}</h3></a>
      <a class={style.link} href={atob(props.url)} ><FontAwesomeIcon icon='external-link-alt'/>&nbsp;&nbsp;{atob(props.url)}</a>
      <pre class={style.comments}>{card.comments && atob(card.comments)}</pre>
    </div>
	)
}

export default Card;