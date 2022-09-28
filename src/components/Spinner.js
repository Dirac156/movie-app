import spinner from '../../public/assets/Spinner.svg'

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        className="text-center mx-auto"
        width={180}
        src={spinner.src}
        alt="loading..."
      />
    </div>
  )
}

export default Spinner
