import moviesIcon from '../../public/assets/icon-category-movie.svg'
import tvseriesIcon from '../../public/assets/icon-category-tv.svg'

const Shows = (props) => {
  return (
    <div className="card w-full lg:w-[96%] rounded-none">
      <figure>
        <img
          className="rounded-[12px]"
          src={props.thumbnail.regular.small}
          alt="Movies"
        />
      </figure>
      <div className="card-body p-0">
        <ul className="flex items-center justify-items-center gap-x-6 mt-3">
          <li className="text-xs md:text-[13px] font-Outfit font-light text-white/75">
            {props.year}
          </li>
          <li className="list-disc text-xs md:text-[13px] font-Outfit font-light text-white/75">
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
          <li className="list-disc text-xs md:text-[13px] font-Outfit font-light text-white/75">
            {props.rating}
          </li>
        </ul>
        <h2 className="card-title text-sm md:text-lg font-Outfit font-light text-white">
          {props.title}
        </h2>
        <div className="absolute top-3 right-4 card-actions  justify-end">
          <button className="flex items-center justify-center  w-[30px] h-[30px] bg-darkBlue/50 border-0 rounded-full">
            {props.isBookmarked ? (
              <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                  stroke="#FFF"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            ) : (
              <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                  fill="#FFF"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Shows
