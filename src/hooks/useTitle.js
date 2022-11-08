import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Unicorn eMedicine`;
    }, [title])
}

export default useTitle;