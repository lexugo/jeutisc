import { getFacets } from 'services/algolia'

import InstantSearch from 'components/search'

export default function Tag({ category, tag }) {
    return (
        <main className="search">
            <InstantSearch category={category} tag={tag} />
        </main>
    )
}

export async function getStaticProps({ params: { category, tag }}) {
    return {
        props: { category, tag }
    }
}


export async function getStaticPaths() {
    const categories = await getFacets()
    const paths = categories.reduce((paths, category) => 
        [...paths, ...category.items.map(tag => ({ params: { category: category.label, tag }}))], [])

    // Todo: handle typos as redirect
    // Todo: handle underscore instead of space
    return { paths, fallback: false } 
}
