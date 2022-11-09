import { useRouter } from 'next/router'
import React from 'react'

const UserDetail = () => {
    const router = useRouter()
    const {id} = router.query

    return (
        <div> UserDetail {id}</div>
    )
}

export default UserDetail