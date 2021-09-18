 import { getFacets } from 'services/algolia'
 
 import Search from 'components/search'
 import Categories from 'components/categories'

function Home({ categories }) {
    return (
      <>
        <header>
          <h1><a href='/'>Jeutisc</a></h1>
        </header>
        <main>
          <header>
            <nav>
              <a href='#' className='focused'>search</a>
              <a href='#'>ressources</a>
            </nav>
          </header>
          <form className='search'>
            <div className='by query'>
              <h2>I have a question about</h2>
              <input name='q' type='search' placeholder='Racism'/>
            </div>
            <div className='by categories'>
              <h2>I want to understand more about</h2>
              <nav className='categories'>
                <a href='#' className='category'>Réalités Autochtones</a>
                <a href='#' className='category'>Environement</a>
                <a href='#' className='category'>Immigration</a>
                <a href='#' className='category'>Environement</a>
                <a href='#' className='category'>Racism</a>
                <a href='#' className='category'>Feminisme</a>
                <a href='#' className='category'>Réalités Autochtones</a>
              </nav>
            </div>
            <div className='by media'>
              <h2>I prefer to see</h2>
              <div className='media types'>
                <label className='selected media type'> 
                  All {/* Todo: Only visible with scripts */}
                  <input type='checkbox' name='all' checked />
                </label>
                <label className='media type'>
                  Videos
                  <input type='checkbox' name='video'/>
                </label>
                <label className='media type'>
                  Podcasts
                  <input type='checkbox' name='podcast'/>
                </label>
                <label className='media type'>
                  Videos
                  <input type='checkbox' name='video'/>
                </label>
                <label className='media type'>
                  Podcasts
                  <input type='checkbox' name='podcast'/>
                </label>
              </div>
            </div>
            <div className='by tags'>
              <h2>I'm interested in</h2>
              <div className='tags'>
                <label className='tag'>
                  Canada
                  <input type='checkbox' name='canada'/>
                </label>
                <label className='tag'>
                  Pensionnats autochtones
                  <input type='checkbox' name='pensionnats'/>
                </label>
                <label className='tag'>
                  Justice climatique
                  <input type='checkbox' name='climat'/>
                </label>
                <label className='selected tag'>
                  Crise climatique
                  <input type='checkbox' name='crise'/>
                </label>
                <label className='selected tag'>
                  Racisme environnental
                  <input type='checkbox' name='unsure'/>
                </label>
                <label className='tag'>
                  Pratique inclusive
                  <input type='checkbox' name='inclusivité'/>
                </label>
              </div>
            </div>
            <footer>
              <button id='submit' type='submit'>Search</button>
              <button id='reset' type='reset'>x</button>
            </footer>
          </form>
        </main>
      </>
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