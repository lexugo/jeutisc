import { connectRefinementList, connectHierarchicalMenu, connectMenu } from 'react-instantsearch-dom'

export const refined = (component, attribute) => props =>
	connectRefinementList(component)({ attribute, ...props })

export const menu = (component, attribute) => props =>
	connectMenu(component)({ attribute, ...props })

export const hierarchical = (component, attributes) => props =>
	connectHierarchicalMenu(component)({ attributes, ...props})
