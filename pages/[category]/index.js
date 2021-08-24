import { getCategories, getTags } from 'services/algolia'

import InstantSearch from 'components/search'

export default function Category({ category, tags }) {
    return (
        <main className="search">
            <InstantSearch category={category} />
        </main>
    )
}

export async function getStaticProps({ params: { category }}) {
    const tags = await getTags(category)

    return {
        props: { category, tags }
    }
}


export async function getStaticPaths() {
    const categories = await getCategories()
    const paths = categories.map(category => ({ params: { category }}))

    // Todo: handle typos as redirect
    // Todo: handle underscore instead of space
    return { paths, fallback: false } 
}
