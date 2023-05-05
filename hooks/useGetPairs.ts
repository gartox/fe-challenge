import { ContextInstance } from "@/context"
import { getPairs } from "@/utils/getPairs"
import { useContext, useEffect } from "react"


export const useGetPairs = () =>{

    const {state:{pairs}, actions:{setPairs} } = useContext(ContextInstance)

    useEffect(()=>{

      if(pairs.length === 0){
        getPairs().then( fetchedPairs => {setPairs(fetchedPairs)});

      }

    },[])

    return pairs;
}