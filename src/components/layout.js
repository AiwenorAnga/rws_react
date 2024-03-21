/**
 * Layout component for Gatsby projects
 *
 * This component provides a reusable layout template for Gatsby website pages, incorporating styling and content areas.
 *
 * @param {string} pageTitle - The title of the current page to be displayed in the header.
 * @param {JSX.Element[]} children - The content to be rendered within the main section of the layout, typically representing individual page components.
 * @returns {JSX.Element} A React element representing the website's overall layout structure.
 *
 * @example
 * ```jsx
 * import Layout from './Layout';
 *
 * const MyPage = () => {
 *   return (
 *     <Layout pageTitle="My Awesome Page">
 *       <p>This is the content of my awesome page.</p>
 *     </Layout>
 *   );
 * };
 * ```
 */
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {container, siteTitle} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`query {site {siteMetadata {title}}}`)
  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout