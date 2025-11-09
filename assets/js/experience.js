AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Senior AI Researcher",
    cardImage: "../images/experience-page/cisco.png",
    place: "Cisco",
    time: "New York, NY | (July 2023 - Present)",
    desp: "<li>Led the LLMOps Track for Cisco AI Canvas with automated performance monitoring and scalable data lifecycle management, enhancing model reliability and accelerating adoption across diverse product capabilities.</li>" +
          "<li>Spearheaded the development of Unified AI Assistant for Security Cloud Control, with cross-product and multi-skill user query support by leveraging semantic routing and multi-step planner & executor agents.</li>" +
          "<li>Built Documentation Q&A capability for Cisco AI Assistant through state-of-the-art RAG techniques, supporting over 1M user queries per week over 10+ Cisco Products, including Duo, Webex, and Thousand Eyes.</li>" +
          "<li>Developed and maintained in-house AI abstractions for Cisco Central AI team that integrate LLMs, vector databases, embedders, and agents to standardize ML workflows across all orchestration services.</li>" +
          "<li>Conducted applied research to fine-tune a cross-encoder model for an Inline Citations engine, achieving a 0.96 NDCG@5 and improving retrieval relevance in citation generation.</li>" +
          "<li>Developed the Evaluation Suite for Cisco AI Assistant using Semantic Similarity and LLM based Scores, automating LLM validation with high accuracy.</li>",
  },
  {
    title: "Machine Learning Engineer",
    cardImage: "../images/experience-page/ablox.png",
    place: "Armorblox (Acquired by Cisco)",
    time: "Palo Alto, CA | (March 2020 - July 2023)",
    desp: "<li>Spearheaded the identification of 20+ categories of fraud emails with a 99% F1-score using a Multiclass Classifier and Contextual Embeddings, protecting sensitive customer data from low-visibility zero-day vulnerabilities.</li>" +
          "<li>Orchestrated detection of phishing attacks recall by 10% through Correlation Analysis on 10M+ email link texts, identifying threat patterns & developing heuristics, aligning security measures with stakeholder goals.</li>" +
          "<li>Achieved 3x faster model updates by creating an end-to-end MLOps pipeline with Python, Dask, and Comet with periodic data fetch, model training, logging, and deployment to production.</li>" +
          "<li>Pioneered the detection of 20K+ Social Engineering emails per month using content-specific Machine Learning models.</li>" +
          "<li>Drove Graymail detection enhancements by analyzing historical spam data and building high-fidelity Machine Learning models, flagging 20% more spam emails and achieving a 40% reduction in false positives during A/B testing.</li>" +
          "<li>Led a 12-member data analyst team in dissecting fraud data trends, conducting Hypothesis Testing on model updates, and presenting impactful reports to stakeholders.</li>" +
          "<li>Enhanced internal data workflows by collaborating with cross-functional teams to develop an in-house data platform with 10+ analysis and curation tools.</li>" +
          "<li>Developed data-driven fraud strategies to prevent fraud losses over $1M, working with Threat Researchers to understand fraud email trends, A/B test model updates, and monitor model health constantly.</li>" +
          "<li>Achieved enhanced data cleanup and fraud detection by implementing email zoning – segmenting email text into banners, greetings, body, signatures, and footers, with a weighted F1-score of 0.99 using jusText and CRF.</li>",
  },
  {
    title: "Data Scientist",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "StatValu Private Limited",
    time: "Bangalore, India | (Nov 2019 - Mar 2020)",
    desp: "<li>Reduced health insurance risk assessment time by 60% for underwriters by leveraging Universal Sentence Encoder embeddings and K-Means clustering to efficiently group documents for faster review.</li>" +
          "<li>Developed an ML pipeline to extract affirmative sentences in medical documents with 97% F1-score using Azure OCR, TF-IDF, and Linear SVM.</li>" +
          "<li>Parallelized processing on a node-level execution basis by deploying models onto production, utilizing multiple AWS EC2 instances linked to an EMR, and reducing overall execution time by 25%.</li>",
  },
  {
    title: "Deep Learning Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Mercedes-Benz Research and Development",
    time: "Bangalore, India | (Feb 2019 - Jun 2019)",
    desp:"<li>Worked on a proof of concept implementation in Level 4 automated driving systems (ADS) by implementing an ensemble deep learning architecture, involving a Convolutional Neural Network (CNN), Faster Region-Based Convolutional Neural Networks (FRCNN), and Long Short-Term Memory (LSTM) using Stereo Multi-Purpose Camera (SMPC) images.</li><li>Implemented a CNN, to identify construction zones with a test accuracy of 98%.</li><li>Implemented an FRCNN, to detect and classify road signs with an Intersection Over Union (IOU) of 0.92.</li><li>Implemented an LSTM, input with CNN and FRCNN targets to predict the proximity of construction zones.</li><li>Researched autonomous driverless systems concepts such as Localization, Sensor Fusion, and Path Planning.</li>",
  },
  {
    title: "Machine Learning Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "LCode Technologies Private Limited",
    time: "Mangalore, India | (May 2018 - Jun 2018)",
    desp:"<li>Provided quicker support for end-user queries in one of India’s leading banks by building a retrieval-based Question & Answer chatbot based on TFIDF and Cosine Similarity.</li><li>Worked on supplanting the retrieval-based chatbot with a pre-trained Seq2Seq model with data sourced from Cornell Movie Dialog Data corpus, containing 200k+ conversational exchanges.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  const animations = ['fade-up', 'fade-right', 'zoom-in', 'flip-left'];
  
  // Company name mapping for accurate color assignment
  const getCompanyFromPlace = (place) => {
    console.log(`Checking place: "${place}"`);
    
    // Check Armorblox BEFORE Cisco since "Armorblox (Acquired by Cisco)" contains both
    if (place.includes("Armorblox")) {
      console.log('Detected: Armorblox');
      return "Armorblox";
    }
    if (place.includes("Cisco")) {
      console.log('Detected: Cisco');
      return "Cisco";
    }
    if (place.includes("StatValu")) {
      console.log('Detected: StatValu');
      return "StatValu";
    }
    if (place.includes("Mercedes-Benz")) {
      console.log('Detected: Mercedes-Benz');
      return "Mercedes-Benz";
    }
    if (place.includes("LCode")) {
      console.log('Detected: LCode');
      return "LCode";
    }
    
    console.log('Detected: Unknown');
    return "Unknown";
  };
  
  exp.forEach(
    ({ title, cardImage, place, time, desp }, index) => {
      const company = getCompanyFromPlace(place);
      console.log(`Place: "${place}" -> Company: "${company}"`); // Debug log
      (output += `        
    <div class="col gaap" data-aos="${animations[index % animations.length]}" data-aos-easing="ease-out-cubic" data-aos-delay="${index * 100}" data-aos-duration="600"> 
      <div class="card card1 experience-card" data-company="${company}">
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
    }
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
    title: "Ethical Fraud Detection (1st Place)",
    subtitle: "Competition | December 2023",
    image: "assets/images/project-page/fraud-detection.svg",
    desp: "<li>Performed Fraud Email Classification using a pre-trained DistilBERT model, integrating Ethical Statistics techniques such as Differential Privacy, and Fully Homomorphic Encryption.</li>",
  },
  {
    title: "#1 Friends Fan Chatbot",
    subtitle: "Project | November 2023",
    image: "assets/images/project-page/friends-chatbot.svg",
    desp: "<li>Built an LLM Chatbot by LoRA fine-tuning a LLaMA 7B model using the Friends Show dialogue corpus.</li>",
  },
  {
    title: "Data Inclusive Hackathon",
    subtitle: "Capgemini | 2023",
    image: "assets/images/education-page/capgemini.jpeg",
    desp: "<li> Developed a Generative AI-powered report search engine that automatically searches and extracts relevant information from financial reports, research papers, market analysis, and other relevant documents. The search engine understands and interprets the context, identifies key concepts, and generates relevant search results based on user queries</li>",
  },
  {
    title: "Statistical Analysis of Song Popularity(1st Place)",
    subtitle: "Regression and TSA Challenge | 2022",
    image: "assets/images/project-page/spotify_top_50.jpeg",
    desp: "<li>Used Regression to predict track popularity based on audio features such as valence, acousticness, and tempo.</li><li>Ranked 1st Place out of 20 participating teams.</li>",
  },
  {
    title: "Sequential Model Based Bayesian Optimization (1st Place)",
    subtitle: "Merck Re Challenge | 2022",
    image: "assets/images/project-page/optimization.jpeg",
    desp: "<li>Optimized on an input space towards minimizing our desired target variable across different experiments.</li><li>Ranked 1st Place out of 9 participating teams.</li>",
  },
  {
    title: "Tea-Story Weekend Hackathon",
    subtitle: "MachineHack | 2021",
    image: "assets/images/project-page/tea.jpeg",
    desp: "<li>Analyzed and forecasted weekly average tea prices in major cities. Imputed null values using average prices over cities and explored seasonality, yearly trends across the distribution of average tea prices.</li><li>Techniques used: Prophet by Facebook, ARIMA for Time Series Analysis; Lasso Regression to predict prices for individual cities and the average tea price across cities over time.</li>",
  },
  {
    title: "Code.Fun.Do",
    subtitle: "Microsoft | 2018",
    image: "assets/images/project-page/searchicon.png",
    desp: "<li>Developed an Optical Character Recognition (OCR) based smart notes-taking device aimed at capturing periodic images of a blackboard in a classroom, processing these images on a Microsoft Azure Cloud, and collating these images into a notebook.</li><li>Implemented computer vision techniques to help process/format the captured information presented by these images in an organized way.</li>",
  }
];

const showCards3 = () => {
  let output = "";
  const animations = ['fade-left', 'fade-right', 'zoom-in-up', 'flip-up', 'slide-up', 'fade-up'];
  
  // Debug: Log the number of mentor entries
  console.log(`Total competition entries: ${mentor.length}`);
  
  mentor.forEach(
    ({ title, image, subtitle, desp}, index) => {
      console.log(`Generating slide ${index + 1}: ${title}`);
      (output += `  
      <div class="blog-slider__item swiper-slide" data-aos="${animations[index % animations.length]}" data-aos-duration="800" data-aos-delay="${index * 50}">
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
        </div>
      </div>
      `)
    }
  );
  
  // Debug: Log the generated HTML
  console.log(`Generated HTML length: ${output.length}`);
  
  hackathonsection.innerHTML = output;
  
  // Debug: Verify slides were added to DOM
  setTimeout(() => {
    const slides = document.querySelectorAll('.blog-slider__item');
    console.log(`Slides in DOM: ${slides.length}`);
  }, 100);
};
document.addEventListener("DOMContentLoaded", showCards3);
