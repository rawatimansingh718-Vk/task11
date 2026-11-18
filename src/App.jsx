
import StudentProfileCard from './StudentProfileCard';

function App() {
  return (
    <div className="app-container">
      <h1>Student Directory</h1>

      <div className="student-list">
        <StudentProfileCard
          name="Iman Rawat"
          studentId="202637455"
          major="Computer Engineering"
          year={1}
          gpa={4.0}
        />

        <StudentProfileCard
          name="Anish Tamang"
          studentId="202637595"
          major="Computer Engineering"
          year={1}
          gpa={4.40}
        />

        <StudentProfileCard
          name="Bishal Bohora"
          studentId="202637594"
          major="Computer Engineering"
          year={1}
          gpa={3.60}
        />
      </div>
    </div>
  );
}

export default App;
