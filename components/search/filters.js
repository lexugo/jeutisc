
import { Configure } from 'react-instantsearch-dom'

export default function Filters({ category, tag }) {
    if (tag)
        return <Configure filters={`category:${category} AND tags:${tag}`} />
    if (category)
        return <Configure filters={`category:${category}`} />
    
    return undefined
}