
import { Configure } from 'react-instantsearch-dom'

export default function Filters({ category, tag }) {
    return (
        <>
            <Config category={category} tag={tag} />
            <nav className="filters">
                <a href="/Environnement" className='selected'>Environnement</a>
                <a href="/Environnement">Antiracisme</a>
                <a href="/Environnement">Réalités Autochtones</a>
                <a href="/Environnement">Sexuailté</a>
            </nav>
        </>
    )
}

function Config({ category, tag }) {
    if (tag)
        return <Configure filters={`category:"${category}" AND tags:"${tag}"`} />
    if (category)
        return <Configure filters={`category:"${category}"`} />
    
    return null
}