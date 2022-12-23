import React from 'react'
import { ThumborImage } from 'react-thumbor-img'

function MyAwesomeSection(props) {
	return <section>
			<ThumborImage
				server='https://cloudfront-us-east-1.images.arcpublishing.com'
				src='https://cloudfront-us-east-1.images.arcpublishing.com/resizer/v2/sandbox.pyxis/PW4JYXM4DBF4LPZHP5KL5BAUZU.jpg?auth=dGhpYWdvLmxvcGVzQHB5eGlzcG9ydGEuY29tOmN5alhlZy13aWpkZWotbWl0eG8w'
				height={200}
				width={300}
			/>
		</section>
}

export default MyAwesomeSection;