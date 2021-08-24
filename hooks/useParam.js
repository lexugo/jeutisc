import { useRouter } from "next/router"

export default function useParam(parameter) {
    const { query, pathname, replace } = useRouter()

    function toUrl(value) {
        if (value)
            return { pathname, query: { ...query, [parameter]: value }} 
        
        const { [parameter]: _, ...params } = query // Remove param form url when undefined
        return { pathname, query: params }
    }

    function set(value) {
        replace(toUrl(value), undefined, { shallow: true })
    }

    return [query[parameter], set]
}