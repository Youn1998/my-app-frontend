import { Outlet } from 'react-router-dom'

/**
 * 全画面の基底View
 */
const Base: React.FC = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}
export default Base
