export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer>
			<p className='copyright'>Tous droits réservés © {year} Jeutisc</p>
		</footer>
	)
}
