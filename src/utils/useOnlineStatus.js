import {useEffect, useState} from "react"

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)

    //chek the useer is online or not
    useEffect(() => {
        window.addEventListener("offline", function(){
            setOnlineStatus(false)
        });

        window.addEventListener("online", function(){
            setOnlineStatus(true)
        })


    }, [])


    //retun the status
    return onlineStatus
}

export default useOnlineStatus