import React from "react"

import Layout from "../components/layout"
import Login from "../components/login"
import Image from "../components/image"
import SEO from "../components/seo"

import { isLoggedIn } from "../services/auth"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      {!isLoggedIn() && <Login />}
      {/* TODO: get images from s3 */}
      {/* TODO: display date and pull latest day */}

      {isLoggedIn() && (
        <div
          style={{
            display: `grid`,
            gridTemplateColumns: `auto auto auto`,
            columnGap: `0.15rem`,
          }}
        >
          <Image filename="mia.png" />
          <Image filename="aaron.png" />
          <Image filename="lucas.png" />
        </div>
      )}
    </Layout>
  )
}

export default IndexPage
