export default function Hit({ title, reference, description }) {
    // Todo: handle other reference
    // Todo: shorten long links rather than wrap

    return (
        <div className="ressource">
            <h3 className="title"><Link href={reference}>{ title }</Link></h3>
            { reference && <span className="reference">Site: <Link href={reference}>{ reference }</Link></span> }
            { description && <p className="description">{ description }</p>}
        </div>
    )
}

function Link({ href, children }) {
    return <a href={href} target="_blank">{ children }</a>
}