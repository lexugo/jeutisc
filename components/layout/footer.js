export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer>
			<p className='copyright'>All rights reserved © {year} Jeutisc</p>
		</footer>
	)
}
