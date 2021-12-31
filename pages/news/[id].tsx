import { gql } from "@apollo/client";
import React from "react";
import { client } from "../../src/apollo";
import NewDetail from "../../src/screens/NewDetail/NewDetail";

const NEWS_DETAIL = gql`
  query publicNewsDetail($id: Int!) {
    publicNewsDetail(id: $id) {
      id
      title
      description
      thumbnail
      created_at
      status
      category {
        id
        name
      }
    }
  }
`;

export default function NewsScreen({ news }: any) {
  console.log(news);

  return (
    <>
      <NewDetail news={news} />
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  const { id } = params;

  console.log(id);

  const { data } = await client.query({
    query: NEWS_DETAIL,
    variables: {
      id: Number(id),
    },
    fetchPolicy: "no-cache",
  });

  return {
    props: {
      news: data.publicNewsDetail,
    },
  };
}
