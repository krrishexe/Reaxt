import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles= [
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
                "id": "cnn",
                "name": "CNN"
            },
            "author": "AJ Willingham, CNN",
            "title": "The NFL's most iconic theme music has roots in everything from Batman to 'Star Wars'",
            "description": "If you're a football fan, the first few blasts of an NFL broadcast theme can make you feel like running through a brick wall. It's superheroes! It's action! It's the entire percussion session wailing away for dear life! As the season descends upon us, enjoy a…",
            "url": "https://www.cnn.com/2022/09/11/sport/nfl-theme-songs-cec/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210207205847-nfl-honors-ganadores-super-tease.jpg",
            "publishedAt": "2022-09-11T10:05:20Z",
            "content": "(CNN)If you're a football fan, the first few blasts of an NFL broadcast theme can make you feel like running through a brick wall. It's superheroes! It's action! It's the entire percussion session wa… [+4656 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Thomas Tuchel and Antonio Conte charged by FA after Chelsea v Tottenham clash",
            "description": "Thomas Tuchel and Antonio Conte are charged by the Football Association following their clash on Sunday during the Premier League match between Chelsea and Tottenham.",
            "url": "https://www.bbc.co.uk/sport/football/62555380",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg",
            "publishedAt": "2022-08-15T17:35:34Z",
            "content": "Thomas Tuchel and Antonio Conte have each been charged by the Football Association (FA) following their clash on Sunday after the Premier League match between Chelsea and Tottenham.\r\nThe pair were bo… [+985 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Christina Maxouris, CNN",
            "title": "8-year-old left paralyzed after July 4 parade shooting feels 'hopeless' and angry as new reality sets in",
            "description": "Before July Fourth, Cooper Roberts was almost always active and running around. He loved playing sports -- including soccer, baseball and football -- and riding his bike, his family has said.",
            "url": "https://www.cnn.com/2022/08/16/us/highland-park-shooting-cooper-roberts-physical-recovery/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220816154655-05-cooper-roberts-super-tease.jpg",
            "publishedAt": "2022-08-16T21:31:03Z",
            "content": "(CNN)Before July Fourth, Cooper Roberts was almost always active and running around. He loved playing sports -- including soccer, baseball and football -- and riding his bike, his family has said.\r\nL… [+2426 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "David Close",
            "title": "NFL head coach fulfills a promise to his mom and gets college degree 37 years after leaving school",
            "description": "Almost four decades after he left Temple University to pursue his professional football dream, Tampa Bay Buccaneers head coach Todd Bowles fulfilled a promise he made to his late mother by earning his bachelor's degree last week.",
            "url": "https://www.cnn.com/2022/09/06/sport/todd-bowles-nfl-college-degree-37-years-spt/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220906181223-02-todd-bowles-file-restricted-080922.jpg?q=w_800,c_fill",
            "publishedAt": "2022-09-06T22:29:15Z",
            "content": "Almost four decades after he left Temple University to pursue his professional football dream, Tampa Bay Buccaneers head coach Todd Bowles fulfilled a promise he made to his late mother by earning hi… [+2076 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Ukraine round-up: UN warns against trial of POWs and the return of top-flight football",
            "description": "The UN human rights office warns that Ukrainian POWs being put on trial could constitute a war crime.",
            "url": "https://www.bbc.co.uk/news/world-europe-62648340",
            "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png",
            "publishedAt": "2022-08-23T19:24:07Z",
            "content": "The UN has expressed concern that Russia may prosecute Ukrainian prisoners of war for simply having participated in the hostilities. \r\nAny such move would constitute a war crime, it says. \r\nA UN spok… [+3500 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian sport",
            "title": "Football quiz: bad starts to a season",
            "description": "Manchester United are propping up the Premier League table after two embarrassing defeats. Which other teams started slowly? Continue reading...",
            "url": "https://amp.theguardian.com/football/2022/aug/19/football-quiz-bad-starts-season-manchester-united-premier-league",
            "urlToImage": "https://i.guim.co.uk/img/media/fc6832b42fc28f499cb487980c21e44552e99e1b/0_298_7099_4260/master/7099.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d7a11aab82a238e8ad74f6e683caa0cf",
            "publishedAt": "2022-08-19T13:03:33Z",
            "content": "Manchester United are propping up the Premier League table after two embarrassing defeats. Which other teams started slowly?"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "John Brewin",
            "title": "The Fiver | Football and the Queen",
            "description": "Like this? Forward it to your friend(s) and they can sign upQueen Elizabeth II was not a huge football fan. That July 1966 afternoon, when Bobby Moore wiped himself down before shaking her gloved hand as she passed him the Jules Rimet trophy, was actually the…",
            "url": "https://amp.theguardian.com/football/2022/sep/09/the-fiver-football-and-the-queen",
            "urlToImage": "https://i.guim.co.uk/img/media/a1ee91e5800a4f38360043dc599a2db0435aa4da/0_477_3103_1862/master/3103.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a733c23144126d58213151a79d1920ce",
            "publishedAt": "2022-09-09T14:56:36Z",
            "content": "Queen Elizabeth II was not a huge football fan. That July 1966 afternoon, when Bobby Moore wiped himself down before shaking her gloved hand as she passed him the Jules Rimet trophy, was actually the… [+4818 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Andy Hunter",
            "title": "Football call-offs a ‘missed opportunity’ to pay tribute to Queen, says fans’ group",
            "description": "<ul><li>FSA believes most fans wanted weekend games to go ahead</li><li>It shared view with football authorities before postponements </li></ul>British football has squandered an opportunity to pay tribute to the Queen by cancelling all matches this weekend, …",
            "url": "https://amp.theguardian.com/football/2022/sep/09/football-supporters-association-postponements-tribute-to-queen-misssed-opportunity",
            "urlToImage": "https://i.guim.co.uk/img/media/c9dcd1c3151392e8ef6f9e78dcdeba5fba6dec48/0_137_3421_2053/master/3421.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=28452274a21ba01843302231b78df46f",
            "publishedAt": "2022-09-09T14:07:42Z",
            "content": "British football has squandered an opportunity to pay tribute to the Queen by cancelling all matches this weekend, according to the Football Supporters Association.\r\nWhereas sports including cricket,… [+1642 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "English Football League says matches to return from Tuesday - Reuters",
            "description": "The English Football League, which manages the three divisions below the Premier League, said on Monday that matches will return as scheduled from Tuesday after the last round of games were postponed following the death of Queen Elizabeth.",
            "url": "https://www.reuters.com/lifestyle/sports/english-football-league-says-matches-return-tuesday-2022-09-12/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=109",
            "publishedAt": "2022-09-12T09:18:00Z",
            "content": "Sept 12 (Reuters) - The English Football League, which manages the three divisions below the Premier League, said on Monday that matches will return as scheduled from Tuesday after the last round of … [+1141 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Daniel Dale, CNN",
            "title": "Fact check: Herschel Walker falsely claims Raphael Warnock lied about having a dog",
            "description": "Georgia pastor Raphael Warnock won a seat in the US Senate in 2021 with the help of cheery campaign ads featuring a cute dog. Now Warnock's Republican opponent in the 2022 midterms, former football star Herschel Walker, is accusing him of lying about the natu…",
            "url": "https://www.cnn.com/2022/08/27/politics/fact-check-walker-warnock-dog-ad/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220825134636-01-fact-check-walker-warnock-dog-super-tease.jpg",
            "publishedAt": "2022-08-27T12:11:19Z",
            "content": "Washington (CNN)Georgia pastor Raphael Warnock won a seat in the US Senate in 2021 with the help of cheery campaign ads featuring a cute dog. Now Warnock's Republican opponent in the 2022 midterms, f… [+3727 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Igor Bonifacic",
            "title": "Instacart's 'Big & Bulky' service lets you order big and bulky items",
            "description": "After introducing 30-minute deliveries last year\r\n, Instacart will now allow you to order large items from retailers. The company’s new service, aptly named “Big & Bulky,” promises same-day and scheduled delivery of products like outdoor furniture, office sup…",
            "url": "https://www.engadget.com/instacart-big-and-bulky-service-223009804.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/67591d10-23f0-11ed-a7df-56a7e6d3d6a8",
            "publishedAt": "2022-08-24T22:30:09Z",
            "content": "After introducing 30-minute deliveries last year\r\n, Instacart will now allow you to order large items from retailers. The companys new service, aptly named Big &amp; Bulky, promises same-day and sche… [+968 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Marcus Christenson",
            "title": "England’s Euro 2022 winner Jill Scott announces retirement from football",
            "description": "<ul><li>Midfielder follows in footsteps of Ellen White</li><li>Scott won 161 caps for England in 16 years</li></ul>Jill Scott became the second Euro 2022 winner to retire in two days, announcing on Tuesday that she had called time on a remarkable career that …",
            "url": "https://amp.theguardian.com/football/2022/aug/23/england-euro-2022-winner-jill-scott-announces-retirement",
            "urlToImage": "https://i.guim.co.uk/img/media/ec63eb99b0333252a64429c3e513b041edb53f28/0_73_2246_1347/master/2246.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ead94a70f04a76fde678e71b1d6e1242",
            "publishedAt": "2022-08-23T15:33:53Z",
            "content": "Jill Scott has announced her retirement from football after an incredible career, which made her the second most capped player men or women in English football history.\r\nThe 35-year-old ends on a hig… [+3319 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Arnel Hecimovic",
            "title": "Bogotá concert and river football: Monday’s best photos",
            "description": "The Guardian’s picture editors select photo highlights from around the world Continue reading...",
            "url": "https://www.theguardian.com/news/gallery/2022/aug/29/post-conflict-concert-and-river-football-mondays-best-photos",
            "urlToImage": "https://i.guim.co.uk/img/media/07a83401807e166a40e3c5c11c7fc50bc25f9100/154_315_5090_3055/master/5090.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c8f79a0dedb40e4f1e0b8365929b6db1",
            "publishedAt": "2022-08-29T13:50:32Z",
            "content": "The Guardians picture editors select photo highlights from around the world"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian sport",
            "title": "Football quiz: name the team from the floodlights",
            "description": "Study the picture for clues or just use your nerdy knowledge to put a team name to the set of lights in each of these photos Continue reading...",
            "url": "https://amp.theguardian.com/football/2022/aug/30/football-quiz-name-the-team-from-the-floodlights",
            "urlToImage": "https://i.guim.co.uk/img/media/e070522a55e4c02e83e37b329868fe9163a05170/0_0_2560_1536/master/2560.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8d9cdce497ad1d72c96ef5a9b2cd3cc9",
            "publishedAt": "2022-08-30T11:00:05Z",
            "content": "Study the picture for clues or just use your nerdy knowledge to put a team name to the set of lights in each of these photos"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Scott Murray",
            "title": "Southampton v Chelsea, Fulham v Brighton: football clockwatch – live!",
            "description": "<ul><li>Updates from games in the Premier League and beyond</li><li>Get in touch! Send your thoughts to Scott by email here</li></ul>Palace make three changes to the XI named for the 4-2 loss at Manchester City on Saturday. Wilfried Zaha returns from injury, …",
            "url": "https://www.theguardian.com/football/live/2022/aug/30/southampton-v-chelsea-fulham-v-brighton-football-clockwatch-live",
            "urlToImage": "https://i.guim.co.uk/img/media/b50807da921c528b66f131ac8684b9acde6bf5ff/0_746_7776_4664/master/7776.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=dcad7dc206ad497eb59185d3abc14dfb",
            "publishedAt": "2022-08-30T17:40:00Z",
            "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nSouthampton make two changes to the side that narrowly lost against Manchester United on Saturday. Romain Perraud and Ibrahima Diall… [+3053 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by Max Rushden, with Barry Glendenning, Mark Langdon and Nicky Bandini. Produced by Silas Gray, executive produced by Christian Bennett.",
            "title": "Napoli rout Liverpool, plus vintage Simeone – Football Weekly Extra",
            "description": "Max Rushden, Barry Glendenning, Nicky Bandini and Mark Langdon discuss Wednesday’s Champions League games, Graham Potter’s potential appointment at Chelsea and look ahead to the weekend’s actionRate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mix…",
            "url": "https://www.theguardian.com/football/audio/2022/sep/08/napoli-rout-liverpool-plus-vintage-simeone-football-weekly-extra-podcast",
            "urlToImage": "https://i.guim.co.uk/img/media/3068fde076ac8bab8e4a049ac398ea4d3f0d1d82/0_110_2129_1276/master/2129.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e4e8b773c06c9081d737433cb58e5a5d",
            "publishedAt": "2022-09-08T12:37:50Z",
            "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nOn the pod today: the panel discuss all of Wedne… [+620 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Sean Ingle",
            "title": "EFL returns amid growing expectation of weekend football cancellations",
            "description": "<ul><li>Most games on would be success for EFL with police stretched</li><li>Premier League working to play matches where possible</li></ul>The Football League has confirmed that it will play its midweek fixtures but there are growing concerns that a signific…",
            "url": "https://amp.theguardian.com/football/2022/sep/12/football-fixtures-cancellations-efl-returns-premier-league-queen-funeral-police",
            "urlToImage": "https://i.guim.co.uk/img/media/71979f8eb389b41b4ba57e11cc9dcb0f46e35110/0_210_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=aac2ac3f3724371af465a2ca387b937a",
            "publishedAt": "2022-09-12T10:34:14Z",
            "content": "The Football League has confirmed that it will play its midweek fixtures but there are growing concerns that a significant part of the weekends programme could yet be postponed because of the Queens … [+2785 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Will Unwin",
            "title": "Football transfer rumours: Leeds and Everton join Cody Gakpo chase?",
            "description": "Today’s fluff is a second-hand cardiganThere is not long left in the transfer window, so there is plenty to get excited about. Well, at least there will be some funny panic buys. Will Chelsea buy Paolo Maldini for £70m? Will Manchester United go for Marko Arn…",
            "url": "https://amp.theguardian.com/football/2022/aug/31/football-transfer-rumours-leeds-and-everton-join-cody-gakpo-chase",
            "urlToImage": "https://i.guim.co.uk/img/media/15b2b09caeb96c121fffd0ffa253d7a1ba78972c/490_175_2120_1272/master/2120.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5a30c19dc9fe9a513bf62c3364d57482",
            "publishedAt": "2022-08-31T07:11:50Z",
            "content": "There is not long left in the transfer window, so there is plenty to get excited about. Well, at least there will be some funny panic buys. Will Chelsea buy Paolo Maldini for £70m? Will Manchester Un… [+3184 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Gregg Bakowski",
            "title": "Transfer window reaction, Premier League team news: football countdown – live!",
            "description": "<ul><li>All the news and reaction as the summer window closes </li><li>Send your thoughts to Gregg by email or on Twitter</li></ul>Morning! So, the transfer window is closed until January. Many managers will be relieved – especially Brendan Rodgers – as the t…",
            "url": "https://www.theguardian.com/football/live/2022/sep/02/transfer-window-reaction-premier-league-team-news-and-more-weekend-football-countdown-live",
            "urlToImage": "https://i.guim.co.uk/img/media/c8562b677974e4cd85feb72bc63a04ce4d4b1e79/521_706_3484_2090/master/3484.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=905d58741299a96fb6f5bc4828d5709e",
            "publishedAt": "2022-09-02T09:12:54Z",
            "content": "Howe: 'Clubs didn't want to be seen to be helping us'\r\nEddie Howe loves an early press conference and Newcastles manager has already previewed the home match against Crystal Palace on Saturday. He wa… [+4626 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Will Unwin",
            "title": "Football transfer rumours: England hero Keira Walsh to join Barcelona?",
            "description": "Today’s fluff is embracing rainThe arrival of Casemiro at Manchester United could mean Scott McTominay becomes redundant at Old Trafford. Everton, Leicester, Newcastle and West Ham are all circling should Erik Ten Hag decide to part ways with the Scotland int…",
            "url": "https://amp.theguardian.com/football/2022/aug/22/football-transfer-rumours-keira-walsh-manchester-city-united-barcelona-newcastle",
            "urlToImage": "https://i.guim.co.uk/img/media/25d57684cbc3e15f8f38a50a221c64f959a348e0/1420_90_1500_900/master/1500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=43ee5b0524006dd08cc2194f39726d72",
            "publishedAt": "2022-08-22T08:08:00Z",
            "content": "The arrival of Casemiro at Manchester United could mean ScottMcTominay becomes redundant at Old Trafford. Everton, Leicester, Newcastle and WestHam are all circling should Erik Ten Hag decide to part… [+3159 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Luke McLaughlin",
            "title": "Europa League draw, transfers and team news: football countdown – live!",
            "description": "<ul><li>Conference League draw also to be made later on Friday</li><li>And you can get in touch with Luke on email or Twitter</li></ul>Before his Southampton side face Manchester United at St Mary’s tomorrow lunchtime, Ralph Hassenhüttl reckons Erik ten Hag i…",
            "url": "https://www.theguardian.com/football/live/2022/aug/26/europa-league-draw-transfers-and-team-news-football-countdown-live",
            "urlToImage": "https://i.guim.co.uk/img/media/a9b071e283590a66342cbd51511669a184cc086f/0_143_2645_1586/master/2645.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=0d43ed4ab0f716c82fdaeebb5afa0edf",
            "publishedAt": "2022-08-26T09:30:03Z",
            "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nScott Arfield of Rangers is having a chat with Sky Sports News now about the Champions League Group A draw they will face Ajax, Live… [+4062 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Ella Braidwood",
            "title": "‘Really heartwarming’: how Euro 2022 started a girls’ football revolution",
            "description": "Manchester United’s Aoife Mannion and others discuss the increased interest in women’s football around the UKWelcome to Moving the Goalposts, the Guardian’s new (and free) women’s football newsletter. Here’s an extract from this week’s edition. To receive the…",
            "url": "https://amp.theguardian.com/football/2022/aug/17/how-euro-2022-started-girls-football-revolution-manchester-united",
            "urlToImage": "https://i.guim.co.uk/img/media/ba038ddcf4557ea09b765a0092704319d4cd544a/0_84_4850_2912/master/4850.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9db160cea336c67f0d098346df6f44ef",
            "publishedAt": "2022-08-17T10:55:13Z",
            "content": "Welcome to Moving the Goalposts, the Guardians new (and free) womens football newsletter. Heres an extract from this weeks edition. To receive the full version once a week, just pop your email in bel… [+5831 chars]"
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
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by Max Rushden with Barry Glendenning, Jonathan Wilson and Paul Watson. Produced by Joel Grove with Iain Chambers and executive produced by Danielle Stephens.",
            "title": "Liverpool’s shaky start and Jonathan Wilson’s new book – Football Weekly",
            "description": "Max Rushden is joined by Barry Glendenning, Jonathan Wilson and Paul Watson to discuss Liverpool’s so-so start to the seasonRate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twit…",
            "url": "https://www.theguardian.com/football/audio/2022/aug/17/liverpool-manchester-city-united-jonathan-wilson-book-charlton-brothers",
            "urlToImage": "https://i.guim.co.uk/img/media/caa9b2a54de84e3184ac22aace3bbba7145d9b4e/177_46_1760_1056/master/1760.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=987d5a3a2b613ea28a09f9367330cad1",
            "publishedAt": "2022-08-17T12:35:47Z",
            "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nIn todays episode: are Liverpool tired or just a… [+631 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by Max Rushden with Barry Glendenning, Troy Townsend, John Brewin and Colin McMillan. Produced by Joel Grove and executive produced by Danielle Stephens.",
            "title": "Rangers reach Champions League promised land – Football Weekly Extra",
            "description": "Max Rushden is joined by Barry Glendenning, Troy Townsend, John Brewin and Colin McMillan as Rangers make it through to the Champions League group stage for the first time in more than a decadeRate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixc…",
            "url": "https://www.theguardian.com/football/audio/2022/aug/25/rangers-reach-champions-league-promised-land-football-weekly-extra-podcast",
            "urlToImage": "https://i.guim.co.uk/img/media/d9944dc5083117940e8fbce53a32e3812cc2b1c6/0_177_4157_2494/master/4157.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=42a2fbec25b8cf23494622795948ba1f",
            "publishedAt": "2022-08-25T12:14:00Z",
            "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nToday: Rangers beat PSV 3-2 on aggregate to get … [+523 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by Max Rushden with Barry Glendenning, Phillipe Auclair and Lucy Ward; produced by Lucy Oliva; the executive producer was Max Sanderson",
            "title": "Liverpool pick Cherries apart and Haaland’s heroics – Football Weekly",
            "description": "Max Rushden is joined by Barry Glendenning, Philippe Auclair and Lucy Ward to discuss nine goals without reply at Anfield, another comeback for Manchester City and too much celebrating for some at the EmiratesThe panel start today’s show at Anfield (where els…",
            "url": "https://www.theguardian.com/football/audio/2022/aug/29/liverpool-pick-cherries-apart-and-haaland-heroics-football-weekly-podcast",
            "urlToImage": "https://i.guim.co.uk/img/media/3aae100b77ce6297b41f8552bf94ae2b50bb686a/0_120_4434_2661/master/4434.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0e2f2b3b171f3bccf9e95de7c7ae7c40",
            "publishedAt": "2022-08-29T15:10:51Z",
            "content": "The panel start todays show at Anfield (where else?) as Jürgen Klopps men find themselves on cloud nine following a record-equalling romp against Bournemouth.\r\nMeanwhile, another comeback from Manche… [+430 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Ed Aarons and Romain Molina",
            "title": "Fifa bans former Zimbabwe football official for sexual harassment",
            "description": "<ul><li>Obert Zhoya gets five-year ban from all football-related activity</li><li>Fifa finds him guilty of sexually harassing three female referees</li></ul>Fifa has banned the former secretary general of the Zimbabwe Football Association’s referees committee…",
            "url": "https://amp.theguardian.com/football/2022/sep/01/fifa-bans-former-zimbabwe-football-official-for-sexual-harassment-referees-obert-zhoya",
            "urlToImage": "https://i.guim.co.uk/img/media/906899a4c97dce03beb951298444152efb8fd69d/0_234_3504_2102/master/3504.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5cff3eeab33d89ee8a5729a5b50911d2",
            "publishedAt": "2022-09-01T16:04:01Z",
            "content": "Fifa has banned the former secretary general of the Zimbabwe Football Associations referees committee from all football-related activities for five years after finding him guilty of sexually harassin… [+3123 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian sport",
            "title": "Sport-by-sport: which events have been cancelled after the Queen’s death?",
            "description": "Football in the UK is cancelled this weekend, but the Test will resume and the Great North Run goes ahead on SundayAll Premier League and English Football League games this weekend have been postponed as a mark of respect, while the matches scheduled for the …",
            "url": "https://amp.theguardian.com/sport/2022/sep/09/sport-by-sport-which-events-have-been-cancelled-after-the-queen-death",
            "urlToImage": "https://i.guim.co.uk/img/media/de7974910e094f6bd9a980602a973cf879189294/24_187_2313_1388/master/2313.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5f2da95c61ab8ecf8e818bfe853eafaa",
            "publishedAt": "2022-09-09T13:56:52Z",
            "content": "All Premier League and English Football League games this weekend have been postponed as a mark of respect, while the matches scheduled for the Womens Super League opening weekend, Womens Championshi… [+3412 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Adrian Marlow",
            "title": "Revamp Your Entertainment Space and Save up to $620 Off Select TVs at Best Buy - CNET",
            "description": "With these deals, you can afford to upgrade your home entertainment space just in time for football season.",
            "url": "https://www.cnet.com/deals/save-up-to-620-off-select-hisense-samsung-lg-more-tvs-at-best-buy/",
            "urlToImage": "https://www.cnet.com/a/img/resize/b254e63049bf911a3aeb6b88046b9aff281ae9fc/2022/08/27/3a6de162-c127-4440-b0e4-e526651ad241/cnet-rebrand-approved-image-colors-5-26.jpg?auto=webp&fit=crop&height=630&width=1200",
            "publishedAt": "2022-08-27T16:05:04Z",
            "content": "With summer winding down, fall sports are starting up and more of us will be spending more time inside, streaming live sports, movies, music and more, so it's a great time to take a look at your ente… [+1328 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Australia out of 2023 Asian Cup race, wants to host 2026 women's tournament - Reuters.com",
            "description": "Australia decided not to bid for the 2023 Asian Cup but will submit one for the 2026 women's tournament, Football Australia said on Friday.",
            "url": "https://www.reuters.com/lifestyle/sports/australia-out-2023-asian-cup-race-wants-host-2026-womens-tournament-2022-09-02/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=109",
            "publishedAt": "2022-09-02T07:04:00Z",
            "content": "MELBOURNE, Sept 2 (Reuters) - Australia decided not to bid for the 2023 Asian Cup but will submit one for the 2026 women's tournament, Football Australia said on Friday.\r\nAustralia, along with South … [+1829 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian sport",
            "title": "FSA calls for fans to be refunded as football postponed after Queen’s death",
            "description": "<ul><li>Rail chiefs and football authorities must be ‘sympathetic’</li><li>‘It’s not good to ask fans to pay for things that don’t happen’</li></ul>The Football Supporters’ Association has called for fans left out of pocket by the postponement of matches foll…",
            "url": "https://amp.theguardian.com/football/2022/sep/10/fsa-calls-for-fans-refunded-as-football-postponed-after-queens-death",
            "urlToImage": "https://i.guim.co.uk/img/media/b87c5b15ee653df89c4f5d8beff09dee69a077fa/0_193_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=8b778b4d405b722d0cced22f020b7f74",
            "publishedAt": "2022-09-10T14:52:13Z",
            "content": "The Football Supporters Association has called for fans left out of pocket by the postponement of matches following the Queens death to be treated sympathetically. Malcolm Clarke, chair of the FSA, h… [+2357 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "U.S. college sports league Big Ten strikes multi-year TV deals - Reuters",
            "description": "College sports league The Big Ten Conference said on Wednesday it has struck multi-year television rights deals for its football, basketball and other intercollegiate games.",
            "url": "https://www.reuters.com/lifestyle/sports/us-college-sports-league-big-ten-strikes-multi-year-tv-deals-2022-08-18/",
            "urlToImage": "https://www.reuters.com/resizer/UuQWDFm-bX4Ju7XotUaCs5Ikdso=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JKB4LRRUSFLTLGSDWUB4NFIW7U.jpg",
            "publishedAt": "2022-08-18T16:26:00Z",
            "content": "Aug 18 (Reuters) - College sports league The Big Ten Conference said on Wednesday it has struck multi-year television rights deals for its football, basketball and other intercollegiate games.\r\nThe a… [+965 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Premier League celebrates 30 year rise to global dominance - Reuters",
            "description": "The Premier League celebrated its 30th anniversary on Monday, marking three decades that has seen English club football transformed into the world's leading sports entertainment product.",
            "url": "https://www.reuters.com/lifestyle/sports/premier-league-celebrates-30-year-rise-global-dominance-2022-08-16/",
            "urlToImage": "https://www.reuters.com/resizer/1mGXq1aFvgfHT8JoYmP9dHeA3bk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RSJUYEM465OKZDPFIHV6IVJRQE.jpg",
            "publishedAt": "2022-08-16T08:27:00Z",
            "content": "MANCHESTER, England, Aug 15 (Reuters) - The Premier League celebrated its 30th anniversary on Monday, marking three decades that has seen English club football transformed into the world's leading sp… [+4688 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Champions Thailand to face Indonesia in Asean Championship group phase - Reuters",
            "description": "Defending champions Thailand will face last year's runners-up Indonesia in the group phase of the Asean Football Federation Championship after the draw was made on Tuesday.",
            "url": "https://www.reuters.com/lifestyle/sports/champions-thailand-face-indonesia-asean-championship-group-phase-2022-08-30/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=108",
            "publishedAt": "2022-08-30T08:35:00Z",
            "content": "Aug 30 (Reuters) - Defending champions Thailand will face last year's runners-up Indonesia in the group phase of the Asean Football Federation Championship after the draw was made on Tuesday.\r\nThaila… [+1186 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "PA Media",
            "title": "Ellen White announces retirement from football after England’s Euro 2022 win",
            "description": "<ul><li>England’s all-time leading goal scorer retires at age of 33</li><li>White: ‘My dreams came true winning the Euros’</li></ul>The England and Manchester City forward Ellen White has announced her retirement from professional football. White hangs up her…",
            "url": "https://amp.theguardian.com/football/2022/aug/22/ellen-white-announces-retirement-from-football-england-manchester-city-euro-2022",
            "urlToImage": "https://i.guim.co.uk/img/media/3fd9804fe0814ae320137e743cd8ff6457df2da5/0_80_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fb76d77aa3d1f72c6108ea11c6210b38",
            "publishedAt": "2022-08-22T15:37:15Z",
            "content": "The England and Manchester City forward Ellen White has announced her retirement at the age of 33, saying all her football dreams came true in winning Euro 2022. Englands all-time record goalscorer w… [+3348 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Barry Glendenning",
            "title": "The Fiver | Football’s unseemly, increasingly obscene, global trolley-dash",
            "description": "Sign up now! Sign up now! Sign up now? Sign up now!And breathe. The Sky Sports Countdown Clock has finally hit zero. Fabrizio Romano has switched off his phone and gone for a long, well-earned lie down. The legions of football fans on Social Media Disgraces w…",
            "url": "https://amp.theguardian.com/football/2022/sep/02/the-fiver-transfer-window",
            "urlToImage": "https://i.guim.co.uk/img/media/8bd204fc2a0d7b4e17c7c29bd214b2eec7cf77e7/273_324_3603_2163/master/3603.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=30ec9703958e2599d870cb3572bdd43b",
            "publishedAt": "2022-09-02T14:56:01Z",
            "content": "PUTTING THE GROSS INTO GROSS SPEND\r\nAnd breathe. The Sky Sports Countdown Clock has finally hit zero. Fabrizio Romano has switched off his phone and gone for a long, well-earned lie down. The legions… [+7295 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Indian federation asks FIFA to lift suspension - Reuters",
            "description": "India's football association has asked world governing body FIFA to lift the suspension imposed on it after the mandate of a court-appointed committee to govern the sport in the country was terminated this week.",
            "url": "https://www.reuters.com/lifestyle/sports/indian-federation-asks-fifa-lift-suspension-2022-08-24/",
            "urlToImage": "https://www.reuters.com/resizer/7fxS4vpC5Yj5O7fB0zH-X4X1-iM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NNT5NBN3UFNCRHAV4KRD3K4OUQ.jpg",
            "publishedAt": "2022-08-24T06:08:00Z",
            "content": "MUMBAI, Aug 24 (Reuters) - India's football association has asked world governing body FIFA to lift the suspension imposed on it after the mandate of a court-appointed committee to govern the sport i… [+1845 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Germany's football body to hire Deutsche Bank for media rights sale - Bloomberg News - Reuters",
            "description": "Germany's football body has appointed Deutsche Bank AG <a href=\"https://www.reuters.com/companies/DBKGn.DE\" target=\"_blank\">(DBKGn.DE)</a> to lead the possible sale of a package of media rights, Bloomberg News reported on Monday, citing people familiar with t…",
            "url": "https://www.reuters.com/business/media-telecom/germanys-football-body-hire-deutsche-bank-media-rights-sale-bloomberg-news-2022-08-22/",
            "urlToImage": "https://www.reuters.com/resizer/PklYWECq6j3IqSPmmHIxjcvVl4o=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NDA6F7HMRBIQPBUXSMIEADEWB4.jpg",
            "publishedAt": "2022-08-22T11:26:00Z",
            "content": "Aug 22 (Reuters) - Germany's football body has appointed Deutsche Bank AG (DBKGn.DE) to lead the possible sale of a package of media rights, Bloomberg News reported on Monday, citing people familiar … [+1616 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Flores' lawyers call out NFL's arbitration system - Reuters",
            "description": "Attorneys for former Miami Dolphins head coach Brian Flores and two other coaches filed on Wednesday a response to the National Football League's motion to force arbitration on their racial discrimination lawsuit against the league.",
            "url": "https://www.reuters.com/legal/flores-lawyers-call-out-nfls-arbitration-system-2022-08-31/",
            "urlToImage": "https://www.reuters.com/resizer/r-qu4cux2-18IZywO7I_P2_Exq0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DMRQ2E3MCNOJLH3LMAHQIS4NUA.jpg",
            "publishedAt": "2022-09-01T01:13:00Z",
            "content": "Aug 31 (Reuters) - Attorneys for former Miami Dolphins head coach Brian Flores and two other coaches filed on Wednesday a response to the National Football League's motion to force arbitration on the… [+1587 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "New Zealand hit back to beat Philippines for back-to-back wins - Reuters",
            "description": "The Football Ferns notched up their second successive win on Tuesday as they continued their preparations for co-hosting the Women's World Cup next year, coming from behind to beat Philippines 2-1 in Fullerton, California.",
            "url": "https://www.reuters.com/lifestyle/sports/new-zealand-hit-back-beat-philippines-back-to-back-wins-2022-09-07/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=109",
            "publishedAt": "2022-09-07T04:02:00Z",
            "content": "Sept 7 (Reuters) - The Football Ferns notched up their second successive win on Tuesday as they continued their preparations for co-hosting the Women's World Cup next year, coming from behind to beat… [+1294 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "FIFA report shows $5 bln spent on international transfers in latest window - Reuters",
            "description": "The number of international transfers in men's football hit an all-time high as $5 billion was spent in total fees during the latest transfer window, a report by world soccer's governing body FIFA said on Thursday.",
            "url": "https://www.reuters.com/lifestyle/sports/fifa-report-shows-5-bln-spent-international-transfers-latest-window-2022-09-08/",
            "urlToImage": "https://www.reuters.com/resizer/I7NV2DYIBKSCWYX-ahWMgtDmu3o=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ASESMK7PMVPW5B4W7TAKV3RQOE.jpg",
            "publishedAt": "2022-09-08T15:05:00Z",
            "content": "Sept 8 (Reuters) - The number of international transfers in men's football hit an all-time high as $5 billion was spent in total fees during the latest transfer window, a report by world soccer's gov… [+1696 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Ex-football star Herschel Walker's woes hurt Republican chance of taking U.S. Senate - Reuters",
            "description": "Republican hopes of taking control of the U.S. Senate in November could hinge on former football star Herschel Walker, a first-time candidate endorsed by Donald Trump, whose campaign appears to be lagging behind other Republicans in Georgia.",
            "url": "https://www.reuters.com/world/us/ex-football-star-herschel-walkers-woes-hurt-republican-chance-taking-us-senate-2022-08-25/",
            "urlToImage": "https://www.reuters.com/resizer/vLXAHbvc9K7EjTnVNyI18sQUynU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/B6G6SK4OTVMH7LVKNF6GEFOLBU.jpg",
            "publishedAt": "2022-08-25T10:11:00Z",
            "content": "WASHINGTON, Aug 25 (Reuters) - Republican hopes of taking control of the U.S. Senate in November could hinge on former football star Herschel Walker, a first-time candidate endorsed by Donald Trump, … [+5400 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Klopp hails 'perfect football match' in record-equalling Liverpool win - Reuters",
            "description": "Liverpool coach Juergen Klopp insisted his side proved a point to themselves in their record-equalling 9-0 Premier League win over newly-promoted Bournemouth on Saturday, an encounter he labelled the \"perfect football match.\"",
            "url": "https://www.reuters.com/lifestyle/sports/klopp-hails-perfect-football-match-record-equalling-liverpool-win-2022-08-27/",
            "urlToImage": "https://www.reuters.com/resizer/J-EbbYyFx35-V1KVKqmwoRnpQ6A=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6LAMZT25LZKU7NMIFBAG52SGBQ.jpg",
            "publishedAt": "2022-08-27T17:50:00Z",
            "content": "LIVERPOOL, England, Aug 27 (Reuters) - Liverpool coach Juergen Klopp insisted his side proved a point to themselves in their record-equalling 9-0 Premier League win over newly-promoted Bournemouth on… [+2168 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Football returns to war-torn Ukraine as Shakhtar draw with Metalist 1925 - Reuters",
            "description": "Shakhtar Donetsk and Metalist 1925 played out a 0-0 draw in Kyiv’s empty Olympic Stadium on Tuesday as competitive football returned to war-torn Ukraine with the start of the country’s new Premier League season.",
            "url": "https://www.reuters.com/lifestyle/sports/football-returns-war-torn-ukraine-shakhtar-draw-with-metalist-1925-2022-08-23/",
            "urlToImage": "https://www.reuters.com/resizer/_crQ0ZIcCuDJxQBel0-IpwawviU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PYBN33LNB5JERCYFO7BYBV7NHI.jpg",
            "publishedAt": "2022-08-23T12:23:00Z",
            "content": "Aug 23 (Reuters) - Shakhtar Donetsk and Metalist 1925 played out a 0-0 draw in Kyivs empty Olympic Stadium on Tuesday as competitive football returned to war-torn Ukraine with the start of the countr… [+2699 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Fox Sports settles US Football League trademark fight with 80s team owners - Reuters",
            "description": "Fox Sports Inc has settled a lawsuit brought by team owners and executives from the 1980s-era United States Football League over Fox's name and branding for its new league of the same name.",
            "url": "https://www.reuters.com/legal/litigation/fox-sports-settles-us-football-league-trademark-fight-with-80s-team-owners-2022-08-23/",
            "urlToImage": "https://www.reuters.com/resizer/20JuiFFf8TZsaxPQRRxFGqNKdKc=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/546CPQPGCBOJNCY2KU47C6YWXI.jpg",
            "publishedAt": "2022-08-23T16:48:00Z",
            "content": "<ul><li>\r\nSummary</li><li>\r\nLaw firms</li><li>\r\nRelated documents</li></ul>\r\n(Reuters) - Fox Sports Inc has settled a lawsuit brought by team owners and executives from the 1980s-era United States Fo… [+1984 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Cowboys retain title of NFL's most valuable team - Reuters",
            "description": "The Dallas Cowboys are the most valuable National Football League (NFL) team for a 16th consecutive year, according to the annual list published by business magazine <a href=\"https://www.forbes.com/?sh=623ba6792254\" target=\"_blank\">Forbes</a> on Monday.",
            "url": "https://www.reuters.com/lifestyle/sports/cowboys-retain-title-nfls-most-valuable-team-2022-08-22/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=108",
            "publishedAt": "2022-08-22T15:09:00Z",
            "content": "Aug 22 (Reuters) - The Dallas Cowboys are the most valuable National Football League (NFL) team for a 16th consecutive year, according to the annual list published by business magazine Forbes on Mond… [+883 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Wales hand interim boss Page four-year contract - Reuters",
            "description": "Wales interim manager Rob Page has signed a four-year contract that will take him through the 2026 World Cup qualifying campaign, the Football Association of Wales said on Tuesday.",
            "url": "https://www.reuters.com/lifestyle/sports/wales-hand-interim-boss-page-four-year-contract-2022-09-13/",
            "urlToImage": "https://www.reuters.com/resizer/AembdJO6Zhk-Ju_8f2X6jq34ktg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XFVQES5Z25PZLH3CKAXLGA5OJA.jpg",
            "publishedAt": "2022-09-13T01:49:00Z",
            "content": "Sept 13 (Reuters) - Wales interim manager Rob Page has signed a four-year contract that will take him through the 2026 World Cup qualifying campaign, the Football Association of Wales said on Tuesday… [+1398 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Australia back in U20 Asian Cup qualifiers after games moved from Iraq's Basra - Reuters",
            "description": "Football Australia said on Wednesday their Under-20 side had been reinstated into the qualifying competition for next year's U20 Asian Cup after their group games were moved out of the Iraqi city of Basra.",
            "url": "https://www.reuters.com/lifestyle/sports/australia-back-u20-asian-cup-qualifiers-after-games-moved-iraqs-basra-2022-09-14/",
            "urlToImage": "https://www.reuters.com/resizer/7EWqdPrA5mDQneEdSFzVq0lCgB8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JN6PHGGD6BPJXKMN4YIBXJUWVU.jpg",
            "publishedAt": "2022-09-14T06:12:00Z",
            "content": "Sept 14 (Reuters) - Football Australia said on Wednesday their Under-20 side had been reinstated into the qualifying competition for next year's U20 Asian Cup after their group games were moved out o… [+566 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Serena does not rule out return, saying NFL's Brady started 'a really cool trend' - Reuters",
            "description": "Serena Williams may have decided to step away from tennis but on Wednesday teased that there could be more to her illustrious career when she singled out decorated NFL quarterback Tom Brady's short-lived retirement from American football.",
            "url": "https://www.reuters.com/lifestyle/sports/serena-does-not-rule-out-return-saying-nfls-brady-started-a-really-cool-trend-2022-09-14/",
            "urlToImage": "https://www.reuters.com/resizer/8fU9XR0DS7HmXqQOik6wpuRKah8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OY2XLM6TTRJRNGAR3DDIJC2TYU.jpg",
            "publishedAt": "2022-09-14T20:57:00Z",
            "content": "Sept 14 (Reuters) - Serena Williams may have decided to step away from tennis but on Wednesday teased that there could be more to her illustrious career when she singled out decorated NFL quarterback… [+1162 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Rival school's hometown offers Jackson football team help over water woes - Reuters",
            "description": "After Mississippi's capital lost running water this week due to a treatment plant failure, Jackson State University football coach Deion Sanders shared a video on Instagram saying he was in \"crisis mode\" to keep his team practicing.",
            "url": "https://www.reuters.com/world/us/rival-schools-hometown-offers-jackson-football-team-help-over-water-woes-2022-08-31/",
            "urlToImage": "https://www.reuters.com/resizer/9vQEiZaFlCVYIqtzrOhAYY-PJQM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AC73ITYTP5NSHM546B5HUUMULU.jpg",
            "publishedAt": "2022-08-31T19:03:00Z",
            "content": "JACKSON, Miss., Aug 31 (Reuters) - After Mississippi's capital lost running water this week due to a treatment plant failure, Jackson State University football coach Deion Sanders shared a video on I… [+2319 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Flores' lawyers call out NFL's arbitration system - Reuters",
            "description": "Attorneys for former Miami Dolphins head coach Brian Flores and two other coaches filed on Wednesday a response to the National Football League's motion to force arbitration on their racial discrimination lawsuit against the league.",
            "url": "https://www.reuters.com/lifestyle/sports/flores-lawyers-call-out-nfls-arbitration-system-2022-08-31/",
            "urlToImage": "https://www.reuters.com/resizer/r-qu4cux2-18IZywO7I_P2_Exq0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DMRQ2E3MCNOJLH3LMAHQIS4NUA.jpg",
            "publishedAt": "2022-08-31T18:34:00Z",
            "content": "Aug 31 (Reuters) - Attorneys for former Miami Dolphins head coach Brian Flores and two other coaches filed on Wednesday a response to the National Football League's motion to force arbitration on the… [+1587 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Iranians confirm Queiroz's coaching return for World Cup - Reuters",
            "description": "Carlos Queiroz will lead Iran to November's World Cup finals after the country's football federation confirmed on Wednesday that the Portuguese would return to take charge of the team in Qatar.",
            "url": "https://www.reuters.com/lifestyle/sports/iranians-confirm-queirozs-coaching-return-world-cup-2022-09-07/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=109",
            "publishedAt": "2022-09-07T13:30:00Z",
            "content": "Sept 7 (Reuters) - Carlos Queiroz will lead Iran to November's World Cup finals after the country's football federation confirmed on Wednesday that the Portuguese would return to take charge of the t… [+2019 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Premier League postpones next round of fixtures to mourn Queen - Reuters.com",
            "description": "The top flight Premier League and the English Football League (EFL) have postponed their next round of fixtures as a mark of respectfollowing the death of Queen Elizabeth, they said on Friday.",
            "url": "https://www.reuters.com/lifestyle/sports/premier-league-postpones-next-round-fixtures-mourn-queen-2022-09-09/",
            "urlToImage": "https://www.reuters.com/resizer/5rPNcE44Fi-_JUuzg8UO2WOqfHc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4RJMILFGWRLDJKAMTMXDM3GVHU.jpg",
            "publishedAt": "2022-09-09T10:39:00Z",
            "content": "Sept 9 (Reuters) - The top flight Premier League and the English Football League (EFL) have postponed their next round of fixtures as a mark of respectfollowing the death of Queen Elizabeth, they sai… [+1013 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "England captain Hunter defends governing body's decision to cut women's pay - Reuters",
            "description": "Rugby Football Union's decision to halve women's match fees for World Cup warm-up fixtures was defended on Monday by England captain Sarah Hunter, who said the pay cuts had been agreed months ago.",
            "url": "https://www.reuters.com/lifestyle/england-captain-hunter-defends-governing-bodys-decision-cut-womens-pay-2022-09-12/",
            "urlToImage": "https://www.reuters.com/resizer/m8CpzvUdfuKlwE3ehaFTDqhSnkw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F2SEYQ4Y35KAPEO2N5PDPAMI74.jpg",
            "publishedAt": "2022-09-12T21:39:00Z",
            "content": "Sept 12 (Reuters) - Rugby Football Union's decision to halve women's match fees for World Cup warm-up fixtures was defended on Monday by England captain Sarah Hunter, who said the pay cuts had been a… [+1567 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Majority of fans want FIFA to compensate Qatar's migrant workers - Amnesty - Reuters",
            "description": "A majority of football fans from 15 countries would support FIFA compensating migrant workers in Qatar for human rights violations during the country's preparations for the 2022 World Cup, Amnesty International said on Thursday.",
            "url": "https://www.reuters.com/lifestyle/sports/majority-fans-want-fifa-compensate-qatars-migrant-workers-amnesty-2022-09-15/",
            "urlToImage": "https://www.reuters.com/resizer/UOH4OPHbyEztGCReL7ET88od1KQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PVBAP7GS7VIUBM5LF5VYWKDLUA.jpg",
            "publishedAt": "2022-09-15T00:03:00Z",
            "content": "Sept 15 (Reuters) - A majority of football fans from 15 countries would support FIFA compensating migrant workers in Qatar for human rights violations during the country's preparations for the 2022 W… [+2738 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Resumption of football shows Ukraine hasn't given up, says Zinchenko - Reuters",
            "description": "The return of competitive football to war-torn Ukraine plays a vital role in showing the rest of the world that people have not given up and are trying to carry on with their lives, Arsenal defender Oleksandr Zinchenko said on Wednesday.",
            "url": "https://www.reuters.com/lifestyle/sports/resumption-football-shows-ukraine-hasnt-given-up-says-zinchenko-2022-08-24/",
            "urlToImage": "https://www.reuters.com/resizer/oe-B0jE-hoFmGX0d_ZOOGQiHOTA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LEZBHD3IWZMJNLIGL2YLHHR7MM.jpg",
            "publishedAt": "2022-08-24T18:53:00Z",
            "content": "Aug 24 (Reuters) - The return of competitive football to war-torn Ukraine plays a vital role in showing the rest of the world that people have not given up and are trying to carry on with their lives… [+1363 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Raheem Sterling: Chelsea winger left 'fuming' by Manchester City exit",
            "description": "Chelsea forward Raheem Sterling admits he was left \"fuming and raging\" by his Manchester City exit.",
            "url": "https://www.bbc.co.uk/sport/football/62617088",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13DF6/production/_126389318_sterling.jpg",
            "publishedAt": "2022-08-20T11:34:04Z",
            "content": "Sterling is still awaiting his first Chelsea goal\r\nChelsea forward Raheem Sterling says he was left \"fuming\" and \"raging\" by his exit from Manchester City.\r\nHe started just 23 league games last seaso… [+1162 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "jhart@insider.com (Jordan Hart)",
            "title": "Colleges are rolling out premium football game day experiences like climate-controlled lounges and halftime appetizers in an effort to boost attendance",
            "description": "College football games are getting more extravagant across the country after a drop in fan attendance sparked stadium renovations and new amenities.",
            "url": "https://www.businessinsider.com/colleges-debut-premium-football-game-day-experiences-boost-attendance-2022-9",
            "urlToImage": "https://i.insider.com/631ca438c3104e0012506c91?width=1200&format=jpeg",
            "publishedAt": "2022-09-10T15:53:43Z",
            "content": "Fans of college football will soon be offered more luxurious game day experiences as schools strategize how to improve turnout in their stadiums.\r\nThe 2021 Division I season saw an average of attenda… [+2299 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Anita Asante",
            "title": "Jill Scott was a machine on the pitch and a crazy, dancing comedian off it | Anita Asante",
            "description": "My England teammate has retired from football after winning Euro 2022 and I wonder if we will ever see her like againWelcome to Moving the Goalposts, the Guardian’s free women’s football newsletter. Here’s an extract from this week’s edition. To receive the f…",
            "url": "https://amp.theguardian.com/football/2022/aug/24/jill-scott-england-retirement-anita-asante-moving-goalposts",
            "urlToImage": "https://i.guim.co.uk/img/media/c791c26fec8ea68964923de9dbf4335b379ed7fd/0_226_7304_4385/master/7304.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=bca4da27e26797b6cae2f4be350c832a",
            "publishedAt": "2022-08-24T10:46:54Z",
            "content": "Welcome to Moving the Goalposts, the Guardians free womens football newsletter. Heres an extract from this weeks edition. To receive the full version once a week, just pop your email in below:\r\nJill … [+5226 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "David Hytner",
            "title": "Stuart Lawrence: ‘Stephen would be in awe of how the tournament has grown’",
            "description": "After football united at a tournament to honour Stephen Lawrence, his brother discusses its value and his enduring painStuart Lawrence is addressing his audience on the spectacular playing fields of Danes Hill School in Surrey, one comprised mainly of young f…",
            "url": "https://amp.theguardian.com/football/2022/sep/11/stuart-lawrence-stephen-lawrence-tournament-football",
            "urlToImage": "https://i.guim.co.uk/img/media/1975e1cb62ddfa01df55c5f77398fb9068311c3a/0_538_8067_4840/master/8067.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=806291684e88998d5b2dd85798cf1108",
            "publishedAt": "2022-09-11T07:00:25Z",
            "content": "Stuart Lawrence is addressing his audience on the spectacular playing fields of Danes Hill School in Surrey, one comprised mainly of young football prospects and their parents, and he finds himself r… [+7301 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Phil Harrison and Hollie Richardson",
            "title": "Welcome to Wrexham to Selling The OC: the seven best shows to stream this week",
            "description": "The Hollywood takeover of Wrexham football club by Ryan Reynolds and Rob McElhenny is charmingly profiled, while a new Selling Sunset spin-off injects sexual tension into the format Continue reading...",
            "url": "https://amp.theguardian.com/tv-and-radio/2022/aug/19/welcome-to-wrexham-to-selling-the-oc-the-seven-best-shows-to-stream-this-week",
            "urlToImage": "https://i.guim.co.uk/img/media/42f54052da9c8b337b6a82a39da817eca4203d36/16_223_5578_3348/master/5578.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9429050e046f34720d57d79410f969ae",
            "publishedAt": "2022-08-19T06:00:08Z",
            "content": "Pick of the week\r\nWelcome to Wrexham\r\nThere is an inbuilt flaw to a so-called rags-to-riches football story such as this one. Namely, that Wrexham AFC ceased to be a true underdog club the moment Hol… [+4607 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Nick Ames at NSC Olimpiyskiy",
            "title": "Ukraine’s football restarts with flags, a message from Zelenskiy but no crowd",
            "description": "Kick-off at Shakhtar’s game against Metalist was performed by an injured soldier as a path through the darkness was markedEarly on Tuesday morning, Igor Jovicevic had been jolted from sleep by the air raid alarm. He was far from alone in that and it brought h…",
            "url": "https://amp.theguardian.com/football/2022/aug/23/ukraine-football-restarts-flags-message-from-zelenskiy-no-crowd",
            "urlToImage": "https://i.guim.co.uk/img/media/3c616f2b10f5177110712e2a242f401665caefb2/779_1189_4098_2459/master/4098.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=819ef833d409c1b35246babcad5fa69b",
            "publishedAt": "2022-08-23T16:11:38Z",
            "content": "Early on Tuesday morning, Igor Jovicevic had been jolted from sleep by the air raid alarm. He was far from alone in that and it brought home, in a way that disconcerted him, the jarring contrast with… [+6051 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Max Rushden",
            "title": "Time-wasting in football needs tackling but drama at the death must live on | Max Rushden",
            "description": "Manchester United pulled out the stops to run down the clock against Liverpool but we would miss waiting for the whistleIn the 76th minute of Manchester United’s win over Liverpool Lisandro Martínez boots it clear and collapses with cramp. As he lies motionle…",
            "url": "https://amp.theguardian.com/football/blog/2022/aug/25/time-wasting-needs-tackling-manchester-united-liverpool",
            "urlToImage": "https://i.guim.co.uk/img/media/5f95bb3f27e3eee3ef2c2a2e677f413a511ce33e/1533_196_2345_1407/master/2345.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=efe2eafd1f2c5a31547af604877d573c",
            "publishedAt": "2022-08-25T11:00:02Z",
            "content": "In the 76th minute of Manchester Uniteds win over Liverpool Lisandro Martínez boots it clear and collapses with cramp. As he lies motionless in his six-yard box like an extra from 1917, Michael Olive… [+6050 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Barry Glendenning",
            "title": "The Fiver | The kind of scenes that every right-minded football fan wants to see",
            "description": "Sign up now! Sign up now! Sign up now? Sign up now!While Manchester United’s shellacking at the hands of Brentford was undoubtedly the funniest match of the Premier League weekend, the Archbishop Desmond played out between Chelsea and Tottenham at Stamford Br…",
            "url": "https://amp.theguardian.com/football/2022/aug/15/the-fiver-tuchel-conte-handshake",
            "urlToImage": "https://i.guim.co.uk/img/media/9bebe00e443bbb0c3294fc6a8f485a87d12c5021/0_38_1991_1194/master/1991.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=62d60012e248d680ef9788faed913311",
            "publishedAt": "2022-08-15T15:25:31Z",
            "content": "HOW ABOUT WE SHAKE ON IT?\r\nWhile Manchester Uniteds shellacking at the hands of Brentford was undoubtedly the funniest match of the Premier League weekend, the Archbishop Desmond played out between C… [+7042 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by Max Rushden with Barry Glendenning, Robyn Cowen, Jonathan Liew and Ben Fisher. Produced by Joel Grove and executive produced by Max Sanderson.",
            "title": "Will the Glazers sell? And a Premier League preview – Football Weekly Extra",
            "description": "Max Rushden is joined by Barry Glendenning, Robyn Cowen, Jonathan Liew and Ben Fisher to preview the Premier League games this weekend and look over the latest action from the EFLRate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast an…",
            "url": "https://www.theguardian.com/football/audio/2022/aug/18/will-the-glazers-sell-manchester-united-and-a-premier-league-preview-football-weekly-extra-podcast",
            "urlToImage": "https://i.guim.co.uk/img/media/bf0958f5acb83ac4da56e4db61a5f4d4b8c962d8/0_85_2168_1301/master/2168.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=61226249caa46913f6eae78a4d2afe3e",
            "publishedAt": "2022-08-18T12:09:33Z",
            "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nToday: the Manchester United situation gets more… [+367 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by Max Rushdenwith Barry Glendenning, Paul MacInnesand Robyn Cowen; produced by Lucy Oliva; the executive producer was Christian Bennett.",
            "title": "Chelsea the latest crisis club and Mitrovic is on fire – Football Weekly",
            "description": "Max Rushden is joined by Barry Glendenning, Paul MacInnes and Robyn Cowen to wrap up Chelsea’s sorry showing on the south coast, another three points for surprise package Fulham and time-wasting at Elland RoadThe panel begin at St Mary’s as Chelsea are the la…",
            "url": "https://www.theguardian.com/football/audio/2022/aug/31/chelsea-the-latest-crisis-club-and-mitrovic-is-on-fire-football-weekly",
            "urlToImage": "https://i.guim.co.uk/img/media/b6e65fe466cb5c67cd02f0540c0416fc5bd1f294/0_152_3690_2214/master/3690.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=160e8959ebafe7f3f6cc103be520914f",
            "publishedAt": "2022-08-31T14:31:55Z",
            "content": "The panel begin at St Marys as Chelsea are the latest club to pick up the crisis baton following the 2-1 defeat by Southampton.\r\nElsewhere, it turns out Fulham are really quite good as Aleksandar Mit… [+352 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian sport",
            "title": "Which football clubs are named after mythological gods and heroes? | The Knowledge",
            "description": "Plus: more record runners-up streaks, more longstanding record signings and making most appearances for dad’s team<ul><li>Mail us your questions or tweet @TheKnowledge_GU</li></ul>“In Iceland there are a couple of football clubs named after the Norse god Thor…",
            "url": "https://amp.theguardian.com/football/2022/aug/17/which-football-clubs-are-named-after-mythological-gods-goddesses-knowledge",
            "urlToImage": "https://i.guim.co.uk/img/media/6acb34a3fd6bb9bb3b053c5ee9823ae5a07c2c5d/0_527_3516_2110/master/3516.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=12f5424722fc87bf17b9787456e395f6",
            "publishedAt": "2022-08-17T07:00:09Z",
            "content": "In Iceland there are a couple of football clubs named after the Norse god Thor, and another after his son Magni, writes Kári Tulinius. Hertha Berlin were named after a ship, but that ship was named f… [+8673 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by Max Rushden with Barry Glendenning, Paul MacInnes and Barney Ronay",
            "title": "Manchester United’s new low and men being Proper Men – Football Weekly",
            "description": "Max Rushden, Barney Ronay, Barry Glendenning and Paul Macinnes review the weekend’s Premier League action and much, much moreRate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twi…",
            "url": "https://www.theguardian.com/football/audio/2022/aug/15/manchester-united-new-low-and-men-football-weekly-podcast",
            "urlToImage": "https://i.guim.co.uk/img/media/c2cbe74a999c27b1cea1115197bdb3412ba0b77b/0_206_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=95cfe19a4f2faf4dcd0145ba82eebd0b",
            "publishedAt": "2022-08-15T14:01:20Z",
            "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nManchester United are bottom, while Manchester C… [+535 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Rebecca Nicholson",
            "title": "Welcome to Wrexham review – Ryan Reynolds is less interesting than Welsh football fans",
            "description": "This gripping six-parter follows Reynolds and Rob McElhenney’s takeover of Wales’ oldest club, but the real stars of its zippy episodes are the localsWelcome to Wrexham (Disney+) tells the story of how Ryan Reynolds and Rob McElhenney, internet friends and Ho…",
            "url": "https://amp.theguardian.com/tv-and-radio/2022/aug/25/welcome-to-wrexham-review-ryan-reynolds-is-less-interesting-than-welsh-football-fans",
            "urlToImage": "https://i.guim.co.uk/img/media/fa64f7d40a6129692c4f447ac6535e43bbf70f9c/0_136_5606_3366/master/5606.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTMucG5n&enable=upscale&s=bc0d70dedf892cfe7c1a2daf6cea80fd",
            "publishedAt": "2022-08-25T05:00:00Z",
            "content": "Welcome to Wrexham (Disney+) tells the story of how Ryan Reynolds and Rob McElhenney, internet friends and Hollywood stars with seemingly little knowledge of football but a clear enthusiasm for sport… [+4376 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Luke McLaughlin",
            "title": "Football transfer rumours: Chelsea to seal £60m deal for Anthony Gordon?",
            "description": "Today’s gossip is contemplating football’s ficklenessThings are changing fast at Old Trafford after Manchester United’s epic win over Liverpool, with a number of potential arrivals and departures likely before the transfer window is bolted shut.Antony of Ajax…",
            "url": "https://amp.theguardian.com/football/2022/aug/23/transfer-rumours-chelsea-anthony-gordon-manchester-united-antony-cody-gakpo-cristiano-ronaldo",
            "urlToImage": "https://i.guim.co.uk/img/media/1f6a7032ead4d697ca8529521f269bc379302c85/0_249_4722_2833/master/4722.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=48e99b6cdf5d441660ffd9566b3d2542",
            "publishedAt": "2022-08-23T08:40:54Z",
            "content": "Things are changing fast at Old Trafford after Manchester Uniteds epic win over Liverpool, with a number of potential arrivals and departures likely before the transfer window is bolted shut.\r\nAntony… [+3680 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by Max Rushden, with Barry Glendenning, Jonathan Wilson and Barney Ronay. Produced by Silas Gray, executive produced by Christian Bennett.",
            "title": "VAR infuriates and Manchester United end Gunners perfect start – Football Weekly",
            "description": "Max Rushden, Barry Glendenning, Jonathan Wilson and Barney Ronay discuss VAR and the weekend’s Premier League action.Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and…",
            "url": "https://www.theguardian.com/tv-and-radio/audio/2022/sep/05/var-infuriates-and-manchester-united-end-gunners-perfect-start-football-weekly",
            "urlToImage": "https://i.guim.co.uk/img/media/90c96d82bb82f3687e114345c4b806b609bfc983/0_11_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=90ffaf6e3623bde0c6c9df82d2fe8cac",
            "publishedAt": "2022-09-05T12:58:34Z",
            "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nOn the podcast: On a weekend which featured many… [+764 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian sport",
            "title": "What are the most calamitous substitutions in football history? | The Knowledge",
            "description": "Plus: players out-scoring teams over a season, the first reference to a ‘great escape’ and more<ul><li>Mail us your questions or tweet @TheKnowledge_GU</li></ul>“During the Red Star v Maccabi Haifa match, Milan Pavkov entered the pitch in the 78th minute and …",
            "url": "https://amp.theguardian.com/football/2022/sep/07/what-are-the-most-calamitous-substitutions-in-football-history-knowledge",
            "urlToImage": "https://i.guim.co.uk/img/media/4872f6e727f3a24f1418d048260f18919843ac57/0_95_1616_970/master/1616.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=88bf74ba07b1afb1f2bd6d1dfcbc753d",
            "publishedAt": "2022-09-07T07:00:41Z",
            "content": "During the Red Star v Maccabi Haifa match, Milan Pavkov entered the pitch in the 78th minute and scored an own goal in the 90th minute. Surely weve never seen a more catastrophic substitution before?… [+8766 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Jason Stockwood",
            "title": "Cancellation of football fixtures means a chance for solidarity was missed | Jason Stockwood",
            "description": "Matches are a place of shared experience in an atomised world – they should have gone ahead following the Queen’s deathLike most people, I was deeply saddened by the news about Queen Elizabeth. Events over the past few days have demonstrated how important the…",
            "url": "https://amp.theguardian.com/football/blog/2022/sep/11/cancellation-football-fixtures-means-chance-solidarity-missed",
            "urlToImage": "https://i.guim.co.uk/img/media/f931e63ed1b3a5613f64ec1d73043d54e276e518/78_14_2137_1282/master/2137.png?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=d4d9ce0d306d1e988f5bbe2d68c8e6c5",
            "publishedAt": "2022-09-11T18:00:38Z",
            "content": "Like most people, I was deeply saddened by the news about Queen Elizabeth. Events over the past few days have demonstrated how important the royal family is to our sense of identity as a nation. Even… [+5196 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by Max Rushden with Barry Glendenning, Philippe Auclair and Rory Smith. Produced by Joel Grove and our executive producer is Danielle Stephens.",
            "title": "Liverpool leave it late and Spurs stutter in Champions League - Football Weekly",
            "description": "Max Rushden is joined by Barry Glendenning, Philippe Auclair and Rory Smith to discuss the latest action in the Champions LeagueRate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, …",
            "url": "https://www.theguardian.com/football/audio/2022/sep/14/liverpool-leave-it-late-and-spurs-stutter-in-champions-league-football-weekly",
            "urlToImage": "https://i.guim.co.uk/img/media/ae4abfb119e9de36ebf0bf6e2584bb98844c5e35/0_196_2926_1756/master/2926.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e15ce742f9b665de00109836c94dcaea",
            "publishedAt": "2022-09-14T12:13:38Z",
            "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nToday: Liverpool get an important win over Ajax … [+411 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by Max Rushden with Barry Glendenning, Jordan Jarrett-Bryan, Ewan Murray and Jonathan Liew",
            "title": "Klopp-age time at Anfield, while Aston Villa let it slip – Football Weekly Extra",
            "description": "Max Rushden is joined by Ewan Murray, Jonathan Liew, Jordan Jarrett-Bryan and Barry Glendenning to review all the midweek actionRate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, …",
            "url": "https://www.theguardian.com/football/audio/2022/sep/01/football-weekly-extra-podcast-liverpool-newcastle-arsenal-aston-villa-manchester-city",
            "urlToImage": "https://i.guim.co.uk/img/media/04fa5079dceca86547918d79137e9559012fb205/0_13_4567_2743/master/4567.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d1603842868a1eb8ca888028b78589e6",
            "publishedAt": "2022-09-01T13:59:20Z",
            "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nToday on the pod: a last-minute sickener for New… [+543 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Jonathan Wilson",
            "title": "Pep Guardiola plots to evolve football once again with his use of Erling Haaland | Jonathan Wilson",
            "description": "The Manchester City manager using an orthodox central striker is a remarkable shift away from his successful attacking formulaIn Manchester City’s 4-0 win over Bournemouth last Saturday, Erling Haaland touched the ball eight times in the 73 minutes he was on …",
            "url": "https://amp.theguardian.com/football/2022/aug/20/pep-guardiola-plots-to-evolve-football-once-again-with-his-use-of-erling-haaland-manchester-city",
            "urlToImage": "https://i.guim.co.uk/img/media/77041922820f63e695abd9785bef3a754f5accf9/36_77_3815_2290/master/3815.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tb3BpbmlvbnMucG5n&enable=upscale&s=473f95e46e445d994e9df5e5278e7b48",
            "publishedAt": "2022-08-20T19:00:47Z",
            "content": "In Manchester Citys 4-0 win over Bournemouth last Saturday, Erling Haaland touched the ball eight times in the 73 minutes he was on the pitch.\r\nFor 27 minutes in the second half, he didnt touch the b… [+6407 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Alex Hess",
            "title": "Liverpool v Bournemouth, Chelsea v Leicester and more: football clockwatch – live!",
            "description": "<ul><li>Updates from the 3pm kick-offs in the Premier League and more</li><li>Live scores: all the goals from around the UK and Europe</li></ul>Erik Ten Hag’s Resurgent United have taken the lead against Southampton, Bruno Fernandes blamming a very tidy volle…",
            "url": "https://www.theguardian.com/football/live/2022/aug/27/liverpool-v-bournemouth-chelsea-v-leicester-and-more-football-clockwatch-live",
            "urlToImage": "https://i.guim.co.uk/img/media/ab86105d546eb3160ed7f83e12d2be78fa77d0ec/0_28_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=f517b0d21afb48ece1fb3dc69332fb80",
            "publishedAt": "2022-08-27T12:41:50Z",
            "content": "Whats your favourite one last job story? Unforgiven (1992)? Heat (1995)? Gone in 60 Seconds (2000)? \r\nOr what about The Saturday 3pm Kick-off (today), which much like Messrs Eastwood, De Niro and Cag… [+1994 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Barry Glendenning",
            "title": "Jack Rodwell’s football journey from England prospect to Sydney outcast | Barry Glendenning",
            "description": "Attempted career reboots for the footballing pariah have amounted to little with his immense talent unfulfilledExplaining the thinking behind his move to Australia in an interview last December, Jack Rodwell professed to have been conflicted before agreeing t…",
            "url": "https://amp.theguardian.com/football/blog/2022/aug/15/jack-rodwells-football-journey-from-england-prospect-to-sydney-outcast",
            "urlToImage": "https://i.guim.co.uk/img/media/80b554e6ea24a37583caf55b7ddfca179f49ad92/0_124_3680_2208/master/3680.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e2a5aa7ca7aa7718ceaa5609e6f52f2e",
            "publishedAt": "2022-08-15T07:00:32Z",
            "content": "Explaining the thinking behind his move to Australia in an interview last December, Jack Rodwell professed to have been conflicted before agreeing to sign for Western Sydney Wanderers, the A-League s… [+5814 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Sirin Kale",
            "title": "The people making a difference: the powerchair football coach leading his team to victory",
            "description": "Chris Hammans started coaching the side after his son Lewis took up the sport. Now, after Lewis’s death, Chris is determined to continueChris Hammans’ son Lewis was football-mad. He got it from his father. The two were close. “He was my best mate,” says Hamma…",
            "url": "https://amp.theguardian.com/lifeandstyle/2022/aug/15/the-people-making-a-difference-the-powerchair-football-coach-leading-his-team-to-victory",
            "urlToImage": "https://i.guim.co.uk/img/media/376577ba58e72d391cf401c945326ea5cc87e7b1/0_401_6619_3972/master/6619.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b71c45e88e19868945d71f8902729130",
            "publishedAt": "2022-08-15T11:00:36Z",
            "content": "Chris Hammans son Lewis was football-mad. He got it from his father. The two were close. He was my best mate, says Hammans, a 52-year-old pharmaceutical production manager from Haywards Heath.\r\nLewis… [+4783 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Scott Murray",
            "title": "The Fiver | Arbitrary fiasco ratings and the glorified tombola of European football",
            "description": "Sign up now! Sign up now! Sign up now? Sign up now!The goal of the season so far was unquestionably scored by Milan Pavkov on Tuesday night. The substitute striker was sent on late by Red Star Belgrade – or Crvena Zvezda, if you like needlessly throwing up ba…",
            "url": "https://amp.theguardian.com/football/2022/aug/25/the-fiver-big-cup-is-back-baby",
            "urlToImage": "https://i.guim.co.uk/img/media/de0c6842b55e921e2dc959c0c62da734b9181232/0_93_5917_3550/master/5917.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=481d51dcfdc1237b5026ad7789afbe6e",
            "publishedAt": "2022-08-25T14:56:07Z",
            "content": "ITS BIG, ITS A CUP, AND ITS BACK, BABY!\r\nThe goal of the season so far was unquestionably scored by Milan Pavkov on Tuesday night. The substitute striker was sent on late by Red Star Belgrade or Crve… [+6884 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by Max Rushden with Barry Glendenning, Nedum Onuoha and Lars Sivertsen. Produced by Joel Grove and executive produced by Danielle Stephens.",
            "title": "Newcastle put Manchester City in a spin and Leeds Marsch on – Football Weekly",
            "description": "Max Rushden is joined by Barry Glendenning, Nedum Onuoha and Lars Sivertsen to discuss a dramatic weekend of Premier League footballRate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebo…",
            "url": "https://www.theguardian.com/football/audio/2022/aug/22/premier-league-review-newcastle-manchester-city-leeds-chelsea-football-weekly-podcast",
            "urlToImage": "https://i.guim.co.uk/img/media/28ed1ea7cbc4424a62fbb0a2269b1cf01d75085a/0_99_3214_1930/master/3214.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a3c09332f16d1bbdcf70a67608b3c1b1",
            "publishedAt": "2022-08-22T11:56:02Z",
            "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nThe panel look back on a thrilling top-flight we… [+598 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Jonathan Grade",
            "title": "Fun, glamour and chaos: how Gazzetta Football Italia won our hearts",
            "description": "The iconic show which brought Serie A to millions of UK screens every Saturday celebrates its 30th anniversary“Welcome to Serie A – the greatest league in the world.” With those words the late Kenneth Wolstenholme kicked off a new era as Serie A became an ins…",
            "url": "https://amp.theguardian.com/football/2022/sep/05/fun-glamour-and-chaos-how-gazzetta-football-italia-won-our-hearts",
            "urlToImage": "https://i.guim.co.uk/img/media/e147c9b7ddb713cf4a482868748510a3eb60e13b/0_0_1536_922/master/1536.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2abfbc0528532b5115cece09b1397645",
            "publishedAt": "2022-09-05T07:00:09Z",
            "content": "Welcome to Serie A the greatest league in the world. With those words the late Kenneth Wolstenholme kicked off a new era as Serie A became an institution in living rooms up and down the United Kingdo… [+4757 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Barry Glendenning",
            "title": "Premier League team news and transfer latest: weekend football countdown – live!",
            "description": "<ul><li>Premier League: 10 things to look out for this weekend</li><li>Get in touch! Email Barry or tweet @bglendenning</li></ul>The Liverpool manager had the press pack up bright and early for his weekend briefing ahead of his team’s Monday night match at Ol…",
            "url": "https://www.theguardian.com/football/live/2022/aug/19/premier-league-team-news-transfers-weekend-football-countdown-live",
            "urlToImage": "https://i.guim.co.uk/img/media/0dd4e51f890f291c1580a35d731b597bf025c126/0_478_7211_4329/master/7211.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=82f60a00fc76e110e576e31659eeb752",
            "publishedAt": "2022-08-19T08:58:39Z",
            "content": "Nottingham Forest: Nottingham Forest boss Steve Cooper insists an exciting challenge lies ahead after his newly promoted clubs well-documented summer trolley dash. Wolves midfielder Morgan Gibbs-Whit… [+3368 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Abené Clayton and agencies",
            "title": "Man accused of shooting Texas youth football coach turns himself in",
            "description": "Yaqub Talib, the brother of ex-NFL cornerback Aqib Talib, is accused of shooting Mike Hickmon after an argument turned physicalThe man accused of shooting to death a beloved Texas youth football coach has turned himself into law enforcement.Yaqub Talib, broth…",
            "url": "https://amp.theguardian.com/us-news/2022/aug/15/texas-youth-football-shooting-suspect",
            "urlToImage": "https://i.guim.co.uk/img/media/51b180fb7122ec389c41725ec01ad1f32dc7a4c5/0_117_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7e265b69ee31b2ae7c704a630da12028",
            "publishedAt": "2022-08-15T19:47:04Z",
            "content": "The man accused of shooting to death a beloved Texas youth football coach has turned himself into law enforcement.\r\nYaqub Talib, brother of retired NFL cornerback Aqib Talib, is accused of shooting M… [+2014 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Reuters",
            "title": "No more Squirrels: Benin football team change their nickname to Cheetahs",
            "description": "<ul><li>National team ditches ‘Les Écureuils’ moniker</li><li>Benin will now be known as ‘Guepards’</li></ul>West African country Benin have opted to ditch their ‘Squirrels’ nickname and will be known as the Cheetahs from Monday, the country’s football federa…",
            "url": "https://amp.theguardian.com/football/2022/aug/22/no-more-squirrels-benin-change-nickname-to-cheetahs",
            "urlToImage": "https://i.guim.co.uk/img/media/733ab579aac36352906bf46dbece804625aa4471/0_148_3500_2099/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=90ca0720ed63e3f338136461648f71d5",
            "publishedAt": "2022-08-22T16:09:17Z",
            "content": "West African country Benin have opted to ditch their Squirrels nickname and will be known as the Cheetahs from Monday, the countrys football federation said.\r\nThe old les Écureuils moniker has long b… [+1731 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Nick Ames in Kyiv",
            "title": "Football to ‘remind what we are dying for’ as Ukraine’s season kicks off | Nick Ames",
            "description": "The Ukrainian FA president, Andriy Pavelko, talks about how they managed to prepare for a season like no otherIn one sense Andriy Pavelko feels prepared for the moment Shakhtar Donetsk and Metalist 1925 kick off a new football season on Tuesday. “When our nat…",
            "url": "https://amp.theguardian.com/football/2022/aug/22/football-ukraine-season-kicks-off",
            "urlToImage": "https://i.guim.co.uk/img/media/dddefeddf45d04950134aaa9f77eb6fb2aca007b/0_293_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b6cc9c5ee356aeff809260fe2db0c168",
            "publishedAt": "2022-08-22T20:40:02Z",
            "content": "In one sense Andriy Pavelko feels prepared for the moment Shakhtar Donetsk and Metalist 1925 kick off a new football season on Tuesday. When our national team played against Scotland in June I cried … [+5748 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by Max Rushden with Barry Glendenning, Ceylon Andi-Hickman, Jonathan Wilson and Nick Ames. Produced by Joel Grove and executive produced by Max Sanderson.",
            "title": "Manchester United bounce back and Ellen White bows out – Football Weekly",
            "description": "Max Rushden is joined by Barry Glendenning, Ceylon Andi-Hickman and Jonathan Wilson discuss Monday night’s game at Old Trafford. Plus: Nick Ames joins from Ukraine, where domestic football is about to resumeRate, review, share on Apple Podcasts, Soundcloud, A…",
            "url": "https://www.theguardian.com/football/audio/2022/aug/23/manchester-united-liverpool-football-weekly-podcast",
            "urlToImage": "https://i.guim.co.uk/img/media/2554ff07dbf4c98f7162a7e545b3ec7e677cde01/0_32_1026_616/master/1026.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8ac6a709aa3476b436f370e6e324f0e2",
            "publishedAt": "2022-08-23T12:38:48Z",
            "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nToday: Manchester United beat Liverpool with Cri… [+543 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Ben Fisher",
            "title": "‘It was just perfect’: the TikTok kick-off tactic sweeping European football",
            "description": "From PSG’s Kylian Mbappé to Cliftonville’s Ronan Hale, the four-pass sequence is delivering remarkably quick goalsManchester United gave it a go at the start of the second half against Liverpool on Monday, hours after Paris Saint-Germain perfected the in-vogu…",
            "url": "https://amp.theguardian.com/football/2022/aug/25/tiktok-kick-off-tactic-sweeping-european-football-psg-mbappe-quick-goals",
            "urlToImage": "https://i.guim.co.uk/img/media/889caf1b673680d7cd62873db8004d8ba11a6543/0_26_4069_2442/master/4069.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ffd678de386fff4a55af9da7c876a84d",
            "publishedAt": "2022-08-25T07:00:04Z",
            "content": "Manchester United gave it a go at the start of the second half against Liverpool on Monday, hours after Paris Saint-Germain perfected the in-vogue kick-off routine that is sweeping European football.… [+4649 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Michael Butler",
            "title": "Football transfer rumours: Arsenal to sign Wolves’ Pedro Neto for £50m?",
            "description": "Today’s whispers have a big decision to makeHaving spent well over £100m, Arsenal want one final signing to seal what has been a quite glorious summer for the Gunners. Top of the league, it’s amazing what a lovely new kit or two, some sublime Ian Wright #cont…",
            "url": "https://amp.theguardian.com/football/2022/aug/24/football-transfer-rumour-mill-arsenal-wolves-pedro-neto-50m",
            "urlToImage": "https://i.guim.co.uk/img/media/2484082efdcd5c951e26ab345e7f3ee19029afc8/0_216_4908_2945/master/4908.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4e21e9756dff8c85bce5d4b8e3b3d331",
            "publishedAt": "2022-08-24T07:51:31Z",
            "content": "Having spent well over £100m, Arsenal want one final signing to seal what has been a quite glorious summer for the Gunners. Top of the league, its amazing what a lovely new kit or two, some sublime I… [+3998 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian sport",
            "title": "Has a football match ever been described as a ‘four-pointer’? | The Knowledge",
            "description": "Plus: one-club national teams, debut-goal deluges and more<ul><li>Mail us your questions or tweet @TheKnowledge_GU</li></ul>“To hear that a fixture is a ‘six-pointer’ is pretty common in the modern game, but I can’t ever remember hearing a game was a ‘four-po…",
            "url": "https://amp.theguardian.com/football/2022/aug/24/has-a-football-match-ever-been-described-as-a-four-pointer-knowledge",
            "urlToImage": "https://i.guim.co.uk/img/media/1b6eab3bfec4d91e2b5f00485184c8a8097bc456/0_115_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=40aa462bff4ba9edb8f216f0cafd6ae6",
            "publishedAt": "2022-08-24T07:00:28Z",
            "content": "To hear that a fixture is a six-pointer is pretty common in the modern game, but I cant ever remember hearing a game was a four-pointer when it was just two points for a win. Can anyone find examples… [+7808 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Nadeem Badshah",
            "title": "Hope not hate: England women football team enjoy positive social media posts",
            "description": "Study shows female Euro players got 125 positive posts for each hate one – in contrast to abuse directed at England menThe vast majority of social media posts directed at England women’s triumphant Euro 2022 football players across a three-month period were p…",
            "url": "https://amp.theguardian.com/media/2022/aug/24/hope-not-hate-england-women-football-team-enjoy-positive-social-media-posts",
            "urlToImage": "https://i.guim.co.uk/img/media/f06f7c0e6b53682bc389fc691e20b7ad0e985c03/0_280_3733_2240/master/3733.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a376206438ed69bd2d479529d5abf7d5",
            "publishedAt": "2022-08-24T17:43:39Z",
            "content": "The vast majority of social media posts directed at England womens triumphant Euro 2022 football players across a three-month period were positive, research has found.\r\nThe study of 78,141 posts on T… [+3402 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Nick Ames, Noah Payne-Frank Serhiy Leshchenko Bryony Moore",
            "title": "Rockets and air raids: how Ukrainian football is rising from the rubble – video",
            "description": "'There were a lot of mines around [the pitch]', says the former captain of Obolon Kyiv's second team. 'Even now we are still  afraid to kick the ball over the fence.'Kostja Kovalenko describes the reality of life at the team's training ground before their fir…",
            "url": "https://www.theguardian.com/football/video/2022/aug/26/rockets-and-air-raids-how-ukrainian-football-is-rising-from-the-rubble-video",
            "urlToImage": "https://i.guim.co.uk/img/media/8c41302138053c9ba9d040a19624350a68d37afe/33_0_1153_692/master/1153.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=968325014e8ddea406bd0abea1161d55",
            "publishedAt": "2022-08-26T17:48:32Z",
            "content": "'There were a lot of mines around [the pitch]', says the former captain of Obolon Kyiv's second team. 'Even now we are still  afraid to kick the ball over the fence.'\r\nKostja Kovalenko describes the … [+176 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian sport",
            "title": "Which football fans sing the praises of players from different clubs? | The Knowledge",
            "description": "Plus: the longest perfect streaks to start a season, another one-club national team and the earliest case of match-fixing<ul><li>Mail us your questions or tweet @TheKnowledge_GU</li></ul>“Do any fanbases regularly sing in praise of a player who never actually…",
            "url": "https://amp.theguardian.com/football/2022/aug/31/which-football-fans-sing-the-praises-of-players-from-different-clubs-knowledge",
            "urlToImage": "https://i.guim.co.uk/img/media/36e5ed898af6cf1b2bad683246c1cfbbf41f8886/0_143_2294_1377/master/2294.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2777d2104da4d4ca11cd20f723df4ebb",
            "publishedAt": "2022-08-31T07:00:21Z",
            "content": "Do any fanbases regularly sing in praise of a player who never actually played for them?tweets Andy Brook. Possibly due to scoring a vital goal against a rival or something similar?\r\nThe key phrase h… [+7723 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Keza MacDonald",
            "title": "From women’s football to monster slaying: the most exciting video games for autumn 2022",
            "description": "Restore law to Gotham, explore medieval Bavaria or skateboard like a pro… it’s all to play for in these new titlesNintendo’s brilliantly fun and untouchably cool take on the shooting game involves kids who can transform into squids and octopuses to swim throu…",
            "url": "https://amp.theguardian.com/games/2022/aug/23/from-womens-football-to-monster-slaying-the-most-exciting-video-games-for-autumn-2022",
            "urlToImage": "https://i.guim.co.uk/img/media/69663e79d3ef7e0cb6135b2a9afda3fe477cae50/240_0_3600_2160/master/3600.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e2765fc5daf4950a7efe8ffca2d4dd61",
            "publishedAt": "2022-08-23T16:00:10Z",
            "content": "Splatoon 3\r\nNintendos brilliantly fun and untouchably cool take on the shooting game involves kids who can transform into squids and octopuses to swim through lakes of paint, splattering the level (a… [+3521 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Ed Aarons and Romain Molina",
            "title": "African football head criticised for visiting Gabon FA president in jail",
            "description": "<ul><li>Mounguengui awaiting trial over alleged sexual abuse cover-up</li><li>Caf president Motsepe criticised by alleged victims and Fifpro</li></ul>Alleged victims and Fifpro have criticised the head of African football’s governing body for publicly support…",
            "url": "https://amp.theguardian.com/football/2022/sep/01/african-football-head-criticised-for-visiting-gabon-fa-president-in-jail-mounguengui-motsepe",
            "urlToImage": "https://i.guim.co.uk/img/media/b3c6e02e977e1934a998ebe459a000d3a47bbac5/0_360_3820_2292/master/3820.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=95bccee39821cea0769ed7bf3437a97f",
            "publishedAt": "2022-09-01T07:00:47Z",
            "content": "Alleged victims and Fifpro have criticised the head of African footballs governing body for publicly supporting the president of Gabons football federation, who has been accused of covering up widesp… [+5361 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Karen Carney",
            "title": "The review into women’s football is for everyone. Help me make it a success | Karen Carney",
            "description": "As chair of the government’s review, the big thing for me is to bring people on this journey. We are all part of this teamA few months ago I received an unexpected call, asking me to lead the government review into women’s football. Despite it being such a gr…",
            "url": "https://amp.theguardian.com/football/blog/2022/sep/08/government-review-into-womens-football-karey-carney",
            "urlToImage": "https://i.guim.co.uk/img/media/1b7c0f726aadc87518104e8336c9095022ce0004/0_73_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=a310ebc8d537ad96bbbda3e10ed65995",
            "publishedAt": "2022-09-08T12:54:52Z",
            "content": "A few months ago I received an unexpected call, asking me to lead the government review into womens football. Despite it being such a great opportunity, it took me some time to say yes. Honestly, I h… [+5135 chars]"
        }
    ]
    constructor() {
        super();
        console.log("hello world");
        this.state = {

        }
    }

    render() {
        return (
            <div className='container my-5'>
                <h1>Welcome To NewsAPP - your daily news services.</h1>
                <div className="row">
                    <div className="col-md-3">
                        <NewsItem title="Sports" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium assumenda aperiam quia voluptate" imageUrl="https://cdn.vox-cdn.com/thumbor/GvEqiko_ni9bbapc-_nR6yfKs5E=/0x196:2738x1630/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23954273/1236850413.jpg" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="Sports" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium assumenda aperiam quia voluptate" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="Sports" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium assumenda aperiam quia voluptate" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="Sports" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium assumenda aperiam quia voluptate" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
