import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateFunction = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=94565befd4ef427b92d8ced9a40eed8a&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);

        let parsedData = await data.json()

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

    }

    useEffect(() => {
        updateFunction();
    }, [])


    const handlePrevClick = async () => {
        setPage(page - 1)
        updateFunction();
    }

    const handleNextClick = async () => {
        setPage(page + 1)
        updateFunction()
    }

    // const fetchMoreData = async () => {
    //     setPage(page + 1)
    //     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     setArticles(articles.concat(parsedData.articles))
    //     setTotalResults(parsedData.totalResults)
    // };

    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px' }}>DailyNews - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}

            <div className="container">

                <div className="row">
                    {!loading && articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>

            </div>
            <div className="container d-flex justify-content-between my-6" style={{margin: '35px 70px' }}>
                <button disabled={page <= 1} type="button" className="btn btn-primary mx-6" onClick={handlePrevClick}> &larr; Previous</button>

                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-primary mx-6" onClick={handleNextClick}>Next &rarr;</button>
            </div>
        </>
    )

}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News






// import React, { useEffect, useState } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'


// const News = (props) => {

//     const [articles, setArticles] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [page, setPage] = useState(1);
//     const [totalResults, setTotalResults] = useState(0);

//     // document.title =`${capitalizeFunc( category)} - Headlines`

//     const capitalizeFunc = (string) => {
//         let x = string.charAt(0).toUpperCase()
//         let y = string.slice(1, string.length)
//         return x + y;
//     }

//     const updateFunction = async () => {
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=94565befd4ef427b92d8ced9a40eed8a&page=${page}&pageSize=${props.pageSize}`;

//         setLoading(true);
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         console.log(parsedData);
//         setArticles(parsedData.articles);
//         setTotalResults(parsedData.totalResults);
//         setLoading(false);

//         useEffect(() => {
//             updateFunction();
//         }, [])


//         const handlePrevClick = async () => {
//             setPage(page - 1)
//             updateFunction();
//         }

//         const handleNextClick = async () => {
//             setPage(page + 1)
//             updateFunction();
//         }

//         // const fetchMoreData = async ()=>{
//         //     let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=94565befd4ef427b92d8ced9a40eed8a&page=${page}&pageSize=${ props.pageSize}`;
//         //     let data = await fetch(url);
//         //     let parsedData = await data.json();
//         //     setArticles(articles.concat(parsedData.articles))
//         //     setTotalResults(parsedData.totalResults)
//         // }



//         return (
//             <>
//                 <h1 className="text-center">NewsAPP - Top {(capitalizeFunc(props.category))} Headlines</h1>
//                 {loading && <Spinner />}



//                 <div className="container">

//                     <div className="row">
//                         {articles.map((element) => {
//                             return <div className="col-md-4" key={element.url}>
//                                 <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                             </div>
//                         })}
//                     </div>
//                 </div>

//                 <div className="container d-flex justify-content-between my-6">
//                     <button disabled={page <= 1} type="button" className="btn btn-primary mx-6" onClick={handlePrevClick}> &larr; Previous</button>

//                     <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-primary mx-6" onClick={handleNextClick}>Next &rarr;</button>
//                 </div>
//             </>
//         )
//     }

//     News.defaultProps = {
//         country: "in",
//         pageSize: 8,
//         category: "general"
//     }
//     News.propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     }
// }
// export default News