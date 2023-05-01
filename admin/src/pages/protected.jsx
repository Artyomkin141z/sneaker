import { Router } from "next/router";
import { useEffect } from "react";

const { useSession } = require("next-auth/react")

const Protected = () => {
    const {status, data} = useSession();

    useEffect(() => {
        if(status === 'unauthenticated') Router.replace('auth/signin')
    }, [status])


    if(status === 'authenticated'){
        console.log(data.user)
        return <div>
            {data.user.name}
        </div>
    }
    return <div>

    </div>
}

export default Protected;