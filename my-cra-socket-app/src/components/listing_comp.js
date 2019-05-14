import React, { Component } from 'react';
import css from "../styles/listing.css";
import axios from 'axios';
import Loader from 'react-loader-spinner';

import SearchContainer from '../containers/search';
import SortContainer from '../containers/sort';
import TabContainer from '../containers/tab';

class ListingComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            newsListArr : [],
            lazyLoadItemNos : 4
        };
        this.generateNewsHTML = this.generateNewsHTML.bind(this);
        this.newsBlockHTML = this.newsBlockHTML.bind(this);
    }

    componentDidMount(){
        console.log("here...");
        
        
        //to get the news list
        let newsListHTML = [];
        axios.get("https://api.myjson.com/bins/6f4ck")
        .then((res) => {
            this.setState({newsListArr: res.data})
        })

        //scroll event - for lazy loading
        let count = 4;
        let prevVal;
        let newsListScrollTopInitial = 255;

        document.addEventListener('scroll', () => {
            let newsListElem = document.getElementById("news-list");
            let newsListElemHeight, newsListScrollTop;
            if(newsListElem){
                newsListElemHeight = newsListElem.offsetHeight;
                newsListScrollTop = newsListElem.getBoundingClientRect().top;
                
            }
        });
    }


    componentWillUnmount() {
        document.removeEventListener('scroll', () => {
            console.log("scroll ended!!");
        });
    }

    newsBlockHTML(){
        return (
            <li className = "news-list-item" key = {keyVal}>
                <img className = "news-category-image" src = "http://www.polarisnetworks.net/images/news_icon.png"/>
                <div className = "news-block">
                    <h3 className = "news-title">{news_title}</h3>
                    <div className = "news-small-description">{news_description}</div>
                    <span className = "news-category">{category}</span>
                    <span className = "news-author">By {author}</span>
                    <span className = "news-posted">Posted {posted_time}</span>
                </div>
            </li>
        )
    }

    generateNewsHTML(newsCategory, searchedText){
        //if search data is there, rendering filtered list 
        let newsHTML;
        let newsCategoryCountObj = {"entertainment": 0, "health": 0 ,"international": 0 ,"politics": 0, "technology": 0, "sports": 0, "general": 0, "nature": 0};
        if(this.state.newsListArr.length){
            let filteredNews = this.state.newsListArr;
            let newsList = filteredNews.filter((newsItem, index) => {
                if(searchedText){
                    return newsItem.category.toLowerCase().indexOf(searchedText.toLowerCase())> -1 || newsItem.news_title.toLowerCase().indexOf(searchedText.toLowerCase())> -1 || newsItem.news_description.toLowerCase().indexOf(searchedText.toLowerCase())> -1;
                }
                else{
                    return filteredNews;
                }
            })

            let keyVal = 0;
            if(newsList.length){
                newsHTML = 
                    newsList.map((newsItem, index) => {
                        const {news_title, news_description, author, posted_time, category} = newsList[index];
                        let newsHTMLCondition = searchedText ? true : (category === newsCategory);
                        
                        // for lazy loading - intial load
                        // let newsCategoryKeys = Object.keys(newsCategoryCountObj);
                        // let newsCategoryVals = Object.values(newsCategoryCountObj);
                        // if(newsCategoryKeys.indexOf(category) > -1){
                        //     newsCategoryCountObj[category] += 1;
                        // }
                        // let initialLoadCondition = newsCategoryVals.every(val => val === 4)
                        // console.log("newsCategoryCountObj ",newsCategoryVals,initialLoadCondition);
                        //ends - lazy load

                        if(true){
                            if(newsHTMLCondition){
                                keyVal++;
                                return(
                                    <li className = "news-list-item" key = {keyVal}>
                                        <img className = "news-category-image" src = "http://www.polarisnetworks.net/images/news_icon.png"/>
                                        <div className = "news-block">
                                            <h3 className = "news-title">{news_title}</h3>
                                            <div className = "news-small-description">{news_description}</div>
                                            <span className = "news-category">{category}</span>
                                            <span className = "news-author">By {author}</span>
                                            <span className = "news-posted">Posted {posted_time}</span>
                                        </div>
                                    </li>
                                )
                        }    }
                    }
                )
            }
            else{
                return(
                    <li className = "news-list-item" >No Search Results</li>
                )
                    
            }
        }
        return newsHTML;
    }

    render(){
        let newsCategory = this.props.TabType;
        let searchedText = this.props.SearchText;
        let listingItems = 
            this.state.newsListArr.length ? 
                <React.Fragment>
                    <SearchContainer/>
                    <SortContainer/>
                    <TabContainer/>
                    <ul className = "news-list" id = "news-list">{this.generateNewsHTML(newsCategory, searchedText)}</ul>
                </React.Fragment> 
                : <Loader className = "loading-icon" type="Circles" color="#d3d3d3" height="100" width="100"/>
       
        return(
            <React.Fragment>
                <article className = "news-list-container">
                    {listingItems}
                </article>
            </React.Fragment>
        )
    }
}

export default ListingComponent;




 







