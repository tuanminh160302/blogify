import { useEffect, useState } from "react"

const useCheckMobile = () => {
    const [isMobile, setIsMobile] = useState(null)

    useEffect(() => {
        window.innerWidth < 1200 ? setIsMobile(true) : setIsMobile(false)
        window.addEventListener('resize', () => {
            window.innerWidth < 1200 ? setIsMobile(true) : setIsMobile(false)
        })
    }, [])

    return isMobile
}

export default useCheckMobile