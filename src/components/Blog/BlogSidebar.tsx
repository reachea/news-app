import React, { Component } from 'react';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';

const QUERY = gql`
    query blogSidebarQuery($filter: FilterNews, $pagination: PaginationInput){
        publicNewsCategoryList{
            id
            name
        }

        publicNewsList(filter: $filter, pagination: $pagination){
            id
            title
            thumbnail
            created_at
        }
    }
`

export function BlogSidebar() {
    const { data, loading } = useQuery(QUERY, {
        variables: {
            filter: {
                status: "PUBLISHED"
            },
            pagination: {
                page: 0,
                size: 4
            }
        }
    });
    if (loading || !data) return <></>
    return (
        <aside className="widget-area mt-5" id="secondary" style={{ position: 'sticky', top: "20px", marginBottom: 25 }}>
            {/* Search form */}
            {/* <div className="widget widget_search">
                <form className="search-form">
                    <input type="search" className="search-field" placeholder="Search..." />
                    <button type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div> */}

            {/* Recent Posts */}
            <div className="widget widget_zash_posts_thumb">
                <h3 className="widget-title" style={{ lineHeight: "40px" }}>ព័ត៌មានថ្មីៗ</h3>
                {
                    data.publicNewsList.map((news) => {
                        return (
                            <article className="item">
                                <Link href={`/news/${news.id}`}>
                                    <a className="thumb">
                                        <span className="fullimage cover bg1" role="img" style={{ background: `url(${news.thumbnail})` }}></span>
                                    </a>
                                </Link>

                                <div className="info">
                                    <h4 className="title usmall">
                                        <Link href={`/news/${news.id}`}>
                                            <a className="latestNewsTitle">{news.title}</a>
                                        </Link>
                                    </h4>
                                    <time className="2020-06-30" style={{ fontSize: 12 }}>{news.created_at.replaceAll('/', '-')}</time>
                                </div>
                            </article>
                        )
                    })
                }


            </div>

            {/* Categories */}
            <div className="widget widget_categories">
                <h3 className="widget-title">ប្រភេទព័ត៌មាន</h3>

                <ul>
                    {
                        data.publicNewsCategoryList.map((category) => {
                            return (
                                <li>
                                    <Link href={`/category/${category.id}`}>
                                        <a>
                                            {category.name}
                                            <span className="post-count"></span>
                                        </a>
                                    </Link>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>

            {/* Tags */}
            {/* <div className="widget widget_tag_cloud">
                <h3 className="widget-title">បណ្តាញសង្គម</h3>
                <div className="fb-page" data-href="https://www.facebook.com/moc.gov.kh" data-tabs="timeline" data-width="500" data-height="400" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/moc.gov.kh" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/moc.gov.kh">ក្រសួងពាណិជ្ជកម្ម Ministry of Commerce</a></blockquote></div>
            </div> */}
        </aside>
    );
}

