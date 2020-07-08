import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Listing from "../components/listing"
import SEO from "../components/seo"

import indexStyles from "./index.module.css"

export const query = graphql`
  query allJobs {
    jobs {
      jobs {
        id
        title
        tags {
          name
        }
        remotes {
          name
        }
        isFeatured
        applyUrl
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div className={indexStyles.jobListings}>
        {data.jobs.jobs.map(job => (
          <Listing key={job.id} {...job} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
