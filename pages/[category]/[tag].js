import { getFacets } from 'services/algolia'

import Search from 'components/search'

export default function Tag({ category, tag }) {
    return (
        <div>
            <h1>{ category } / { tag }</h1>
            <Search category={category} tag={tag} />
        </div>
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
