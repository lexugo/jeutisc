export default function Categories({ categories }) {
    return (
        <ul className="categories">
            { categories.map((category, index) => 
                <li key={index} className="category"><Category {...category} /></li>) }
        </ul>
    )
}

function Category({ label, items }) {
    return (
        <>
            <a href="#">{ label }</a>
            { items?.length > 0 && <Tags tags={items} /> }
        </>
    )
}

function Tags({ tags }) {
    return (
        <ul className="tags">
            { tags.map(tag => <li key={tag}><a href="#">{ tag }</a></li>)}
        </ul>
    )
}