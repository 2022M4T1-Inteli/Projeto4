import UserProvider from '@/context/User'
import React from 'react'

function withContexts(Component) {
    return props => (
        <UserProvider>
            <Component {...props} />
        </UserProvider>
    )
}

export default withContexts
