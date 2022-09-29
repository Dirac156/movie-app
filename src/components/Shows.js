import moviesIcon from '../../public/assets/icon-category-movie.svg'
import tvseriesIcon from '../../public/assets/icon-category-tv.svg'

const Shows = (props) => {
  return (
    <div className="card w-full rounded-none">
      <figure>
        <img
          className="rounded-[12px]"
          src={props.thumbnail.regular.small}
          alt="Movies"
        />
      </figure>
      <div className="card-body p-0">
        <ul className="flex items-center justify-items-center gap-x-6">
          <li>{props.year}</li>
          <li className="list-disc">
            <img
              width="15px"
              className={`inline-block opacity-75 mr-2 ${
                props.category === 'Movie' ? '-mt-1' : '-mt-1.5'
              }`}
              src={
                props.category === 'Movie' ? moviesIcon.src : tvseriesIcon.src
              }
            />
            <span>{props.category}</span>
          </li>
          <li className="list-disc">{props.rating}</li>
        </ul>
        <h2 className="card-title">{props.title}</h2>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
  )
}

export default Shows
