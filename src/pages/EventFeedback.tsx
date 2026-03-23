import { useState, useRef, type FormEvent, type ChangeEvent } from 'react';

interface BookRequest {
  studentName: string;
  email: string;
  feedback: string;
}

function EventFeedback() {
    const studentNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const feedbackRef = useRef<HTMLInputElement>(null);

    const handleUncontrolledSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (
      !studentNameRef.current?.value ||
      !emailRef.current?.value ||
      !feedbackRef.current?.value 
    ) {
      alert("Please fill out all forms.");
      return;
    }
  
    const book: BookRequest = {
      studentName: studentNameRef.current.value,
      email: emailRef.current.value,
      feedback: feedbackRef.current.value
    };
  
    console.log("Uncontrolled Form Book:", book);
    alert("Check the console for your submitted book request!");
  };

  return (
    <div className="containter py-5">

    <div className="card">
        <div className="card-header bg-success text-white">
          Uncontrolled Form Book Request
        </div>

        <div className="card-body">

          <form onSubmit={handleUncontrolledSubmit}>

            <div className="mb-3">
              <label className="form-label bg-success-subtle">Student Name</label>
              <input type="text" placeholder="Enter your full name" className="form-control" ref={studentNameRef}/>
            </div>

            <div className="mb-3">
              <label className="form-label bg-success-subtle">Student Email</label>
              <input type="text" placeholder="Enter your student email" className="form-control" ref={emailRef}/>
            </div>

            <div className="mb-3">
              <label className="form-label bg-success-subtle">Feedback</label>
              <input type="text" placeholder="Enter your feedback for the event" className="form-control" ref={feedbackRef}/>
            </div>

            <button className="btn btn-secondary bg-primary border-primary">
              Submit Form
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default EventFeedback;