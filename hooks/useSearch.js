import { useContext } from 'react'
import { useRouter } from "next/router"

import Context from 'components/search/context'

export const useCategories = () => useContext(Context).categories
export const useSubcategories = () => useContext(Context).subcategories

export function useSearchState() {
	const { query: { q: query, ...params }, pathname, replace, push } = useRouter()

	const refinements = Object.keys(params)
		.filter(name => params[name])
		.reduce((refinements, name) => ({ ...refinements, [name]: params[name].split(' ') }), {})

	const searchState = {
		// query,
		refinementList: refinements
	}

	function setSearchState(searchState) {
		console.log(searchState)
		const refinements = searchState.refinementList
			? Object.keys(searchState.refinementList)
				.reduce((refinements, name) => ({ ...refinements, [name]: searchState.refinementList[name].join(' ') }), {})
			: {}
		const url = {
			pathname,
			query: {
				// q: searchState.query,
				...refinements
			}
		}

		return replace(url, undefined, { shallow: true })
	}

	return [searchState, setSearchState]
}
