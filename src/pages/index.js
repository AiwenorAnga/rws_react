/**
 * IndexPage component for the website homepage
 *
 * This component renders the homepage layout, including SEO optimization and an Articles component.
 *
 * @returns {JSX.Element} A React element representing the website's homepage.
 *
 * @see [Layout documentation](./src/components/layout.md) for details about the Layout component used for the overall website structure.
 * @see [Seo documentation](./src/components/seo.md) for details about the Seo component used for search engine optimization.
 * @see [Articles documentation](./src/components/articles.md) for details about the Articles component used for searching and displaying articles.
 */
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Articles from "../components/articles";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">  
      <div>        
        <Articles />
      </div>              
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage