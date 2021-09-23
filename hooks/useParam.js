import { useRouter } from "next/router"

export default function useParam(name, value) {
    const { query, pathname, replace } = useRouter()

    function toUrl(value) {
        if (value)
            return { pathname, query: { ...query, [name]: value }}
        
        const { [name]: _, ...params } = query // Remove param form url when undefined
        return { pathname, query: params }
    }

    function set(value) {
        return replace(toUrl(value), undefined, { shallow: true })
    }

    return [query[name], set]
}
