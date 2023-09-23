import 'styles/App.css'

import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Base from 'BaseView'
import Root from 'components/pages/default'
import { PagePathValue } from 'constants/path'

const router = createBrowserRouter([
    {
        path: PagePathValue.BASE,
        element: <Base />,
        children: [
            {
                path: PagePathValue.ROOT,
                element: <Root />,
            },
        ],
    },
])

const App: React.FC = () => {
    return <RouterProvider router={router} />
}
export default App
