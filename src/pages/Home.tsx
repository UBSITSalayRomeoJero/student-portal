function Home() {
    return (
        <div className="container py-5">
        <div className="p-5 bg-light shadow p-3 mb-5 bg-body-tertiary rounded text-center">
            <h1 className="text-success">Welcome to University of Salay Portal</h1>
        <p className="lead">
            Welcome to the official Student Portal. Here, students can access important university updates,
            announcements, scholarship opportunities, and essential resources for their academic journey.
        </p>
        </div>

        <h2 className="text-success">Daily Announcements</h2>
        <p className="placeholder-glow">
            <span className="placeholder col-12 bg-success"></span>
        </p>
        <div className="alert alert-success text-dark" role="alert">
            Enrollment for 2026-2027 First Semester is now open! 
            Visit the enrollment section to secure your spot for the upcoming semester.
        </div>
        <ul>
            <li>College Intramurals First Phase</li>
            <li>Freshies Orientation at the Main Gym</li>
            <li>Exam Schedule</li>
        </ul>
        <p className="placeholder-glow">
            <span className="placeholder col-12 bg-success"></span>
        </p>

        <h2 className="text-success">Scholarship Opportunities</h2>
        <p className="placeholder-glow">
            <span className="placeholder col-12 bg-success"></span>
        </p>
        <div className="alert alert-success text-dark" role="alert">
            Scholarship applications for the upcoming semester are now open. Apply before the deadline to secure your spot.
        </div>
        <ul>
            <li>Academic Excellence Scholarship</li>
            <li>Leadership Scholarship</li>
            <li>Athletic Scholarship</li>
            <li>Financial Assistance Program</li>
        </ul>
        <p className="placeholder-glow">
            <span className="placeholder col-12 bg-success"></span>
        </p>

        <h2 className="text-success">Important Deadlines</h2>
        <p className="placeholder-glow">
            <span className="placeholder col-12 bg-success"></span>
        </p>
        <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">August 15 – Tuition Fee Payment</li>
            <li className="list-group-item">September 1 – Scholarship Application Deadline</li>
            <li className="list-group-item">October 30 – Midterm Grade Submission</li>
            <li className="list-group-item">December 10 – End of Semester Clearance</li>
        </ul>
        <p className="placeholder-glow">
            <span className="placeholder col-12 bg-success"></span>
        </p>

        <h2 className="text-success">Student Resources</h2>
        <p className="placeholder-glow">
            <span className="placeholder col-12 bg-success"></span>
        </p>
        <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">Library – Access online journals and research materials</li>
            <li className="list-group-item">IT Helpdesk – Get technical support for your student accounts</li>
            <li className="list-group-item">Student Organizations – Join clubs to develop skills and leadership</li>
            <li className="list-group-item">Counseling Services – Academic and personal guidance</li>
        </ul>
        <p className="placeholder-glow">
            <span className="placeholder col-12 bg-success"></span>
        </p>


        <h2 className="text-success">Quick Stats</h2>
        <p className="placeholder-glow">
            <span className="placeholder col-12 bg-success"></span>
        </p>
        <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">Over 15,000 active students</li>
            <li className="list-group-item">50+ student organizations and clubs</li>
            <li className="list-group-item">Top 10 in regional academic competitions</li>
            <li className="list-group-item">100+ faculty members and academic staff</li>
        </ul>
        
        <div className="p-5 bg-light shadow p-3 mb-5 bg-body-tertiary rounded text-center">
        <h2 className="text-success mb-3">Need Assistance?</h2>
        <p>
          For inquiries regarding enrollment, scholarships, or academic records, visit the <strong>Contact</strong> page
          to reach the Student Services Office directly.
        </p>
      </div>


    </div>
    );
}

export default Home;