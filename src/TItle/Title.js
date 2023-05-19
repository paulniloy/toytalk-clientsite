import { useEffect } from "react"

const usertitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Toy Talk`;
    },[title])
}

export default usertitle;