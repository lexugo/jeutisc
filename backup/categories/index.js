import Link from 'components/link' // Todo: replace spaces with underscores

export default function Categories({ categories }) {
    return (
        <ul className="categories">
            { categories.map((category, index) => 
                <li key={index} className="category"><Category {...category} /></li>) }
        </ul>
    )
}

function Category({ label, items }) {
    const tags = items.map(tag => <li key={tag}><Link href={`${label}/${tag}`}>{ tag }</Link></li>)
    return (
        <>
            <Link href={label}>{ label }</Link>
            <ul className="tags"></ul>
            { items?.length > 0 && <ul className="tags">{ tags }</ul> }
        </>
    )
}
