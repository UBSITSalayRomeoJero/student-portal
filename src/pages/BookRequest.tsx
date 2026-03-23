import { useState, type FormEvent, type ChangeEvent } from 'react';

interface BookRequest {
  studentName: string;
  studentID: string;
  bookTitle: string;
  author: string;
  reason: string;
}

function BookRequest() {
  const [studentName, setStudentName] = useState<string>("");
  const [studentID, setStudentID] = useState<string>("");
  const [bookTitle, setBookTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [reason, setReason] = useState<string>("");

  const [requests, setRequests] = useState<BookRequest[]>([]);

  const handleControlledSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!studentName || !studentID || !bookTitle || !author || !reason) {
      alert("Please fill out all forms.");
      return;
    }

    const newRequest: BookRequest = {
      studentName,
      studentID,
      bookTitle,
      author,
      reason
    };

    setRequests([...requests, newRequest]);

    setStudentName("");
    setStudentID("");
    setBookTitle("");
    setAuthor("");
    setReason("");
  };

  return (
    <div className="container py-5">

      <h1 className="text-success text-center mb-4">Student Book Request</h1>

      <div className="card mb-5 shadow">
        <div className="card-header bg-success text-white">
          Controlled Form Book Request
        </div>

        <div className="card-body">

          <form onSubmit={handleControlledSubmit}>

            <div className="input-group mb-3">
              <span className="input-group-text bg-success-subtle">Student Name:</span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={studentName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setStudentName(e.target.value)
                }
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text bg-success-subtle">Student ID:</span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your student ID"
                value={studentID}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setStudentID(e.target.value)
                }
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text bg-success-subtle">Book Title:</span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the name of the book"
                value={bookTitle}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setBookTitle(e.target.value)
                }
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text bg-success-subtle">Author:</span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the author's name"
                value={author}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setAuthor(e.target.value)
                }
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text bg-success-subtle">Reason:</span>
              <textarea
                className="form-control"
                placeholder="Reason for Request"
                value={reason}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setReason(e.target.value)
                }
              />
            </div>

            <button className="btn btn-success w-100">
              Submit Form
            </button>

          </form>
        </div>
      </div>

      {requests.length > 0 && (
        <div className="card shadow">
          <div className="card-header bg-success text-white">
            Submitted Requests
          </div>

          <div className="card-body">

            {requests.map((req, index) => (
              <div key={index} className="border-bottom mb-3 pb-2">
                <p><strong>Student Name:</strong> {req.studentName}</p>
                <p><strong>Student ID:</strong> {req.studentID}</p>
                <p><strong>Book Title:</strong> {req.bookTitle}</p>
                <p><strong>Author:</strong> {req.author}</p>
                <p><strong>Reason:</strong> {req.reason}</p>
              </div>
            ))}

          </div>
        </div>
      )}

    </div>
  );
}

export default BookRequest;