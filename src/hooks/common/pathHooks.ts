import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * pathNameの取得
 */
export const usePathName = (): string => {
    const location = useLocation()
    return useMemo(() => location.pathname, [location.pathname])
}

/**
 * pathNameを分割して取得
 */
export const usePathNameList = (): string[] => {
    const pathName = usePathName()
    return useMemo(() => pathName.split('/').filter((x) => x !== ''), [pathName])
}
