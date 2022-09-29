import { server } from '../../config'
import { useState } from 'react'
import useSWR from 'swr'
import Spinner from '../../src/components/Spinner'
import SearchBox from '../../src/components/SearchBox'
import Shows from '../../src/components/Shows'

const Movies = (props) => {
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

  const movieList = shows.filter((show) => show.category === 'Movie')

  const filterMovieList = movieList.filter((show) => {
    return show.title.toLowerCase().includes(searchText.toLowerCase())
  })

  return (
    <>
      <SearchBox searchText={searchText} setSearchText={setSearchText} />
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-light">
          {searchText
            ? `Found ${filterMovieList.length} result${
                filterMovieList.length <= 1 ? '' : 's'
              } for "${searchText}"`
            : 'Movies'}
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filterMovieList.map((movie, idx) => {
            return (
              <Shows
                key={idx}
                id={idx}
                title={movie.title}
                thumbnail={movie.thumbnail}
                year={movie.year}
                category={movie.category}
                rating={movie.rating}
                isBookmarked={movie.isBookmarked}
                isTrending={movie.isTrending}
              />
            )
          })}
        </div>
      </section>
    </>
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

export default Movies
