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
    <div className="card w-full bg-base-100 shadow-xl image-full">
      <figure>
        <img src={thumbnail.regular.small} alt="Shoes" />
      </figure>
      <div className="card-body">
        {/* <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
  )
}

export default ShowsItem
