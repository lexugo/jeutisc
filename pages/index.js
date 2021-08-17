 import { getCategories, getTags } from 'services/algolia'
 
 import Search from 'components/search'
 import Categories from 'components/categories'

function Home({ categories }) {
    return (
        <main className="home">
            <h1>Jeutisc</h1>
            <form className='search'>
              <div className="searchBar">
                <input type="search" />
              </div>
              
              <Categories categories={[]} />
            </form>
        </main>
    )
}

export async function getStaticProps() {
  let categories = await getCategories()
  const tags = await Promise.all(categories.map(category => getTags(category)))
  categories = categories.map((category, index) => { return {
    label: category,
    items: tags[index]
  }})

  return { 
    props: { categories },
    revalidate: 60 * 60 // 1 hour 
  }
}

export default Home