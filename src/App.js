import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { Link, animateScroll as scroll } from "react-scroll";
import coverImage from "./assets/cover.jpg"; // Replace with your cover image path
import memberPhoto from "./assets/member.jpg"; // Replace with your group member photo path
import diagramImage from "./assets/diagram.jpeg";
import goTed from "./assets/goTed.png";
import complexity from "./assets/complexity.jpg";
import plugin from "./assets/plugin.jfif";
import query from "./assets/query.jfif";
import transaction from "./assets/transaction.webp";
import validation from "./assets/validation.png";
import doubt from "./assets/gopherDoubt.jfif";
import interestedLanguages from "./assets/interestedLanguages.png";

const App = () => {
  const [showMilestoneMenu, setShowMilestoneMenu] = useState(false);

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="domain" smooth={true} duration={500}>
                Domain
              </Link>
            </li>
            <li
              className="milestone-button"
              onMouseEnter={() => setShowMilestoneMenu(true)}
              onMouseLeave={() => setShowMilestoneMenu(false)}
            >
              <button className="milestone-menu-button">Milestones</button>
              {showMilestoneMenu && (
                <ul className="milestone-dropdown">
                  <li>
                    <Link to="project-proposal" smooth={true} duration={500}>
                      Project Proposal
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="progress-presentation-1"
                      smooth={true}
                      duration={500}
                    >
                      Progress Presentation-1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="progress-presentation-2"
                      smooth={true}
                      duration={500}
                    >
                      Progress Presentation-2
                    </Link>
                  </li>
                  <li>
                    <Link to="final-assessment" smooth={true} duration={500}>
                      Final Assessment
                    </Link>
                  </li>
                  <li>
                    <Link to="viva" smooth={true} duration={500}>
                      Viva
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="documents" smooth={true} duration={500}>
                Documents
              </Link>
            </li>
            <li>
              <Link to="slides" smooth={true} duration={500}>
                Slides
              </Link>
            </li>
            <li>
              <Link to="about-us" smooth={true} duration={500}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="contact-us" smooth={true} duration={500}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" className="section home">
        <img src={coverImage} alt="Cover" className="cover-image" />
        <div className="cover-text curved-text">
          Welcome to Our Research Project
        </div>
      </section>

      <section id="domain" className="section domain">
        <h2>Domain</h2>
        <div className="domain-subsection" id="literature-survey">
          <h3>Literature Survey</h3>
          <div className="literature-survey-container">
            {/* Left Section (Upper and Lower images) */}
            <div className="left-section">
              {/* Upper part with an image */}
              <div className="left-upper">
                <div className="info-box">
                  <img src={goTed} alt="Go Mascot" />
                  <p>
                    Robert Griesemer, Rob Pike, and Ken Thompson designed Go at
                    Google in 2007 [4].
                  </p>
                </div>
              </div>
              {/* Lower part with another image */}
              <div className="left-lower">
                <img
                  src={interestedLanguages}
                  alt="Literature Survey Image 2"
                  className="survey-image"
                />
              </div>
            </div>
            {/* Right Section with text */}
            <div className="right-section">
              <div className="right-upper">
                <p>
                  Go was designed to solve challenges such as slow build times
                  and uncontrolled dependencies that arise in large-scale
                  software systems, making it particularly suitable for
                  high-performance applications and distributed systems​ [1].
                  Therefore, an effective Object Relational Mapper is essential
                  for simplifying the interaction between Go applications and
                  NoSQL databases. Current tools like MGM and Mongo-Driver
                  already provide useful abstractions for NoSQL databases, but
                  each has its limitations [2]. These limitations make it
                  critical to develop a more comprehensive NoSQL ORM tailored to
                  Go, which can handle complex data models and relationships
                  while offering cross-database compatibility and optimized
                  performance. The simplicity of Go’s syntax, along with its
                  built-in concurrency support and cross-platform compatibility,
                  enables the efficient mapping of relational data to Go’s
                  struct types while keeping the system performant. This
                  efficiency is crucial for database-driven applications, which
                  require frequent, optimized database interactions [3].
                  Therefore, creating an ORM for Go would help developers manage
                  database interactions more seamlessly while leveraging the
                  language’s strengths in scalability and performance​ [1].
                </p>
              </div>
              <div className="right-lower">
                <p className="references">
                  [1] J. K. B, N. Shivraj, N. Rakshith, and N. M, “Study on go
                  programming language,” International Journal of Advanced
                  Research in Science Communication and Technology, pp. 330–333,
                  Nov. 2021, doi: 10.48175/ijarsct-2126. <br />
                  [2] Tramposo, “Database Interactions in Go: From SQL to
                  NoSQL,” DEV Community, Oct. 01, 2024.
                  https://dev.to/tramposo/database-interactions-in-go-from-sql-to-nosql-225a{" "}
                  <br />
                  [3] I. Balbaert, The Way to Go: A Thorough Introduction to the
                  Go Programming Language. 2012. [Online]. Available:
                  https://openlibrary.org/books/OL25538095M/The_way_to_go <br />
                  [4] GeeksforGeeks, “Interesting facts about Golang,”
                  GeeksforGeeks, Sep. 08, 2020.
                  https://www.geeksforgeeks.org/interesting-facts-about-golang/{" "}
                  <br />
                  [5] “Stack Overflow Developer Survey 2017,” Stack Overflow.
                  https://survey.stackoverflow.co/2017#most-loved-dreaded-and-wanted
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="domain-subsection" id="research-gap">
          <h3>Research Gap</h3>
          <div className="research-gap-container">
            {/* Upper Section */}
            <div className="research-gap-upper">
              {/* Left Section */}
              <div className="research-gap-left">
                <img
                  src={complexity}
                  alt="Cognitive Complexity"
                  className="gap-image"
                />
                <div className="gap-text-box">
                  <p className="gap-title">Cognitive Complexity</p>
                  <p className="gap-each-desc">
                    The MongoDB Go driver requires low-level coding, leading to
                    repetitive and error-prone code for basic tasks like
                    pagination and CRUD operations, which increases cognitive
                    complexity.
                  </p>
                </div>
              </div>
              {/* Right Section */}
              <div className="research-gap-right">
                <img src={query} alt="Query Building" className="gap-image" />
                <div className="gap-text-box">
                  <p className="gap-title">Query Building</p>
                  <p>
                    The absence of efficient mechanisms for building complex
                    queries and managing cross-database transactions hinders
                    performance and consistency across multiple databases​.
                  </p>
                </div>
              </div>
            </div>
            {/* Lower Section */}
            <div className="research-gap-lower">
              <div className="research-gap-lower-section">
                <img
                  src={validation}
                  alt="Entity Validation"
                  className="gap-image"
                />
                <div className="gap-text-box">
                  <p className="gap-title">Entity Validation</p>
                  <p>
                    Existing Go ODMs do not offer built-in schema validation,
                    forcing developers to write custom validation logic or rely
                    on external libraries that do not integrate well with
                    MongoDB.
                  </p>
                </div>
              </div>
              {/* Second Section */}
              <div className="research-gap-lower-section">
                <img
                  src={transaction}
                  alt="Aggregation and Transactions"
                  className="gap-image"
                />
                <div className="gap-text-box">
                  <p className="gap-title">
                    Aggregation and Transactions Across Clusters
                  </p>
                  <p>
                    Existing solutions fail to handle data aggregation and
                    transactions across multiple databases or clusters, which is
                    crucial for distributed systems.
                  </p>
                </div>
              </div>
              {/* Third Section */}
              <div className="research-gap-lower-section">
                <img
                  src={plugin}
                  alt="Plugin Architecture"
                  className="gap-image"
                />
                <div className="gap-text-box">
                  <p className="gap-title">Plugin Architecture</p>
                  <p>
                    Current ODMs lack a flexible plugin system to efficiently
                    extend functionality, making it harder to customize or
                    dynamically load features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="domain-subsection" id="research-problem">
          <h3>Research Problem</h3>
          <div className="research-problem-container">
            {/* Left Section: Image */}
            <div className="research-problem-left">
              <img
                src={doubt}
                alt="Gopher in doubt"
                className="research-image"
              />
            </div>
            {/* Right Section: Text in a Blue Box */}
            <div className="research-problem-right">
              <div className="problem-text-box">
                <p>
                  Golang rise in popularity is hindered by the lack of a stable
                  ODM (Object Document Mapper) to efficiently interact with
                  NoSQL databases like MongoDB. Existing options like Mgo and
                  MGM are outdated or insufficient for modern applications,
                  forcing developers to rely on MongoDB official Go driver,
                  which requires repetitive and error-prone low-level coding for
                  basic tasks like CRUD operations and pagination. This
                  increases cognitive complexity and reduces productivity.
                  Additionally, Go lacks advanced ODM features common in other
                  languages, such as schema validation, instance methods, and
                  transaction management, which leads to fragmented code and a
                  higher likelihood of bugs. The absence of a plugin
                  architecture further limits customization and flexibility,
                  while the lack of support for distributed transactions and
                  cross-database aggregation impedes the development of scalable
                  applications.The proposed Elemental system aims to address
                  these gaps by providing a stable, feature-rich ODM with
                  support for schema validation, plugin architecture, efficient
                  query building, and distributed transaction management,
                  ultimately enhancing the maintainability and scalability of
                  applications built with Go and MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="domain-subsection" id="research-objectives">
          <h3>Research Objectives</h3>
          <div className="app-wrapper">
            <div className="research-objectives">
              <div className="objective">
                <div className="icon">★</div>
                <div className="content">
                  <h2 className="objective-title">
                    Classification of Weligama Coconut Leaf Wilt Disease
                  </h2>
                  <p className="objective-description">
                    The first objective is to classify Weligama Coconut Leaf
                    Wilt Disease (WCLWD) to provide a solution for
                    distinguishing WCLWD uneven yellowing from other diseases.
                    In addition, the symptom severity of WCLWD was determined
                    using a Convolutional Neural Network to identify the
                    disease's symptom severity level to inform the Coconut
                    Research Institute of Sri Lanka (CRISL) to proceed with the
                    necessary precautions to reduce the dispersion rate.
                  </p>
                </div>
              </div>

              <div className="objective">
                <div className="icon">★</div>
                <div className="content">
                  <h2 className="objective-title">
                    Classification of Coconut Caterpillar Infestation
                  </h2>
                  <p className="objective-description">
                    The second objective of this study is to develop a solution
                    to identify the coconut caterpillar infestation (CCI) while
                    differentiating its symptoms from other conditions. The
                    severity of the infestation will also be determined at the
                    same time, and appropriate authorities will be notified in
                    order to expedite the application of control measures to
                    prevent possible outbreak of the pest.
                  </p>
                </div>
              </div>

              <div className="objective">
                <div className="icon">★</div>
                <div className="content">
                  <h2 className="objective-title">
                    Differentiating Magnesium Deficiency, Coconut Leaf
                    Scorching, and Identify Water Resources
                  </h2>
                  <p className="objective-description">
                    The third objective is identifying the pattern of yellowing
                    associated with Mg deficiency, identifying LSD on coconut
                    leaves, and check whether there is a water resource within
                    100m from the farmers' to facilitate constant monitoring to
                    prevent caterpillar outbreaks.
                  </p>
                </div>
              </div>

              <div className="objective">
                <div className="icon">★</div>
                <div className="content">
                  <h2 className="objective-title">
                    Crowdsourcing for information sharing
                  </h2>
                  <p className="objective-description">
                    The fourth objective is to provide a convenient approach for
                    the farmers and industry professionals to utilize the
                    optimal use of the platform by sharing information related
                    to pest control and best agricultural practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="domain-subsection" id="methodology">
          <h3>Methodology</h3>
          <p>
            We are using a mixed-methods approach involving both quantitative
            and qualitative analyses. The project involves data collection from
            software repositories, training machine learning models, and
            conducting surveys to evaluate the usability of the automated
            testing framework.
          </p>
          <img
            src={diagramImage}
            alt="Methodology Diagram"
            className="methodology-diagram"
          />
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
          </p>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains.
          </p>
        </div>
        <div className="domain-subsection" id="technologies-used">
          <h3>Technologies Used</h3>
          <p>
            The technologies employed in this research include Python for data
            analysis, TensorFlow for building and training machine learning
            models, and Docker for containerization. We are also using Git for
            version control and Jenkins for continuous integration and testing.
          </p>
        </div>
      </section>

      <section id="milestones" className="section milestones timeline">
        <h2>Milestones</h2>
        <div id="project-proposal" className="milestone-card">
          <h3>Project Proposal</h3>
          <p>
            Details: Initial project proposal. Date: 01/02/2024. Marks: 10%.
          </p>
        </div>
        <div id="progress-presentation-1" className="milestone-card">
          <h3>Progress Presentation-1</h3>
          <p>
            Details: First progress presentation. Date: 15/03/2024. Marks: 15%.
          </p>
        </div>
        <div id="progress-presentation-2" className="milestone-card">
          <h3>Progress Presentation-2</h3>
          <p>
            Details: Second progress presentation. Date: 01/05/2024. Marks: 15%.
          </p>
        </div>
        <div id="final-assessment" className="milestone-card">
          <h3>Final Assessment</h3>
          <p>
            Details: Final project assessment. Date: 20/07/2024. Marks: 40%.
          </p>
        </div>
        <div id="viva" className="milestone-card">
          <h3>Viva</h3>
          <p>Details: Oral examination (viva). Date: 25/07/2024. Marks: 20%.</p>
        </div>
      </section>

      <section id="documents" className="section documents">
        <h2>Documents</h2>
        <div className="document-list">
          <h3>Produced Documents</h3>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Project Charter
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Proposal Document
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Status Document 1
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Status Document 2
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Status Document 3
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Status Document 4
              </a>
            </li>
          </ul>
          <h3>Pending Documents</h3>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Final Document - Main
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Final Document - Part 1
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Final Document - Part 2
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Final Document - Part 3
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="slides" className="section slides">
        <h2>Slides of Past Presentations</h2>
        <div className="slide-links">
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Proposal Presentation
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Progress Presentation-1
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Progress Presentation-2
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Final Presentation
              </a>
            </li>
          </ul>
          <h3>Future Presentations</h3>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Upcoming Presentation 1
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Upcoming Presentation 2
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="about-us" className="section about-us">
        <h2>About Us</h2>
        <div className="group-members">
          <h3>Group Members</h3>
          <ul>
            <li>
              <img
                src={memberPhoto}
                alt="Group Member 1"
                className="member-photo"
              />
              <p>Name: John Doe</p>
              <p>Email: johndoe@example.com</p>
            </li>
            <li>
              <img
                src={memberPhoto}
                alt="Group Member 2"
                className="member-photo"
              />
              <p>Name: Jane Smith</p>
              <p>Email: janesmith@example.com</p>
            </li>
            <li>
              <img
                src={memberPhoto}
                alt="Group Member 3"
                className="member-photo"
              />
              <p>Name: Mark Johnson</p>
              <p>Email: markjohnson@example.com</p>
            </li>
            <li>
              <img
                src={memberPhoto}
                alt="Group Member 4"
                className="member-photo"
              />
              <p>Name: Emily Davis</p>
              <p>Email: emilydavis@example.com</p>
            </li>
          </ul>
        </div>
        <div className="supervisors">
          <h3>Supervisors</h3>
          <ul>
            <li>
              <p>Name: Dr. Alan Brown</p>
              <p>Email: alanbrown@example.com</p>
            </li>
            <li>
              <p>Name: Dr. Susan Green</p>
              <p>Email: susangreen@example.com</p>
            </li>
            <li>
              <p>Name: Dr. Michael White</p>
              <p>Email: michaelwhite@example.com</p>
            </li>
            <li>
              <p>Name: Dr. Laura Black</p>
              <p>Email: laurablack@example.com</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="contact-us" className="section contact-us">
        <h2>Contact Us</h2>
        <div className="general-contacts">
          <h3>General Contacts</h3>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: generalcontact@example.com</p>
        </div>
      </section>
    </div>
  );
};

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
