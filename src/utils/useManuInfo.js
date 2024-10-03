import {useEffect} from "react"
import { MANU_URL } from "../utils/Consten"
import { useState } from "react";


const useManuInfo = (resid) => {

    const [resManuInfo, setResManuInfo] = useState(null)

    useEffect(() => {
        fatchManuData()
    },[]);

    const fatchManuData = async () => {
        const data = await fetch(MANU_URL + resid)
        const json = await data.json()
        setResManuInfo(json)
    }
    return resManuInfo
}

export default useManuInfo