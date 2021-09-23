import { connectRefinementList } from 'react-instantsearch-dom'

export const refined = (component, facet) => props => connectRefinementList(component)({ attribute: facet, ...props })
