import { server } from '../../config'
import { useState } from 'react'
import useSWR from 'swr'
import Spinner from '../../src/components/Spinner'
import SearchBox from '../../src/components/SearchBox'
import Shows from '../../src/components/Shows'

const TVSeries = (props) => {
  const [shows, setShows] = useState(props.shows)
  const [searchText, setSearchText] = useState('')

  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR('/api/staticdata', fetcher)

  if (error) {
    return <div>failed to load</div>
  }

  if (!data && !shows) {
    return <Spinner />
  }

  const TVSeriesList = shows.filter((show) => show.category === 'TV Series')

  const filterTVSeriesList = TVSeriesList.filter((show) => {
    return show.title.toLowerCase().includes(searchText.toLowerCase())
  })

  return (
    <div className="lg:w-[90%] lg:absolute lg:right-0">
      <SearchBox searchText={searchText} setSearchText={setSearchText} />
      <section className="container mx-auto px-4 pb-10">
        <h2 className="text-xl md:text-2xl lg:text-2xl font-Outfit font-extralight text-white my-6">
          {searchText
            ? `Found ${filterTVSeriesList.length} result${
                filterTVSeriesList.length <= 1 ? '' : 's'
              } for "${searchText}"`
            : 'TV Series'}
        </h2>
        <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filterTVSeriesList.map((series, idx) => {
            return (
              <Shows
                key={idx}
                id={idx}
                title={series.title}
                thumbnail={series.thumbnail}
                year={series.year}
                category={series.category}
                rating={series.rating}
                isBookmarked={series.isBookmarked}
                isTrending={series.isTrending}
              />
            )
          })}
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

export default TVSeries
