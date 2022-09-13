import Link from 'next/link'
function Login() {
  return (
    <div className="h-screen w-full bg-darkBlue overflow-x-hidden">
      <div className="container mx-auto px-6">
        <figure className="mt-11">
          <svg
            width="33"
            height="27"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto text-center"
          >
            <path
              d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
              fill="#FC4747"
            />
          </svg>
        </figure>
        <div className="card w-full bg-semiDarkBlue mt-12 ">
          <div className="w-10/12 mx-auto my-6">
            <h2 className="text-pureWhite text-4xl font-Outfit font-extralight mb-6">
              Login
            </h2>
            <input
              type="text"
              placeholder="Email address"
              className="input w-full max-w-xs mt-4 bg-transparent rounded-none caret-tomatoRed focus:text-pureWhite focus:font-extralight focus:outline-none border-x-0 border-t-0 border-b-1 border-greyishBlue focus:border-pureWhite placeholder:font-Outfit placeholder:text-pureWhite/50 placeholder:font-thin"
            />
            <input
              type="text"
              placeholder="Password"
              className="input w-full max-w-xs mt-4 bg-transparent rounded-none caret-tomatoRed focus:text-pureWhite focus:font-extralight focus:outline-none border-x-0 border-t-0 border-b-1 border-greyishBlue focus:border-pureWhite placeholder:font-Outfit placeholder:text-pureWhite/50 placeholder:font-thin "
            />
            <button className="btn bg-tomatoRed w-full normal-case font-Outfit font-extralight mt-10 hover:text-semiDarkBlue hover:bg-pureWhite border-none">
              Login to your account
            </button>
            <p className="text-center text-pureWhite font-Outfit font-extralight mt-4">
              Don't have an account?{' '}
              <span className="text-tomatoRed">
                <Link href="/signup">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
