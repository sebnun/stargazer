// Poor man's cache, and Suspense compatible interface 
// based on https://github.com/vercel/next-react-server-components/blob/main/lib/use-data.js 
const cache = {}

export default function useData(key, fetcher) {
    console.log('hjg')
    // if (!cache[key]) {

    //     console.log(cache)
    //   let data
       let promise
    //   cache[key] = () => {
    //     if (data !== undefined) return data
        if (!promise) promise = fetcher().then((r) => (data = r))
        throw promise
    //   }
    // }
    // return cache[key]()
}