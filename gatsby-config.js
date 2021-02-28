import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export default {
  siteMetadata: {
    title: 'Phil Sinatra',
    siteUrl: 'https://philsinatra.com',
    description:
      'Full stack developer, digital media engineer, instructor & author!',
    twitter: '@philsinatra',
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'about',
        link: '/about',
      },
      // {
      //   name: 'work',
      //   link: '/work',
      // },
      {
        name: 'courses',
        link: '/courses',
      },
      {
        name: 'design',
        link: '/design',
      },
      {
        name: 'author',
        link: '/author',
      },
      // {
      //   name: 'contact',
      //   link: '/contact',
      // },
    ],
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-styled-components'],
}
