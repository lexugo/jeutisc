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
            <h2>{ label }</h2>
            { items?.length > 0 && <Tags tags={items} /> }
        </>
    )
}

function Tags({ tags }) {
    return (
        <ul>
            { tags.map(tag => <li key={tag}>{ tag }</li>)}
        </ul>
    )
}