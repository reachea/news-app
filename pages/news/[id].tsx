import React from "react";
import NewDetail from "../../src/screens/NewDetail/NewDetail";

export default function NewsScreen(props: any) {
  return (
    <>
      <NewDetail />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { params } = context;
  return {
    props: {
      id: params.id,
    },
  };
}
