import ShowsItem from './ShowsItem'
const Shows = ({ shows }) => {
  return (
    <>
      {shows.map((show, idx) => {
        const {
          title,
          thumbnail,
          year,
          category,
          rating,
          isBookmarked,
          isTrending,
        } = show

        return (
          <ShowsItem
            key={idx}
            id={idx}
            title={title}
            thumbnail={thumbnail}
            year={year}
            category={category}
            rating={rating}
            isBookmarked={isBookmarked}
            isTrending={isTrending}
          />
        )
      })}
    </>
  )
}

export default Shows
