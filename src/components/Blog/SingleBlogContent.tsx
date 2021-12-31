import React from "react";
import PageBody from "../PageBody";
import { SEO } from "../SEO";
import { BlogSidebar } from "./BlogSidebar";
import Link from "next/link";
import { FacebookShareButton } from "react-share";

type PostDetailProps = {
  news: any;
};

function SingleBlogContent({ news }: PostDetailProps) {
  const getDate = news?.created_at?.split("/");
  if (news.status == "REVERSION") {
    process.browser && window.location.replace("/404");
  }
  return (
    <>
      <SEO
        title={news.title}
        description={news.summary}
        image={news.thumbnail}
      />
        <section className="blog-details-area pt-4">
          <div className="container">
            <div className="row">
                <div className="blog-details-desc">
                  <h2 className="title-detail mt-5 mobile-title-detail">
                    {news.title}
                  </h2>
                  <div className="dataAndCategory">
                    <i className="fa fa-calendar"></i> ថ្ងៃផ្សព្វផ្សាយ:{" "}
                    <strong>
                      {" "}
                      ថ្ងៃទី{getDate[0]} ខែ{getDate[1]} ឆ្នាំ{getDate[2]}
                    </strong>{" "}
                    - ប្រភេទព័ត៌មាន:{" "}
                    <strong>
                      <Link href={`/category/${news?.category?.id}`}>
                        <a>{news?.category?.name}</a>
                      </Link>
                    </strong>
                  </div>
                  <hr />
                  <div className="share-to-social">
                    ចែករំលែក:
                    <FacebookShareButton
                      url={`https://moc.gov.kh/news/${news.id}`}
                      quote={news.title}
                    >
                      <img
                        src="/facebook.png"
                        width="25"
                        style={{ marginLeft: 10 }}
                      />
                    </FacebookShareButton>
                  </div>
                  <div className="article-image">
                    <img
                      src={news.thumbnail}
                      alt="image"
                      style={{ width: "100%" }}
                    />
                  </div>

                  {/* Article details content */}
                  <div className="article-content">
                    <div
                      className="entry-meta"
                      style={{
                        marginBottom: "20px",
                        paddingLeft: 50,
                        paddingRight: 50,
                      }}
                    ></div>
                    <p className="summary-detail"> </p>

                    <PageBody data={news.description} />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

export default SingleBlogContent;
