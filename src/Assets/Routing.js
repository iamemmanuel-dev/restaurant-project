const parseRequestUrl = () => {
  const url = document.location.hash
  const request = url.split('/')
  return {
    resource: request[1],
    slug: [2],
  }
}

export default parseRequestUrl
