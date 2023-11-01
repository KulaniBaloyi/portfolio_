
const Page = ({params}) => {
  return (
    <div className="h-screen grid place-content-center">Page for {decodeURIComponent(params.slug)}</div>
  )
}

export default Page