import { createContext } from 'react'

const Context = createContext({})

export default Context

export const searchable = Component => props => {
	return (
		<Context.Provider value={props}>
			<Component {...props} />
		</Context.Provider>
	)
}
