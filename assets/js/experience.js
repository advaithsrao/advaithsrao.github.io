AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Scientist",
    cardImage: "../images/experience-page/ablox.png",
    place: "Armorblox ",
    time: "Bangalore, India | (Mar 2020 - Present) <p><span>(The first organization to harness Natural Language Understanding to protect mailboxes from threat attacks, was named 2020 Gartner Cool Vendor in Cloud Office Security and featured in the 2019 Forbes AI 50 list)</span></p>",
    desp: "<span><li>Wore multiple hats, working equally on bulding model pipelines and on developing features to protect customer mailboxes from threat attacks.</li><li>Created an end-to-end model retraining pipeline based on Luigi (by Spotify) to run complex model retraining on an automatic cadence. Added support for MLFlow (model tracking), Google Cloud Bucket (artifact storage), and PostgreSQL (data store).</li><li>Detected several types of Socially Engineered threat attacks by implementing a Multiclass SVM model.</li><li>Worked as a part of the Threat Research team, analyzing Zero-Day Credential Phishing and Business Email Compromise (BEC) attacks.</li><li>Experimented with a Coreference-Resolution-based architecture to support Data Loss Prevention (DLP).</li><li>Performed ablation studies to understand the relevance of certain input textual features. Experimented with perturbation techniques like N-gram noising, content word removal, and synonym replacement.</li><li>Researched on BERT model learning through unintended heuristics, leading to the model performing well, without understanding the task-at-hand (Clever Hans Effect).</li><li>Acquired hands-on experience in Redash, Cloud DataFlow, Google Kubernetes Engine, Metabase, Comet,and Cloud Functions.</li></span>",
  },
  {
    title: "Software Engineer (Data Scientist)",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "StatValu Private Limited",
    time: "Bangalore, India | (Nov 2019 - Mar 2020)",
    desp: "<li>Reduced a significant amount of time and effort put in by underwriters to assess risk on insuring people by clustering health insurance documents using Universal Sentence Encoder (USE) and K-Means algorithm.</li><li>Benchmarked performance for Universal Sentence Encoder (USE), Word2Vec, Jaccard Distance Matrix, and BERT embedding techniques.</li><li>Experimented with Elbow-method and Silhouette method to determine the optimal number of clusters in K-Means Unsupervised Clustering.</li><li>Deployed model onto production utilizing multiple Amazon Elastic Compute Cloud (EC2) instances linked to an Amazon Elastic MapReduce (EMR) to parallelize processing on a Node-level execution basis.</li><li>Implemented Sentence Classification of Affirmative-Negative sentences using USE embeddings and an SVM with an F1-Score of 0.97.</li>",
  },
  {
    title: "Deep Learning Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Mercedes-Benz Research and Development",
    time: "Bangalore, India | (Feb 2019 - Jun 2019)",
    desp:"<li>Worked on a proof of concept implementation in Level 4 automated driving systems (ADS) by implementing an ensemble deep learning architecture, involving a Convolutional Neural Network (CNN), Faster Region-Based Convolutional Neural Networks (FRCNN), and Long Short-Term Memory (LSTM) using Stereo Multi-Purpose Camera (SMPC) images.</li><li>Implemented a CNN, to identify construction zones with a test accuracy of 98%.</li><li>Implemented an FRCNN, to detect and classify road signs with an Intersection Over Union (IOU) of 0.92.</li><li>Implemented an LSTM, input with CNN and FRCNN targets to predict the proximity of construction zones.</li><li>Researched autonomous driverless systems concepts such as Localization, Sensor Fusion, and Path Planning.</li>",
  },
  {
    title: "Deep Learning Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "LCode Technologies Private Limited",
    time: "Mangalore, India | (May 2018 - Jun 2018)",
    desp:"<li>Provided quicker support for end-user queries in one of India’s leading banks by building a retrieval-based Question & Answer chatbot based on TFIDF and Cosine Similarity.</li><li>Worked on supplanting the retrieval-based chatbot with a pre-trained Seq2Seq model with data sourced from Cornell Movie Dialog Data corpus, containing 200k+ conversational exchanges.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>            
            <ul>
              ${desp}
            </ul>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "Data Scientist",
//     cardImage: "../images/experience-page/ablox.png",
//     place: "Armorblox ",
//     time: "Bangalore, India | (Mar 2020 - Present)",
//     desp: "<li>Wore multiple hats, working equally on bulding model pipelines and on developing features to protect customer mailboxes from threat attacks.</li><li>Created an end-to-end model retraining pipeline based on Luigi (by Spotify) to run complex model retraining on an automatic cadence. Added support for MLFlow (model tracking), Google Cloud Bucket (artifact storage), and PostgreSQL (data store).</li><li>Detected several types of Socially Engineered threat attacks by implementing a Multiclass SVM model.</li><li>Worked as a part of the Threat Research team, analyzing Zero-Day Credential Phishing and Business Email Compromise (BEC) attacks.</li><li>Experimented with a Coreference-Resolution-based architecture to support Data Loss Prevention (DLP).</li><li>Performed ablation studies to understand the relevance of certain input textual features. Experimented with perturbation techniques like N-gram noising, content word removal, and synonym replacement.</li><li>Researched on BERT model learning through unintended heuristics, leading to the model performing well, without understanding the task-at-hand (Clever Hans Effect).</li><li>Acquired hands-on experience in Redash, Cloud DataFlow, Google Kubernetes Engine, Metabase, Comet,and Cloud Functions.</li>",
//   },
//   {
//     title: "Software Engineer (Data Scientist)",
//     cardImage: "assets/images/experience-page/gsoc.png",
//     place: "StatValu Private Limited",
//     time: "Bangalore, India | (Nov 2019 - Mar 2020)",
//     desp: "<li>Reduced a significant amount of time and effort put in by underwriters to assess risk on insuring people by clustering health insurance documents using Universal Sentence Encoder (USE) and K-Means algorithm.</li><li>Benchmarked performance for Universal Sentence Encoder (USE), Word2Vec, Jaccard Distance Matrix, and BERT embedding techniques.</li><li>Experimented with Elbow-method and Silhouette method to determine the optimal number of clusters in K-Means Unsupervised Clustering.</li><li>Deployed model onto production utilizing multiple Amazon Elastic Compute Cloud (EC2) instances linked to an Amazon Elastic MapReduce (EMR) to parallelize processing on a Node-level execution basis.</li><li>Implemented Sentence Classification of Affirmative-Negative sentences using USE embeddings and an SVM with an F1-Score of 0.97.</li>",
//   },
//   {
//     title: "Deep Learning Intern",
//     cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
//     place: "Mercedes-Benz Research and Development",
//     time: "Bangalore, India | (Feb 2019 - Jun 2019)",
//     desp:"<li>Worked on a proof of concept implementation in Level 4 automated driving systems (ADS) by implementing an ensemble deep learning architecture, involving a Convolutional Neural Network (CNN), Faster Region-Based Convolutional Neural Networks (FRCNN), and Long Short-Term Memory (LSTM) using Stereo Multi-Purpose Camera (SMPC) images.</li><li>Implemented a CNN, to identify construction zones with a test accuracy of 98%.</li><li>Implemented an FRCNN, to detect and classify road signs with an Intersection Over Union (IOU) of 0.92.</li><li>Implemented an LSTM, input with CNN and FRCNN targets to predict the proximity of construction zones.</li><li>Researched autonomous driverless systems concepts such as Localization, Sensor Fusion, and Path Planning.</li>",
//   },
//   {
//     title: "Deep Learning Intern",
//     cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
//     place: "LCode Technologies Private Limited",
//     time: "Mangalore, India | (May 2018 - Jun 2018)",
//     desp:"<li>Provided quicker support for end-user queries in one of India’s leading banks by building a retrieval-based Question & Answer chatbot based on TFIDF and Cosine Similarity.</li><li>Worked on supplanting the retrieval-based chatbot with a pre-trained Seq2Seq model with data sourced from Cornell Movie Dialog Data corpus, containing 200k+ conversational exchanges.</li>",
//   },
// ];

// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, place, time, desp }) =>
//       (output += `        
//     <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
//       <div class="card card1">
//         <img src="${cardImage}" class="featured-image"/>
//         <article class="card-body">
//           <header>
//             <div class="title">
//               <h3>${title}</h3>
//             </div>
//             <p class="meta">
//               <span class="pre-heading">${place}</span><br>
//               <span class="author">${time}</span>
//             </p>
//             <ul>
//               ${desp}
//             </ul>
//           </header>
//         </article>
//       </div>
//     </div>
//       `)
//     );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Code.Fun.Do",
    subtitle: "Microsoft | (Feb 2018)",
    image: "assets/images/experience-page/uplift.png",
    desp: "<li>Developed an Optical Character Recognition (OCR) based smart notes-taking device aimed at capturing periodic images of a blackboard in a classroom, processing these images on a Microsoft Azure Cloud, and collating these images into a notebook.</li><li>Implemented computer vision techniques to help process/format the captured information presented by these images in an organized way.</li>",
  },
  {
    title: "Tea-Story Weekend Hackathon",
    subtitle: "MachineHack | (Aug 2021)",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "<li>Analyzed and forecasted weekly average tea prices in major cities. Imputed null values using average prices over cities and explored seasonality, yearly trends across the distribution of average tea prices.</li><li>Techniques used: Prophet by Facebook, ARIMA for Time Series Analysis; Lasso Regression to predict prices for individual cities and the average tea price across cities over time.</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
