import axios from "axios"

const getData = async () => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return result.data
}

export {
  getData,
}