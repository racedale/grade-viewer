import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      images: allS3ImageAsset {
        edges {
          node {
            Key
            childImageSharp {
              sizes(maxWidth: 600) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  `)

  // export const photographyQuery = graphql`
  //   query {
  //     allS3ImageAsset {
  //       edges {
  //         node {
  //           Key
  //         }
  //       }
  //     }
  //   }
  // `
  // console.log("photographyQuery", typeof photographyQuery, photographyQuery)
  console.log("images", typeof data, data)

  const image = data.images.edges.find(n => {
    console.log(n)
    return n.node.Key.includes(props.filename)
  })

  if (!image) {
    return null
  }

  const imageSizes = image.node.childImageSharp.sizes
  return <Img alt={props.alt} fluid={imageSizes} />
}
export default Image
