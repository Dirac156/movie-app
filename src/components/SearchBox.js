const SearchBox = ({ searchText, setSearchText }) => {
  return (
    <section className="container mx-auto px-4 my-8">
      <form>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-1 lg:pl-0 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 md:w-7 md:h-7 text-white dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type="text"
            className="block lg:pl-11 md:pl-12 pl-11 w-[78%] text-base bg-transparent text-white border-0 outline-none caret-tomatoRed placeholder:font-Outfit placeholder:text-white/40 font-extralight placeholder:text-[16px] placeholder:md:text-xl"
            placeholder="Search for movies or TV series"
          />
        </div>
      </form>
    </section>
  )
}

export default SearchBox
