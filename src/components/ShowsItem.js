import moviesIcon from '../../public/assets/icon-category-movie.svg'
import tvseriesIcon from '../../public/assets/icon-category-tv.svg'

const ShowsItem = ({
  id,
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
  isTrending,
}) => {
  return (
    <div className="card w-full rounded-none">
      <figure>
        <img
          className="rounded-[12px]"
          src={thumbnail.regular.small}
          alt="Movies"
        />
      </figure>
      <div className="card-body p-0">
        <ul className="flex items-center justify-items-center gap-x-6">
          <li>{year}</li>
          <li className="list-disc">
            <img
              width="15px"
              className={`inline-block opacity-75 mr-2 ${
                category === 'Movie' ? '-mt-1' : '-mt-1.5'
              }`}
              src={category === 'Movie' ? moviesIcon.src : tvseriesIcon.src}
            />
            <span>{category}</span>
          </li>
          <li className="list-disc"> {rating}</li>
        </ul>
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
  )
}

export default ShowsItem
