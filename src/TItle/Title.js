import { useEffect } from "react"

const usertitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Toy Talks`;
    },[title])
}

export default usertitle;