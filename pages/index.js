import { server } from '../config'
import { useState } from 'react'
import useSWR from 'swr'
import Nav from '../src/components/Nav'
import Shows from '../src/components/Shows'
import Spinner from '../src/components/Spinner'

export default function Home(props) {
  const [shows, setShows] = useState(props.shows)

  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR('/api/staticdata', fetcher)

  if (error) {
    return <div>failed to load</div>
  }

  if (!data && !shows) {
    return <Spinner />
  }

  return (
    <div data-theme="dark">
      <Nav />
      <section className="container mx-auto px-4">
        <h1>Recommended for you</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <Shows shows={shows} />
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/staticdata`)
  const data = await res.json()
  const objectData = JSON.parse(data)

  return {
    props: {
      shows: objectData,
    },
  }
}
