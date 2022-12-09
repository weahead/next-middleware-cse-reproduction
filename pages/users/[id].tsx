import { GetStaticProps, GetStaticPaths } from "next"
import { User } from "../../types"
import { sampleUserData } from "../../sample-data"

type Props = {
  user: User
}

const StaticPropsDetail = ({ user }: Props) => {
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h2>Id: {user.id}</h2>
    </div>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  /**
   * Must have fallback and return an empty array for the bug to appear
   * Prebuild pages are not affected
   */
  return { paths: [], fallback: "blocking" }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  const user = sampleUserData.find((data) => data.id === Number(id))
  return { props: { user }, revalidate: 5 }
}
