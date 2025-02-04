import Hero from "../components/Hero"
import { customFetch } from "../utils"

const url = "/products?featured=true"

export const loader = async () => {
  const response = await customFetch.get(url)
  console.log(response)
  const products = response.data.data
  return { products }
}

const Landing = () => {
  return (
    <div>
      <Hero />
    </div>
  )
}

export default Landing
