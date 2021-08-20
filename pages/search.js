import SearchBar from 'components/search'

export default function Search({ query }) {
    return (
      <main className="search">
        <header>
          <div className="logo">
            <h1><a href="/">Jeutisc</a></h1>
          </div>
          <div className="search">
            <input type="search" name="q" id="search" autoComplete="off" />
          </div>
          <nav className="filters">
            <a href="/Environnement" className='selected'>Environnement</a>
            <a href="/Environnement">Antiracisme</a>
            <a href="/Environnement">Réalités Autochtones</a>
            <a href="/Environnement">Sexuailté</a>
          </nav>
        </header>
        <div className="ressources">
          <div className="ressource">
            <h3><a href="https://fast.com">Fast.com: Internet Speed Test</a></h3>
            <span className="reference">Pdf: <a href="https://fast.com">https://fast.com</a></span> 
            <p className="description">
              Example using @test(expected) Let's understand exception testing by creating a Java class with a method throwing an exception. You will handle it and test it in a test class. Consider JUnitMessage.java having a method which simply do a mathematical operation based on input received by the user.
            </p>
          </div>
        </div>
      </main>
    )
}

export async function getServerSideProps({ query: { q: query }}) {
    return {
      props: { query: query ?? "" }, // will be passed to the page component as props
    }
  }