import { server } from '../../config'
import { useState } from 'react'
import moviesIcon from '../../public/assets/icon-category-movie.svg'

const Movies = (props) => {
  const [shows, setShows] = useState(props.shows)

  const filterForMovie = shows.filter((show) => show.category === 'Movie')

  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filterForMovie.map((movie, idx) => {
          return (
            <div key={idx} className="card w-full rounded-none">
              <figure>
                <img
                  className="rounded-[12px]"
                  src={movie.thumbnail.regular.small}
                  alt="Movies"
                />
              </figure>
              <div className="card-body p-0">
                <ul className="flex items-center justify-items-center gap-x-6">
                  <li>{movie.year}</li>
                  <li className="list-disc">
                    <img
                      width="15px"
                      className="inline-block opacity-75 mr-2 -mt-1"
                      src={moviesIcon.src}
                    />
                    <span>{movie.category}</span>
                  </li>
                  <li className="list-disc">{movie.rating}</li>
                </ul>
                <h2 className="card-title">{movie.title}</h2>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
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
