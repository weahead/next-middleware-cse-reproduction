import { GetStaticProps } from "next"
import Link from "next/link"

import { sampleUserData } from "../sample-data"
import { User } from "../types"

type Props = {
  users: User[]
}

const WithStaticProps = ({ users }: Props) => (
  <div>
    <h1>Users List</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export const getStaticProps: GetStaticProps = async () => {
  const users: User[] = sampleUserData
  return { props: { users } }
}

export default WithStaticProps
