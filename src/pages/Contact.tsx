function Contact() {
    return (
        <div className="container py-5">

            <h1 className="mb-4 text-success text-center">Contact Student Services</h1>

            <p>
            Need help with enrollment, scholarships, academic records, or other student concerns?
            Reach out to the Student Services Office and we’ll assist you quickly as possible!
            </p>

            <form className="mt-4">

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Student Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">@s.ubaguio.edu</span>
            </div>

            <div className="mb-3">
                <label htmlFor="basic-url" className="form-label">Student ID</label>
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">ID</span>
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                </div>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text">Subject/Concern</span>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
            </div>

            <div className="input-group">
                <span className="input-group-text">Message</span>
                <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>

            <button type="submit" className="btn btn-success w-100">Send Message</button>

            </form>
        </div>
    );
}

export default Contact;