import { h } from 'preact'
import style from './style'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { useState } from 'preact/hooks'

const PostForm = () => {

	const [state, updateState] = useState({})

	const onVerifyCaptcha = (token) => {
		console.log(token)
		updateState((prevState) => ({
			...prevState,
			"captcha": token,
		}))
	}
	
	console.log(state.captcha)
	return (
	<div class={style.postForm}>
		<h1>Add a Source</h1>
		<div class={style.card}>
			<label for="title">*Title</label>
      <input type="text" id="title" placeholder="Enter the Video or Article Title"/>
			<label for="url">*URL</label>
      <input type="text" id="url" placeholder="Enter the website url"/>
			<label for="comments">*Comments</label>
      <textarea id="comments" rows='5' placeholder="Why is this source bs?"/>
			<label for="publisher">*Publisher</label>
      <input type="text" id="publisher" placeholder="What company published this?"/>
			<label for="credit">Credit</label>
      <input type="text" id="credit" placeholder="Reddit username: e.g. u/DeepFuckingValue"/>
			<HCaptcha sitekey="323f7814-ee99-427c-bc70-cecd99769b6b" size="normal" onVerify={onVerifyCaptcha}/>
      <br />
      {state.captcha && <input type="button" value="Submit" onClick={submitForm}/>}
		</div>
	</div>
	)
}

export default PostForm;
