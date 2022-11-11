import { GetStaticProps } from "next";
import { getUsers } from "../lib/users";

export default function Home() {
  return <h1>Hello world</h1>;
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await getUsers();

  console.log(users)

  return {
    props: {
      users,
    },
    revalidate: 5,
  };
};
