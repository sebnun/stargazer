import { useMemo } from "react"
import fetchWrapper from "../utils/fetchWrapper"
import useData from "../utils/useData"

const Repo =  ({ repo }) => {
     const repoJSON =  useData(repo, () => fetchWrapper(repo))
    
    // console.log(repoJSON)

    console.log('ewpo')
   
   return <div>{''}</div>
}
  
  export default Repo
  