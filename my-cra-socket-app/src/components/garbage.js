import React, { Component } from 'react';
import css from "../styles/listing.css";
import axios from 'axios';

// api - https://api.myjson.com/bins/cb4wi

class ListingComponent extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
        this.generateNewsList = this.generateNewsList.bind(this);
    }


    componentDidMount(){
        let newsList = [];
        let newsListHTML = [];
        axios.get("https://api.myjson.com/bins/abq2s")
        .then((res) => {
            newsList = res.data;
            if(newsList.length){
                for(var i = 0; i<newsList.length; i++){
                  
                    newsListHTML.push(<div>{newsList[i].serial_no}</div>)
                }
            }
            console.log("total-- ",newsListHTML);
        })
    }

    generateNewsList(){
        let newsListHTML =  <li className = "news-list-item">
                                <img className = "news-category-image" src = "https://static.boredpanda.com/blog/wp-content/uploads/2017/04/58fdbaac3329b_qWDL5Lq__700.jpg"/>
                                <div className = "news-block">
                                    <h3 className = "news-title">Indonesia's famed Komodo Island may close for one year</h3>
                                    <div className = "news-small-description">The island, which is home to the world's largest lizard, will be off limits to tourists for a year in hopes of increasing the Komodo dragon population.</div>
                                    <span className = "news-author">By Tom</span>
                                    <span className = "news-posted">Posted 1st Feb</span>
                                </div>
                            </li>
        return newsListHTML;
    }


    render(){
        return(
            <article className = "news-list-container">



                <ul className = "news-list">
                   {this.generateNewsList()}
                </ul>
            </article>
        )
    }
}

export default ListingComponent;






// const Test = ({news}) => (
//     <ul>
//       {news.map(station => (
        
//         <div className="station" key={station.call}>{station.call}</div>
//       ))}
//     </ul>
//   ); 




