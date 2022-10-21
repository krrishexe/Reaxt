import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    
    static defaultProps = {
        country:"in",
        pageSize:8,
        category:"general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    articles = [
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "David Pierce",
            "title": "The Big Ten’s new deal makes sports streaming rights more confusing than ever",
            "description": "You can watch games on NBC, Fox, and CBS and stream them on Peacock and Paramount, but there’s really no rhyme or reason to the future of football viewing.",
            "url": "https://www.theverge.com/2022/8/18/23311492/big-ten-sports-streaming-deal-peacock-paramount-confusing",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/GvEqiko_ni9bbapc-_nR6yfKs5E=/0x196:2738x1630/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23954273/1236850413.jpg",
            "publishedAt": "2022-08-18T16:43:05Z",
            "content": "The Big Ten is available for streaming... ish\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nWant Big Ten football? Good luck finding it.\r\nPhoto … [+3786 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Jill Scott: England and Manchester City midfielder announces retirement",
            "description": "Manchester City and England midfielder Jill Scott announces her retirement from football.",
            "url": "https://www.bbc.co.uk/sport/football/62642960",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg",
            "publishedAt": "2022-08-23T15:33:24Z",
            "content": "Manchester City and England midfielder Jill Scott has announced her retirement from football.\r\nThe 35-year-old played in 10 major tournaments, including two Olympics with Great Britain, and helped En… [+1654 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "All India Football Federation: Fifa suspends AIFF over undue influence from third parties",
            "description": "India's football association is suspended by world governing body Fifa because of \"undue influence from third parties\".",
            "url": "https://www.bbc.co.uk/sport/football/62556926",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/E68F/production/_126332095_gettyimages-1242283208.jpg",
            "publishedAt": "2022-08-15T22:19:09Z",
            "content": "England won the Under-17's World Cup in India in 2017\r\nIndia's football association has been suspended by Fifa because of \"undue influence from third parties\".\r\nThe suspension means the women's Under… [+967 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Bobby Kent, Coy Wire",
            "title": "How Atlanta Falcons kicker Younghoe Koo overcame a language barrier and being cut to thrive in the NFL",
            "description": "From not knowing any English to becoming a starter, Younghoe Koo is one of the most improbable National Football League success stories.",
            "url": "https://www.cnn.com/2022/09/11/sport/younghoe-koo-atlanta-falcons-nfl-spt-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220910010824-younghoe-koo-atlanta-falcons-112419.jpg?q=w_800,c_fill",
            "publishedAt": "2022-09-11T10:08:57Z",
            "content": "From not knowing any English to becoming a starter, Younghoe Koo is one of the most improbable National Football League success stories.\r\nNow, Koo is the second-highest paid kicker in the league havi… [+7184 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "",
            "title": "Ellen White retires from football – her career in pictures",
            "description": "Ellen White has called time on her glittering career following England’s victory at the Euro 2022 tournament Continue reading...",
            "url": "https://www.theguardian.com/football/gallery/2022/aug/22/ellen-white-retires-from-football-her-career-in-pictures",
            "urlToImage": "https://i.guim.co.uk/img/media/fb60f5deb9aa2548e39043c71a2b17fe9389666b/55_0_2547_1529/master/2547.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a5718a90f47988826f9ca9eb76e712a9",
            "publishedAt": "2022-08-22T18:39:16Z",
            "content": "Ellen White has called time on her glittering career following Englands victory at the Euro 2022 tournament"
        }
    ]
    constructor(props) {
        super(props);
        console.log("hello world");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
        document.title =`${this.capitalizeFunc(this.props.category)} - Headlines`
    }
    async updateFunction(){
        this.setState({loading:true})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94565befd4ef427b92d8ced9a40eed8a&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState(
            { articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false })
    }

    async componentDidMount() {
        this.updateFunction();
    }


    handlePrevClick = async () => {
        this.setState({
            page : this.state.page -1
        })
        this.updateFunction();
    }

    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {
            this.setState({
                page : this.state.page + 1 
            })
            this.updateFunction();
        }
    }
    capitalizeFunc=(string)=>{
        let x = string.charAt(0).toUpperCase()
        let y = string.slice(1,string.length)
        return x+y;
    }

    render() {
        console.log("render");
        return (
            <div className="container my-5 text-center">
                <h1>NewsAPP - Top {(this.capitalizeFunc(this.props.category))} Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row my-5">
                    {!this.state.loading && this.state.articles.map((element) => {
                        // key hamesha us element ko dete hai jo return ho raha hota hai i.e. --> in this case that is div tag.
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 40) : " "} description={element.description ? element.description.slice(0, 100) : " "} imageUrl={element.urlToImage} newsURL={element.url} source={element.source.name} date={element.publishedAt}/>
                        </div>
                    })}
                </div>

                <div className="container d-flex justify-content-between my-6">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary mx-6" onClick={this.handlePrevClick}> &larr; Previous</button>

                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary mx-6" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>


            </div>
        )
    }
}

export default News