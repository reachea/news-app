import {
  renderText,
  renderImage,
  renderList,
  renderQuote,
  renderTextBlock,
  renderTitle,
  renderSource,
  renderTable,
  renderEmbed,
  renderLink,
} from "../functions/htm_safe";

interface Props {
  data: {
    blocks: any;
  };
}

const PageBody = (props: Props) => {
  const jsonA = props?.data?.blocks;

  const renderFunc: any = {
    paragraph: renderText,
    image: renderImage,
    list: renderList,
    "text-block": renderTextBlock,
    quote: renderQuote,
    header: renderTitle,
    source: renderSource,
    table: renderTable,
    embed: renderEmbed,
    link: renderLink,
  };

  return (
    <>
      <div className="page-description">
        {jsonA?.map((jsonA: any, idx: number) => {
          if (renderFunc[jsonA.type] === undefined) return null;
          return renderFunc[jsonA.type](jsonA, idx);
        })}
      </div>
    </>
  );
};

export default PageBody;
