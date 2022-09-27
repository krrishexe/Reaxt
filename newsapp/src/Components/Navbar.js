import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
    static propTypes = {

    }

    // async sportsClick() {
    //     console.log("CDM2");
    //     let url = `https://newsapi.org/v2/everything?q=sports&from=2022-08-27&sortBy=publishedAt&apiKey=94565befd4ef427b92d8ced9a40eed8a&page=1&pageSize${this.props.pageSize}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState(
    //         { articles: parsedData.articles, totalResults: parsedData.totalResults, })
    // }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg  bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light" href="/home">NewsAPP</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-light text-light" aria-current="page" href="/bollywood" onClick={this.sportsClick}>Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/Sports" onClick={this.sportsClick}>Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/Sports" onClick={this.sportsClick}>Entertainment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/Sports" onClick={this.sportsClick}>General</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/Sports" onClick={this.sportsClick}>Health</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/Sports" onClick={this.sportsClick}>Science</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/" onClick={this.sportsClick}>Technology</a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
