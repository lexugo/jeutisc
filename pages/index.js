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
              <div className='categories'>
                <a href='#' className='category'>
                  <input type='checkbox' id='1' name='category' value='Réalités Autochtones'/>
                  <label htmlFor='1'>Réalités Autochtones</label>
                </a>
                <a href='#' className='category'>
                  <input type='checkbox' id='2' name='category' value='Environement'/>
                  <label htmlFor='2'>Environement</label>
                </a>
                <a href='#' className='category'>
                  <input type='checkbox' id='3' name='category' value='Immigration'/>
                  <label htmlFor='3'>Immigration</label>
                </a>
                <a href='#' className='category'>
                  <input type='checkbox' id='4' name='category' value='Environement'/>
                  <label htmlFor='4'>Environement</label>
                </a>
                <a href='#' className='category'>
                  <input type='checkbox' id='5' name='category' value='Racism'/>
                  <label htmlFor='5'>Racism</label>
                  <div className='subcategories'>
                    <a href='#' className='subcategory'>
                      <input type='checkbox' id='11' name='subcategory' value='Test'/>
                      <label htmlFor='11'>Test</label>
                    </a>
                    <a href='#' className='subcategory'>
                      <input type='checkbox' id='22' name='subcategory' value='Crise Climatique'/>
                      <label htmlFor='22'>Crise Climatique</label>
                    </a>
                    <a href='#' className='subcategory'>
                      <input type='checkbox' id='33' name='subcategory' value='Fin du monde'/>
                      <label htmlFor='33'>Fin du monde</label>
                    </a>
                    <a href='#' className='subcategory'>
                      <input type='checkbox' id='44' name='subcategory' value='Sexualité'/>
                      <label htmlFor='44'>Sexualité</label>
                    </a>
                  </div>
                </a>
                <a href='#' className='category'>
                  <input type='checkbox' id='6' name='category' value='Feminisme'/>
                  <label htmlFor='6'>Feminisme</label>
                </a>
                <a href='#' className='category'>
                  <input type='checkbox' id='7' name='category' value='Réalités Autochtones'/>
                  <label htmlFor='7'>Réalités Autochtones</label>
                </a>
              </div>
            </div>
            <div className='by media'>
              <h2>I prefer to see</h2>
              <div className='media types'>
                <div className='media type'>
                  {/* Todo: Only visible with scripts */}
                  <input checked type='checkbox' id='all' name='medias' value='all'/>
                  <label htmlFor='all'>All</label>
                </div>
                <div className='media type'>
                  <input type='checkbox' name='medias' id='videos' value='videos'/>
                  <label htmlFor='videos'>Videos</label>
                </div>
                <div className='media type'>
                  <input type='checkbox' name='medias' id='podcasts' value='podcasts'/>
                  <label htmlFor='podcasts'>Podcasts</label>
                </div>
                <div className='media type'>
                  <input type='checkbox' name='medias' id='test' value='test'/>
                  <label htmlFor='test'>Test</label>
                </div>
                <div className='media type'>
                  <input type='checkbox' name='medias' id='text' value='text'/>
                  <label htmlFor='text'>Text</label>
                </div>
              </div>
            </div>
            <div className='by tags'>
              <h2>I'm interested in</h2>
              <div className='tags'>
                <div className='tag'>
                  <input type='checkbox' id='canada' name='tags' value='canda' />
                  <label htmlFor='canada'>Canada</label>
                </div>
                <div className='tag'>
                  <input id='pensionnats' type='checkbox' name='tags' value='pensionats' />
                  <label htmlFor='pensionnats'>Pensionnats autochtones</label>
                </div>
                <div className='tag'>
                  <input id='climat' type='checkbox' name='tags' value='justice' />
                  <label htmlFor='climat'>Justice climatique</label>
                </div>
                <div className='tag'>
                  <input id='unsure' type='checkbox' name='tags' value='racisme' />
                  <label htmlFor='unsure'>Racisme environnental</label>
                </div>
                <div className='tag'>
                  <input id='inclusivité' type='checkbox' name='tags' value='pratique inclusive' />
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