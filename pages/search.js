import SearchBar from 'components/search'

export default function Search({ query }) {
    return (
      <main className="search">
        <h1>Search: { query }</h1>
        <SearchBar />
      </main>
    )
}

export async function getServerSideProps({ query: { q: query }}) {
    return {
      props: { query: query ?? "" }, // will be passed to the page component as props
    }
  }