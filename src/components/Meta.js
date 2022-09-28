import Head from 'next/head'
import logo from '../../public/assets/logo.svg'
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link rel="icon" href={logo.src} />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Movie App',
}

export default Meta
