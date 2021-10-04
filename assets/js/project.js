AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Chatbot using Tensorflow Seq2seq",
    cardImage: "assets/images/project-page/chatbot.png",
    description: "Built a question answering chatbot using Tensorflow Seq2Seq model",
    Githublink: "https://github.com/advaithsrao/Chatbot_Seq2seq_model",
  },
  {
    title: "Multi-Instrument Recognition in Polyphonic Recordings",
    cardImage: "assets/images/project-page/music.jpg",
    description: "Recognize multiple instruments in a polyphonic recording.",
    Githublink: "https://github.com/advaithsrao/Instrument_recognition_in_polyphonic_recordings",
  },
  {
    title: "Twitter Sentiment Analysis using Universal Sentence Encoder",
    cardImage: "assets/images/project-page/sentiment.png",
    description: "Analyze and classify sentiment on tweets using Universal Sentence Encoder to embed tweets and SVM to classify them.",
    Githublink: "https://github.com/advaithsrao/TwitterSentimentAnalysis_using_UniversalSentenceEncoder",
  },
  {
    title: "The Tea-Story",
    cardImage: "assets/images/project-page/tea.jpeg",
    description: "Analyzed and forecasted weekly tea prices in 14 major cities using Lasso Regression. Benchmarked model performance against SVR, KNN, and Time Series Analysis techniques such as Prophet by Facebook and ARIMA.",
    Githublink: "https://github.com/advaithsrao/Tea-Story-Weekend-Hackathon",
  }
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, Githublink }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" href="${Githublink}">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
              <p class="title" style="font-size:26px;"><a href="${Githublink}">${title}</a></p>
              <p class="title" style="font-size:12px;"><a href="${Githublink}">${description}</a></p>
              </div>
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}