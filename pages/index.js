 import { getFacets } from 'services/algolia'
 
 import Search from 'components/search'
 import Categories from 'components/categories'

function Home({ categories }) {
    return (
        <main className="home">
            <header>
              <h1>Jeutisc</h1>
            </header>
            <form className='search'>
              <div className="searchBar">
                <input type="search" />
              </div>
            </form>
            <Categories categories={categories} />
        </main>
    )
}

export async function getStaticProps() {
  const categories = await getFacets()

  return { 
    props: { categories },
    revalidate: 60 * 60 // 1 hour 
  }
}

export default Home