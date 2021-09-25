import { useContext } from 'react'

import Context from 'components/search/context'

export const useCategories = () => useContext(Context).categories
export const useSubcategories = () => useContext(Context).subcategories
