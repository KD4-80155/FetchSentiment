import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/SaFp.css";
import SaFpPricing from "./SaFpPricing";

export default function SaFpmain() {
  const redirect = useNavigate();

  return (
    <main>
      <div className="all-content">
        <h3 className="title">Sentiment Analysis</h3>
        <div className="text-data">
          <p className="para">
            Millions of people around the globe today express their feelings on
            products and brands through the internet, whether it’s in a Yelp
            review, in a Twitter thread, or in a Facebook post. Companies have a
            strong interest in intercepting these online “conversations,” so
            that they can learn more about their customers and users, as well as
            the customers of their competitors in the market.
          </p>
          <p className="para">
            Given the magnitude of available data, it’s impossible for companies
            to manually search for reviews and comments, analyze them, and
            classify them as positive or negative. Thanks to sentiment analysis,
            this process can be automated, so that these insights can be
            gathered and evaluated through algorithms.
          </p>
          <p className="para">
            Sentiment analysis is also known as opinion mining.
          </p>
        </div>
        <h3 className="title">Why sentiment analysis?</h3>
        <div className="text-data">
          <p className="para">
            Emotions are often the driving force behind purchasing decisions
            thus, by analyzing how customers feel i.e. the sentiment behind
            their communication, you tap into a valuable source of business
            insights.
          </p>
          <p className="para">
            To make it more specific, here are some of the common business goals
            for utilizing sentiment analysis software:
          </p>
          <ul className="why-ul">
            <li className="lists">Determining brand reputation</li>
            <li className="lists">Improving customer experience</li>
            <li className="lists">Preventing a brand reputation crisis</li>
          </ul>
          <p className="para">
            Sentiment Analysis is made to analyze the Tweets,the Comments of any
            and the Feeback report of any company. video. <br></br> Here, we
            have three sections for the analysis of the Tweets from Twitter,
            comments from Youtube's Video and Feedback report of any company.
          </p>
        </div>
      </div>
      <div className="boxes" id="boxes">
        <div className="twitter-box" onClick={() => redirect("/tweetinput")}>
          <p>Twitter</p>
        </div>
        <div className="youtube-box" onClick={() => redirect("/commentinput")}>
          <p>Youtube</p>
        </div>
        <div
          className="feedback-box"
          onClick={() => redirect("/customdatainput")}
        >
          <p>Custom-Data</p>
        </div>


    </div>
    <div className="all-content" id="pricing"> 
    <h3 className="title" >Our Pricing</h3>   
    <SaFpPricing props={{status:false}} />
    </div>

      <div className="last">
        <h3 id="down-start">Start Analyzing Today </h3>
        <button
          className="btn-last"
          onClick={() => {
            redirect("/signup");
          }}
        >
          Sign Up
        </button>
      </div>
    </main>
  );
}
