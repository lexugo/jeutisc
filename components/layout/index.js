import Header from 'components/layout/header'

export default function Layout({ children: content }) {
	return <><Header />{ content }</>
}
