import React, { Component } from "react";
//import Card from './Card'
import "../App.css";
import "./news.css";
import moment from "moment";
import Footer from '../footer'

import Grid from "@material-ui/core/Grid";
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
class News extends Component {
  constructor(props) {
    super(props);
    this.state = { cardItems: [] };
  }

  componentDidMount() {
    var date = moment().subtract(1, "days").format("YYYY-M-D");

    const url =
      "http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?" +
      'qInTitle="covid" AND ("australia" OR "Sydney" OR "nsw" OR "victoria")&' +
      "from=" +
      date +
      "&" +
      "sortBy=publishedAt&" +
      "source=au&" +
      "language=en&" +
      "apiKey=93fa47f73b0544e2a927b0a0d8d6db98";
    const req = new Request(url);
    let titlesUsedSoFar = [];

    fetch(req)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        data.articles.forEach((article) => {
          let flag = false;

          for (let i = 0; i < titlesUsedSoFar.length; ++i) {
            if (titlesUsedSoFar === article.title) {
              flag = true;
            }
          }
          if (flag == false) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            let b = document.createElement("img");
            let c = document.createElement("p");
            let d = document.createElement("hr");
            a.setAttribute("href", article.url);
            a.setAttribute("target", "_blank");
            b.setAttribute("src", article.urlToImage);
            b.setAttribute("alt", "");
            b.setAttribute("width", "400");
            b.setAttribute("height", "200");

            a.textContent = article.title;
            c.textContent = article.description;
            li.appendChild(a);

            var tempCards = this.state.cardItems.concat({
              title: article.title,
              img: article.urlToImage,
              description: article.description,
              link: article.url,
            });

            this.setState({ cardItems: tempCards });
            titlesUsedSoFar.push(article.title);
          } else {
            return;
          }
        });
      });
  }

  render() {
    return (
      <div>
        {/* <div class="container">
					<ul class="news-list"></ul>
				</div> */}
       <div class="header" style={{ marginTop: "10vh" }}>
     			 <h1>Today's News</h1>
            </div>
        <Grid container spacing={4} style={{ padding: 24 }}>
          {this.state.cardItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <Card style={{ minWidth: 285 }}>
                <CardActionArea onClick={() => window.open(item.link)}>
                  <CardMedia
                    componenet="img"
                    image={item.img}
                    title={item.title}
                    style={{ height: 0, paddingTop: "50%" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    target="_blank"
                    href={item.link}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Footer/>
      </div>
    );
  }
}

export default News;
