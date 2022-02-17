const fetchWrapper = async (repo) => {
    const endpoint = `https://api.github.com/repos/${repo}`
    const res = await fetch(endpoint)

    if (res.status !== 200) {
      throw new Error(`Error when getting data, status ${res.status}`)
    }

    return res.json() // Promise<any>
  }

  export default fetchWrapper

