import StudentProfileCard from './StudentProfileCard';
import ProfileCard from './ProfileCard';
import NotificationList from './NotificationList';
import Card from './Card';

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

      <h1>React Practice Exercises</h1>

      <h2>Exercise 1: ProfileCard</h2>
      <ProfileCard
        name="Iman Rawat"
        role="Computer Engineering Student"
        email="rawatimansingh718@gmail.com"
      />

      <h2>Exercise 2: NotificationList</h2>
      <NotificationList />

      <h2>Exercise 3: Card and props.children</h2>
      <Card title="Lecture Topics">
        <ul>
          <li>React Components</li>
          <li>Props</li>
        </ul>
      </Card>

      <Card title="Homework">
        <p>Build a student portfolio component.</p>
      </Card>
    </div>
  );
}

export default App;
