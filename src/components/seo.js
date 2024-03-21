/**
 * SEO component for Gatsby projects
 *
 * This component dynamically generates the document title for each page, combining the provided page title with the site's overall title.
 *
 * @param {string} title - The title of the current page to be displayed in the document title.
 * @returns {JSX.Element} A React element representing the `<title>` tag with the generated document title.
 *
 * @example
 * ```jsx
 * import Seo from './Seo';
 *
 * const MyPage = () => {
 *   return (
 *     <div>
 *       <h1>My Awesome Page</h1>
 *       <Seo title="My Awesome Page" />
 *     </div>
 *   );
 * };
 * ```
 */
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>{title} | {data.site.siteMetadata.title}</title>
  )
}

export default Seo