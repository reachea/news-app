import React from "react";
import CategoryScreen from "../../src/screens/CategoryScreen/CategoryScreen";

export default function CategoryPage(props: any) {
  return (
    <>
      <CategoryScreen id={props.id} />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { params } = context;

  return {
    props: {
      slug: params.slug,
      id: context.query.id,
    },
  };
}
