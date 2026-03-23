function About() {
    return (
      <div className="container py-5 bg-light">
  
        <h1 className="mb-5 text-success text-center">About University of Salay</h1>
  
  
        <div className="row g-4">
  
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://sdg.ubaguio.edu/wp-content/uploads/sites/32/2023/05/DSC_4720-scaled.jpg"
                className="card-img-top"
                alt="University of Baguio"
              />
              <div className="card-body">
                <p className="card-text">
                  The University of Baguio (UB; Filipino: Pamantasan ng Baguio),
                  formerly Baguio Technical and Commercial Institute (Baguio Tech),
                  is a private multidisciplinary university in Baguio City, Philippines.
                  Founded by Fernando Gonzaga Bautista and Rosa Castillo Bautista on August 8, 1948.
                </p>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-success">
              <img
                src="https://i0.wp.com/ubaguio.edu/wp-content/uploads/2022/09/UB-Facade-Logo-scaled.jpg?fit=2560%2C1369&ssl=1"
                className="card-img-top"
                alt="University Mission"
              />
              <div className="card-body">
                <h5 className="card-title text-success">Our Mission</h5>
                <p className="card-text">
                  Educates individuals to be empowered professionals in a global community.
                </p>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-success">
              <img
                src="https://thumbs.dreamstime.com/z/university-baguio-general-luna-road-city-was-founded-fernando-gonzaga-bautista-rosa-castillo-started-august-as-183297001.jpg"
                className="card-img-top"
                alt="University Vision"
              />
              <div className="card-body">
                <h5 className="card-title text-success">Our Vision</h5>
                <p className="card-text">
                  Provides balanced quality education by nurturing academic excellence,
                  relevant social skills, and ethical values in a fun learning environment.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="mt-5">
          <h2 className="mb-3 text-success">Academic Programs Offered</h2>
          <p className="text-muted">
            Explore the different academic schools and programs offered by the University of Baguio.
          </p>
  
          <div id="academicsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
  
  <div id="academicsCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
  
      <div className="carousel-item active">
        <img src="https://sdg.ubaguio.edu/wp-content/uploads/sites/32/2023/09/378090003_333994452405005_3490683065822213546_n-1-1024x768.jpg"
          className="d-block w-100" alt="Elementary" style={{height:"400px", objectFit:"cover"}} />
        <div className="carousel-caption d-none d-md-block bg-success bg-opacity-75 rounded p-3">
          <h5>Laboratory Elementary School</h5>
          <p>Provides foundational education that prepares young learners for higher academic levels.</p>
        </div>
      </div>
  
      <div className="carousel-item">
        <img src="https://cls.ucl.ac.uk/wp-content/uploads/2018/05/Teens-hang-out-on-a-wall-800x500px.jpg"
          className="d-block w-100" alt="High School" style={{height:"400px", objectFit:"cover"}} />
        <div className="carousel-caption d-none d-md-block bg-success bg-opacity-75 rounded p-3">
          <h5>High School</h5>
          <p>Offers secondary education focusing on academic excellence and holistic development.</p>
        </div>
      </div>
  
      <div className="carousel-item">
        <img src="https://i0.wp.com/ubaguio.edu/wp-content/uploads/2021/03/DOC_9568.jpg"
          className="d-block w-100" alt="Science High School" style={{height:"400px", objectFit:"cover"}} />
        <div className="carousel-caption d-none d-md-block bg-success bg-opacity-75 rounded p-3">
          <h5>Science High School</h5>
          <p>A specialized program designed for students with strong interest in science and research.</p>
        </div>
      </div>
  
      <div className="carousel-item">
        <img src="https://www.ciit.edu.ph/wp-content/uploads/2022/08/1-1.jpg"
          className="d-block w-100" alt="Business School" style={{height:"400px", objectFit:"cover"}} />
        <div className="carousel-caption d-none d-md-block bg-success bg-opacity-75 rounded p-3">
          <h5>School of Business Administration & Accountancy</h5>
          <p>Develops leadership, management, and financial expertise for future business professionals.</p>
        </div>
      </div>
  
      <div className="carousel-item">
        <img src="https://www.bryantstratton.edu/wp-content/uploads/2024/03/criminal-justice-blog.webp"
          className="d-block w-100" alt="Criminal Justice" style={{height:"400px", objectFit:"cover"}} />
        <div className="carousel-caption d-none d-md-block bg-success bg-opacity-75 rounded p-3">
          <h5>School of Criminal Justice & Public Safety</h5>
          <p>Prepares students for careers in law enforcement, investigation, and public safety.</p>
        </div>
      </div>
  
      <div className="carousel-item">
        <img src="https://www.cest.org.uk/wp-content/uploads/2021/06/cest-science-dentistry-relationship.jpg"
          className="d-block w-100" alt="Dentistry" style={{height:"400px", objectFit:"cover"}} />
        <div className="carousel-caption d-none d-md-block bg-success bg-opacity-75 rounded p-3">
          <h5>School of Dentistry</h5>
          <p>Provides professional dental education with strong clinical training.</p>
        </div>
      </div>
  
      <div className="carousel-item">
        <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780"
          className="d-block w-100" alt="Engineering" style={{height:"400px", objectFit:"cover"}} />
        <div className="carousel-caption d-none d-md-block bg-success bg-opacity-75 rounded p-3">
          <h5>School of Engineering & Architecture</h5>
          <p>Focuses on innovation, design, and engineering solutions for real-world problems.</p>
        </div>
      </div>
  
      <div className="carousel-item">
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          className="d-block w-100" alt="Information Technology" style={{height:"400px", objectFit:"cover"}} />
        <div className="carousel-caption d-none d-md-block bg-success bg-opacity-75 rounded p-3">
          <h5>School of Information Technology</h5>
          <p>Offers programs in software development, networking, and information systems.</p>
        </div>
      </div>
  
      <div className="carousel-item">
        <img src="https://www.studyandgoabroad.com/wp-content/uploads/2016/10/tourism.jpg"
          className="d-block w-100" alt="Hospitality" style={{height:"400px", objectFit:"cover"}} />
        <div className="carousel-caption d-none d-md-block bg-success bg-opacity-75 rounded p-3">
          <h5>School of International Hospitality & Tourism Management</h5>
          <p>Prepares students for careers in global hospitality and tourism industries.</p>
        </div>
      </div>
  
      <div className="carousel-item">
        <img src="https://www.iilm.edu/blog/wp-content/uploads/2022/07/WHAT-IS-LAW.jpg"
          className="d-block w-100" alt="Law" style={{height:"400px", objectFit:"cover"}} />
        <div className="carousel-caption d-none d-md-block bg-success bg-opacity-75 rounded p-3">
          <h5>School of Law</h5>
          <p>Provides legal education preparing students for the legal profession and judiciary service.</p>
        </div>
      </div>
  
      <div className="carousel-item">
        <img src="https://study.com/cimages/course-image/natural-sciences-course_106450_large.jpg"
          className="d-block w-100" alt="Natural Sciences" style={{height:"400px", objectFit:"cover"}} />
        <div className="carousel-caption d-none d-md-block bg-success bg-opacity-75 rounded p-3">
          <h5>School of Natural Sciences</h5>
          <p>Focuses on scientific research, laboratory work, and applied sciences.</p>
        </div>
      </div>
  
      <div className="carousel-item">
        <img src="https://www.etextonline.org/images/flyer/1583756959.jpg"
          className="d-block w-100" alt="Nursing" style={{height:"400px", objectFit:"cover"}} />
        <div className="carousel-caption d-none d-md-block bg-success bg-opacity-75 rounded p-3">
          <h5>School of Nursing</h5>
          <p>Trains students to become competent healthcare professionals.</p>
        </div>
      </div>
  
      <div className="carousel-item">
        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
          className="d-block w-100" alt="Teacher Education" style={{height:"400px", objectFit:"cover"}} />
        <div className="carousel-caption d-none d-md-block bg-success bg-opacity-75 rounded p-3">
          <h5>School of Teacher Education & Liberal Arts</h5>
          <p>Develops educators and professionals in the humanities and social sciences.</p>
        </div>
      </div>
    </div>
  
          <button className="carousel-control-prev" type="button" data-bs-target="#academicsCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
          </button>
              <button className="carousel-control-next" type="button" data-bs-target="#academicsCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
          </button>
          </div>
      </div>
  
            <button className="carousel-control-prev" type="button" data-bs-target="#academicsCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#academicsCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
  
        <h2 className="mt-5 mb-3 text-success">Campus Facilities or Offices</h2>
        <div className="list-group mb-5">
          {["Admission & Records Center", "Athletics Office", "Library", "Management Information Systems", "Office of Student Affairs", "Security Office"].map((office, idx) => (
            <li
              key={idx}
              className={`list-group-item ${idx === 0 ? "active" : ""} list-group-item-action`}
              style={{color: idx === 0 ? "white" : "black", backgroundColor: idx === 0 ? "#15834c" : "#f8f9fa"}}
            >
              {office}
            </li>
          ))}
        </div>
  
        <h2 className="mt-4 mb-3 text-success">Student Support</h2>
        <p>
          The university provides support services such as academic advising, scholarship programs, career counseling,
          and extracurricular activities to ensure students succeed both academically and personally.
        </p>
      </div>
    );
  }
  
  export default About;