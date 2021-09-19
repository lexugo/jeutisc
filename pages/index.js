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
                <a href='#' className='selected category'>Immigration</a>
                <a href='#' className='category'>Environement</a>
                <a href='#' className='category'>
                  Racism
                  <nav className='subcategories'>
                    <a href='#' className='category'>Test</a>
                    <a href='#' className='category'>Crise Climatique</a>
                    <a href='#' className='category'>Fin du monde</a>
                    <a href='#' className='category'>Réalités Autochtones</a>
                    <a href='#' className='category'>Sexualité</a>
                  </nav>
                </a>
                <a href='#' className='category'>Feminisme</a>
                <a href='#' className='category'>Réalités Autochtones</a>
              </nav>
            </div>
            <div className='by media'>
              <h2>I prefer to see</h2>
              <div className='media types'>
                <div className='tag'>
                  {/* Todo: Only visible with scripts */}
                  <input id='all' type='checkbox' name='all' checked='checked'/>
                  <label htmlFor='all'>All</label>
                </div>
                <div className='tag'>
                  <input type='checkbox' name='videos' id='videos'/>
                  <label htmlFor='videos'>Videos</label>
                </div>
                <div className='tag'>
                  <input type='checkbox' name='podcasts' id='podcasts'/>
                  <label htmlFor='podcasts'>Podcasts</label>
                </div>
                <div className='tag'>
                  <input type='checkbox' name='test' id='test'/>
                  <label htmlFor='test'>Test</label>
                </div>
                <div className='tag'>
                  <input type='checkbox' name='text' id='text'/>
                  <label htmlFor='text'>Text</label>
                </div>

              </div>
            </div>
            <div className='by tags'>
              <h2>I'm interested in</h2>
              <div className='tags'>
                <div className='tag'>
                  <input id='canada' type='checkbox' name='canada' />
                  <label htmlFor='canada'>Canada</label>
                </div>
                <div className='tag'>
                  <input id='pensionnats' type='checkbox' name='pensionnats' />
                  <label htmlFor='pensionnats'>Pensionnats autochtones</label>
                </div>
                <div className='tag'>
                  <input id='climat' type='checkbox' name='climat' />
                  <label htmlFor='climat'>Justice climatique</label>
                </div>
                <div className='tag'>
                  <input id='unsure' type='checkbox' name='unsure' />
                  <label htmlFor='unsure'>Racisme environnental</label>
                </div>
                <div className='tag'>
                  <input id='inclusivité' type='checkbox' name='inclusivité' />
                  <label htmlFor='inclusivité'>Pratique inclusive</label>
                </div>
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