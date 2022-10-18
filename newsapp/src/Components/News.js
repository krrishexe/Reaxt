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
        // {
        //     "source": {
        //         "id": "cnn",
        //         "name": "CNN"
        //     },
        //     "author": "AJ Willingham, CNN",
        //     "title": "The NFL's most iconic theme music has roots in everything from Batman to 'Star Wars'",
        //     "description": "If you're a football fan, the first few blasts of an NFL broadcast theme can make you feel like running through a brick wall. It's superheroes! It's action! It's the entire percussion session wailing away for dear life! As the season descends upon us, enjoy a…",
        //     "url": "https://www.cnn.com/2022/09/11/sport/nfl-theme-songs-cec/index.html",
        //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210207205847-nfl-honors-ganadores-super-tease.jpg",
        //     "publishedAt": "2022-09-11T10:05:20Z",
        //     "content": "(CNN)If you're a football fan, the first few blasts of an NFL broadcast theme can make you feel like running through a brick wall. It's superheroes! It's action! It's the entire percussion session wa… [+4656 chars]"
        // },
        // {
        //     "source": {
        //         "id": "bbc-news",
        //         "name": "BBC News"
        //     },
        //     "author": null,
        //     "title": "Thomas Tuchel and Antonio Conte charged by FA after Chelsea v Tottenham clash",
        //     "description": "Thomas Tuchel and Antonio Conte are charged by the Football Association following their clash on Sunday during the Premier League match between Chelsea and Tottenham.",
        //     "url": "https://www.bbc.co.uk/sport/football/62555380",
        //     "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg",
        //     "publishedAt": "2022-08-15T17:35:34Z",
        //     "content": "Thomas Tuchel and Antonio Conte have each been charged by the Football Association (FA) following their clash on Sunday after the Premier League match between Chelsea and Tottenham.\r\nThe pair were bo… [+985 chars]"
        // },
        // {
        //     "source": {
        //         "id": "cnn",
        //         "name": "CNN"
        //     },
        //     "author": "Christina Maxouris, CNN",
        //     "title": "8-year-old left paralyzed after July 4 parade shooting feels 'hopeless' and angry as new reality sets in",
        //     "description": "Before July Fourth, Cooper Roberts was almost always active and running around. He loved playing sports -- including soccer, baseball and football -- and riding his bike, his family has said.",
        //     "url": "https://www.cnn.com/2022/08/16/us/highland-park-shooting-cooper-roberts-physical-recovery/index.html",
        //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220816154655-05-cooper-roberts-super-tease.jpg",
        //     "publishedAt": "2022-08-16T21:31:03Z",
        //     "content": "(CNN)Before July Fourth, Cooper Roberts was almost always active and running around. He loved playing sports -- including soccer, baseball and football -- and riding his bike, his family has said.\r\nL… [+2426 chars]"
        // },
        // {
        //     "source": {
        //         "id": "cnn",
        //         "name": "CNN"
        //     },
        //     "author": "David Close",
        //     "title": "NFL head coach fulfills a promise to his mom and gets college degree 37 years after leaving school",
        //     "description": "Almost four decades after he left Temple University to pursue his professional football dream, Tampa Bay Buccaneers head coach Todd Bowles fulfilled a promise he made to his late mother by earning his bachelor's degree last week.",
        //     "url": "https://www.cnn.com/2022/09/06/sport/todd-bowles-nfl-college-degree-37-years-spt/index.html",
        //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220906181223-02-todd-bowles-file-restricted-080922.jpg?q=w_800,c_fill",
        //     "publishedAt": "2022-09-06T22:29:15Z",
        //     "content": "Almost four decades after he left Temple University to pursue his professional football dream, Tampa Bay Buccaneers head coach Todd Bowles fulfilled a promise he made to his late mother by earning hi… [+2076 chars]"
        // },
        // {
        //     "source": {
        //         "id": "bbc-news",
        //         "name": "BBC News"
        //     },
        //     "author": "https://www.facebook.com/bbcnews",
        //     "title": "Ukraine round-up: UN warns against trial of POWs and the return of top-flight football",
        //     "description": "The UN human rights office warns that Ukrainian POWs being put on trial could constitute a war crime.",
        //     "url": "https://www.bbc.co.uk/news/world-europe-62648340",
        //     "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png",
        //     "publishedAt": "2022-08-23T19:24:07Z",
        //     "content": "The UN has expressed concern that Russia may prosecute Ukrainian prisoners of war for simply having participated in the hostilities. \r\nAny such move would constitute a war crime, it says. \r\nA UN spok… [+3500 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "The Guardian"
        //     },
        //     "author": "Guardian sport",
        //     "title": "Football quiz: bad starts to a season",
        //     "description": "Manchester United are propping up the Premier League table after two embarrassing defeats. Which other teams started slowly? Continue reading...",
        //     "url": "https://amp.theguardian.com/football/2022/aug/19/football-quiz-bad-starts-season-manchester-united-premier-league",
        //     "urlToImage": "https://i.guim.co.uk/img/media/fc6832b42fc28f499cb487980c21e44552e99e1b/0_298_7099_4260/master/7099.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d7a11aab82a238e8ad74f6e683caa0cf",
        //     "publishedAt": "2022-08-19T13:03:33Z",
        //     "content": "Manchester United are propping up the Premier League table after two embarrassing defeats. Which other teams started slowly?"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "The Guardian"
        //     },
        //     "author": "John Brewin",
        //     "title": "The Fiver | Football and the Queen",
        //     "description": "Like this? Forward it to your friend(s) and they can sign upQueen Elizabeth II was not a huge football fan. That July 1966 afternoon, when Bobby Moore wiped himself down before shaking her gloved hand as she passed him the Jules Rimet trophy, was actually the…",
        //     "url": "https://amp.theguardian.com/football/2022/sep/09/the-fiver-football-and-the-queen",
        //     "urlToImage": "https://i.guim.co.uk/img/media/a1ee91e5800a4f38360043dc599a2db0435aa4da/0_477_3103_1862/master/3103.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a733c23144126d58213151a79d1920ce",
        //     "publishedAt": "2022-09-09T14:56:36Z",
        //     "content": "Queen Elizabeth II was not a huge football fan. That July 1966 afternoon, when Bobby Moore wiped himself down before shaking her gloved hand as she passed him the Jules Rimet trophy, was actually the… [+4818 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "The Guardian"
        //     },
        //     "author": "Andy Hunter",
        //     "title": "Football call-offs a ‘missed opportunity’ to pay tribute to Queen, says fans’ group",
        //     "description": "<ul><li>FSA believes most fans wanted weekend games to go ahead</li><li>It shared view with football authorities before postponements </li></ul>British football has squandered an opportunity to pay tribute to the Queen by cancelling all matches this weekend, …",
        //     "url": "https://amp.theguardian.com/football/2022/sep/09/football-supporters-association-postponements-tribute-to-queen-misssed-opportunity",
        //     "urlToImage": "https://i.guim.co.uk/img/media/c9dcd1c3151392e8ef6f9e78dcdeba5fba6dec48/0_137_3421_2053/master/3421.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=28452274a21ba01843302231b78df46f",
        //     "publishedAt": "2022-09-09T14:07:42Z",
        //     "content": "British football has squandered an opportunity to pay tribute to the Queen by cancelling all matches this weekend, according to the Football Supporters Association.\r\nWhereas sports including cricket,… [+1642 chars]"
        // },
        // {
        //     "source": {
        //         "id": "reuters",
        //         "name": "Reuters"
        //     },
        //     "author": null,
        //     "title": "English Football League says matches to return from Tuesday - Reuters",
        //     "description": "The English Football League, which manages the three divisions below the Premier League, said on Monday that matches will return as scheduled from Tuesday after the last round of games were postponed following the death of Queen Elizabeth.",
        //     "url": "https://www.reuters.com/lifestyle/sports/english-football-league-says-matches-return-tuesday-2022-09-12/",
        //     "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=109",
        //     "publishedAt": "2022-09-12T09:18:00Z",
        //     "content": "Sept 12 (Reuters) - The English Football League, which manages the three divisions below the Premier League, said on Monday that matches will return as scheduled from Tuesday after the last round of … [+1141 chars]"
        // },
        // {
        //     "source": {
        //         "id": "cnn",
        //         "name": "CNN"
        //     },
        //     "author": "Daniel Dale, CNN",
        //     "title": "Fact check: Herschel Walker falsely claims Raphael Warnock lied about having a dog",
        //     "description": "Georgia pastor Raphael Warnock won a seat in the US Senate in 2021 with the help of cheery campaign ads featuring a cute dog. Now Warnock's Republican opponent in the 2022 midterms, former football star Herschel Walker, is accusing him of lying about the natu…",
        //     "url": "https://www.cnn.com/2022/08/27/politics/fact-check-walker-warnock-dog-ad/index.html",
        //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220825134636-01-fact-check-walker-warnock-dog-super-tease.jpg",
        //     "publishedAt": "2022-08-27T12:11:19Z",
        //     "content": "Washington (CNN)Georgia pastor Raphael Warnock won a seat in the US Senate in 2021 with the help of cheery campaign ads featuring a cute dog. Now Warnock's Republican opponent in the 2022 midterms, f… [+3727 chars]"
        // },
        // {
        //     "source": {
        //         "id": "engadget",
        //         "name": "Engadget"
        //     },
        //     "author": "Igor Bonifacic",
        //     "title": "Instacart's 'Big & Bulky' service lets you order big and bulky items",
        //     "description": "After introducing 30-minute deliveries last year\r\n, Instacart will now allow you to order large items from retailers. The company’s new service, aptly named “Big & Bulky,” promises same-day and scheduled delivery of products like outdoor furniture, office sup…",
        //     "url": "https://www.engadget.com/instacart-big-and-bulky-service-223009804.html",
        //     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/67591d10-23f0-11ed-a7df-56a7e6d3d6a8",
        //     "publishedAt": "2022-08-24T22:30:09Z",
        //     "content": "After introducing 30-minute deliveries last year\r\n, Instacart will now allow you to order large items from retailers. The companys new service, aptly named Big &amp; Bulky, promises same-day and sche… [+968 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "The Guardian"
        //     },
        //     "author": "Marcus Christenson",
        //     "title": "England’s Euro 2022 winner Jill Scott announces retirement from football",
        //     "description": "<ul><li>Midfielder follows in footsteps of Ellen White</li><li>Scott won 161 caps for England in 16 years</li></ul>Jill Scott became the second Euro 2022 winner to retire in two days, announcing on Tuesday that she had called time on a remarkable career that …",
        //     "url": "https://amp.theguardian.com/football/2022/aug/23/england-euro-2022-winner-jill-scott-announces-retirement",
        //     "urlToImage": "https://i.guim.co.uk/img/media/ec63eb99b0333252a64429c3e513b041edb53f28/0_73_2246_1347/master/2246.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ead94a70f04a76fde678e71b1d6e1242",
        //     "publishedAt": "2022-08-23T15:33:53Z",
        //     "content": "Jill Scott has announced her retirement from football after an incredible career, which made her the second most capped player men or women in English football history.\r\nThe 35-year-old ends on a hig… [+3319 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "The Guardian"
        //     },
        //     "author": "Arnel Hecimovic",
        //     "title": "Bogotá concert and river football: Monday’s best photos",
        //     "description": "The Guardian’s picture editors select photo highlights from around the world Continue reading...",
        //     "url": "https://www.theguardian.com/news/gallery/2022/aug/29/post-conflict-concert-and-river-football-mondays-best-photos",
        //     "urlToImage": "https://i.guim.co.uk/img/media/07a83401807e166a40e3c5c11c7fc50bc25f9100/154_315_5090_3055/master/5090.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c8f79a0dedb40e4f1e0b8365929b6db1",
        //     "publishedAt": "2022-08-29T13:50:32Z",
        //     "content": "The Guardians picture editors select photo highlights from around the world"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "The Guardian"
        //     },
        //     "author": "Guardian sport",
        //     "title": "Football quiz: name the team from the floodlights",
        //     "description": "Study the picture for clues or just use your nerdy knowledge to put a team name to the set of lights in each of these photos Continue reading...",
        //     "url": "https://amp.theguardian.com/football/2022/aug/30/football-quiz-name-the-team-from-the-floodlights",
        //     "urlToImage": "https://i.guim.co.uk/img/media/e070522a55e4c02e83e37b329868fe9163a05170/0_0_2560_1536/master/2560.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8d9cdce497ad1d72c96ef5a9b2cd3cc9",
        //     "publishedAt": "2022-08-30T11:00:05Z",
        //     "content": "Study the picture for clues or just use your nerdy knowledge to put a team name to the set of lights in each of these photos"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "The Guardian"
        //     },
        //     "author": "Scott Murray",
        //     "title": "Southampton v Chelsea, Fulham v Brighton: football clockwatch – live!",
        //     "description": "<ul><li>Updates from games in the Premier League and beyond</li><li>Get in touch! Send your thoughts to Scott by email here</li></ul>Palace make three changes to the XI named for the 4-2 loss at Manchester City on Saturday. Wilfried Zaha returns from injury, …",
        //     "url": "https://www.theguardian.com/football/live/2022/aug/30/southampton-v-chelsea-fulham-v-brighton-football-clockwatch-live",
        //     "urlToImage": "https://i.guim.co.uk/img/media/b50807da921c528b66f131ac8684b9acde6bf5ff/0_746_7776_4664/master/7776.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=dcad7dc206ad497eb59185d3abc14dfb",
        //     "publishedAt": "2022-08-30T17:40:00Z",
        //     "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nSouthampton make two changes to the side that narrowly lost against Manchester United on Saturday. Romain Perraud and Ibrahima Diall… [+3053 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "The Guardian"
        //     },
        //     "author": "Presented by Max Rushden, with Barry Glendenning, Mark Langdon and Nicky Bandini. Produced by Silas Gray, executive produced by Christian Bennett.",
        //     "title": "Napoli rout Liverpool, plus vintage Simeone – Football Weekly Extra",
        //     "description": "Max Rushden, Barry Glendenning, Nicky Bandini and Mark Langdon discuss Wednesday’s Champions League games, Graham Potter’s potential appointment at Chelsea and look ahead to the weekend’s actionRate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mix…",
        //     "url": "https://www.theguardian.com/football/audio/2022/sep/08/napoli-rout-liverpool-plus-vintage-simeone-football-weekly-extra-podcast",
        //     "urlToImage": "https://i.guim.co.uk/img/media/3068fde076ac8bab8e4a049ac398ea4d3f0d1d82/0_110_2129_1276/master/2129.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e4e8b773c06c9081d737433cb58e5a5d",
        //     "publishedAt": "2022-09-08T12:37:50Z",
        //     "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nOn the pod today: the panel discuss all of Wedne… [+620 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "The Guardian"
        //     },
        //     "author": "Sean Ingle",
        //     "title": "EFL returns amid growing expectation of weekend football cancellations",
        //     "description": "<ul><li>Most games on would be success for EFL with police stretched</li><li>Premier League working to play matches where possible</li></ul>The Football League has confirmed that it will play its midweek fixtures but there are growing concerns that a signific…",
        //     "url": "https://amp.theguardian.com/football/2022/sep/12/football-fixtures-cancellations-efl-returns-premier-league-queen-funeral-police",
        //     "urlToImage": "https://i.guim.co.uk/img/media/71979f8eb389b41b4ba57e11cc9dcb0f46e35110/0_210_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=aac2ac3f3724371af465a2ca387b937a",
        //     "publishedAt": "2022-09-12T10:34:14Z",
        //     "content": "The Football League has confirmed that it will play its midweek fixtures but there are growing concerns that a significant part of the weekends programme could yet be postponed because of the Queens … [+2785 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "The Guardian"
        //     },
        //     "author": "Will Unwin",
        //     "title": "Football transfer rumours: Leeds and Everton join Cody Gakpo chase?",
        //     "description": "Today’s fluff is a second-hand cardiganThere is not long left in the transfer window, so there is plenty to get excited about. Well, at least there will be some funny panic buys. Will Chelsea buy Paolo Maldini for £70m? Will Manchester United go for Marko Arn…",
        //     "url": "https://amp.theguardian.com/football/2022/aug/31/football-transfer-rumours-leeds-and-everton-join-cody-gakpo-chase",
        //     "urlToImage": "https://i.guim.co.uk/img/media/15b2b09caeb96c121fffd0ffa253d7a1ba78972c/490_175_2120_1272/master/2120.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5a30c19dc9fe9a513bf62c3364d57482",
        //     "publishedAt": "2022-08-31T07:11:50Z",
        //     "content": "There is not long left in the transfer window, so there is plenty to get excited about. Well, at least there will be some funny panic buys. Will Chelsea buy Paolo Maldini for £70m? Will Manchester Un… [+3184 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "The Guardian"
        //     },
        //     "author": "Gregg Bakowski",
        //     "title": "Transfer window reaction, Premier League team news: football countdown – live!",
        //     "description": "<ul><li>All the news and reaction as the summer window closes </li><li>Send your thoughts to Gregg by email or on Twitter</li></ul>Morning! So, the transfer window is closed until January. Many managers will be relieved – especially Brendan Rodgers – as the t…",
        //     "url": "https://www.theguardian.com/football/live/2022/sep/02/transfer-window-reaction-premier-league-team-news-and-more-weekend-football-countdown-live",
        //     "urlToImage": "https://i.guim.co.uk/img/media/c8562b677974e4cd85feb72bc63a04ce4d4b1e79/521_706_3484_2090/master/3484.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=905d58741299a96fb6f5bc4828d5709e",
        //     "publishedAt": "2022-09-02T09:12:54Z",
        //     "content": "Howe: 'Clubs didn't want to be seen to be helping us'\r\nEddie Howe loves an early press conference and Newcastles manager has already previewed the home match against Crystal Palace on Saturday. He wa… [+4626 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "The Guardian"
        //     },
        //     "author": "Will Unwin",
        //     "title": "Football transfer rumours: England hero Keira Walsh to join Barcelona?",
        //     "description": "Today’s fluff is embracing rainThe arrival of Casemiro at Manchester United could mean Scott McTominay becomes redundant at Old Trafford. Everton, Leicester, Newcastle and West Ham are all circling should Erik Ten Hag decide to part ways with the Scotland int…",
        //     "url": "https://amp.theguardian.com/football/2022/aug/22/football-transfer-rumours-keira-walsh-manchester-city-united-barcelona-newcastle",
        //     "urlToImage": "https://i.guim.co.uk/img/media/25d57684cbc3e15f8f38a50a221c64f959a348e0/1420_90_1500_900/master/1500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=43ee5b0524006dd08cc2194f39726d72",
        //     "publishedAt": "2022-08-22T08:08:00Z",
        //     "content": "The arrival of Casemiro at Manchester United could mean ScottMcTominay becomes redundant at Old Trafford. Everton, Leicester, Newcastle and WestHam are all circling should Erik Ten Hag decide to part… [+3159 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "The Guardian"
        //     },
        //     "author": "Luke McLaughlin",
        //     "title": "Europa League draw, transfers and team news: football countdown – live!",
        //     "description": "<ul><li>Conference League draw also to be made later on Friday</li><li>And you can get in touch with Luke on email or Twitter</li></ul>Before his Southampton side face Manchester United at St Mary’s tomorrow lunchtime, Ralph Hassenhüttl reckons Erik ten Hag i…",
        //     "url": "https://www.theguardian.com/football/live/2022/aug/26/europa-league-draw-transfers-and-team-news-football-countdown-live",
        //     "urlToImage": "https://i.guim.co.uk/img/media/a9b071e283590a66342cbd51511669a184cc086f/0_143_2645_1586/master/2645.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=0d43ed4ab0f716c82fdaeebb5afa0edf",
        //     "publishedAt": "2022-08-26T09:30:03Z",
        //     "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nScott Arfield of Rangers is having a chat with Sky Sports News now about the Champions League Group A draw they will face Ajax, Live… [+4062 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "The Guardian"
        //     },
        //     "author": "Ella Braidwood",
        //     "title": "‘Really heartwarming’: how Euro 2022 started a girls’ football revolution",
        //     "description": "Manchester United’s Aoife Mannion and others discuss the increased interest in women’s football around the UKWelcome to Moving the Goalposts, the Guardian’s new (and free) women’s football newsletter. Here’s an extract from this week’s edition. To receive the…",
        //     "url": "https://amp.theguardian.com/football/2022/aug/17/how-euro-2022-started-girls-football-revolution-manchester-united",
        //     "urlToImage": "https://i.guim.co.uk/img/media/ba038ddcf4557ea09b765a0092704319d4cd544a/0_84_4850_2912/master/4850.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9db160cea336c67f0d098346df6f44ef",
        //     "publishedAt": "2022-08-17T10:55:13Z",
        //     "content": "Welcome to Moving the Goalposts, the Guardians new (and free) womens football newsletter. Heres an extract from this weeks edition. To receive the full version once a week, just pop your email in bel… [+5831 chars]"
        // },
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
    constructor() {
        super();
        console.log("hello world");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        console.log("CDM");
        this.setState({loading:true})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94565befd4ef427b92d8ced9a40eed8a&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState(
            { articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false })
    }

    sportsClick = async () => {
        console.log("sports click is working");
        this.setState({loading:true})
        let url = `https://newsapi.org/v2/top-headlines?q=sports&sortBy=publishedAt&apiKey=94565befd4ef427b92d8ced9a40eed8a&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,loading:false,
        })
    }

    handlePrevClick = async () => {
        console.log("previous");
        this.setState({loading:true})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94565befd4ef427b92d8ced9a40eed8a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading:false
        })
    }

    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {
            console.log(this.props.pageSize);
            this.setState({loading:true})
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94565befd4ef427b92d8ced9a40eed8a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading:false,
            })
        }
    }

    render() {
        console.log("render");
        return (
            <div className="container my-5 text-center">
                <h1>Welcome To NewsAPP - your daily news services.</h1>
                {this.state.loading && <Spinner />}
                <button type="button" className="btn btn-primary mx-6" onClick={this.sportsClick}>Sports</button>
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