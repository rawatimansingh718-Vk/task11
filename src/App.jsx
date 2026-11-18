import StudentProfileCard from './StudentProfileCard';
import ProfileCard from './ProfileCard';
import NotificationList from './NotificationList';
import Card from './Card';

function App() {
  return (
    <div className="app-container">

      <h1>🎓 Student Directory</h1>

      <section className="exercise-section">
        <h2>👨‍🎓 Student Profile Cards</h2>
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
      </section>

      <h1>⚛ React Components & Props — Practice</h1>

      <section className="exercise-section">
        <h2>01 — ProfileCard (Default Props)</h2>
        <p>A reusable profile card with a default avatar image.</p>
        <ProfileCard
          name="Iman Rawat"
          role="Computer Engineering Student"
          email="rawatimansingh718@gmail.com"
        />
      </section>

      <section className="exercise-section">
        <h2>02 — NotificationList (Lists & Conditional Rendering)</h2>
        <p>Notifications displayed using map(), key, and conditional icons.</p>
        <NotificationList />
      </section>

      <section className="exercise-section">
        <h2>03 — Card (props.children)</h2>
        <p>A reusable card that accepts different content as children.</p>

        <Card title="Lecture Topics">
          <ul>
            <li>React Components</li>
            <li>Props</li>
          </ul>
        </Card>

        <Card title="Homework">
          <p>Build a student portfolio component.</p>
        </Card>
      </section>

      <p style={{ textAlign: 'center', color: '#64748b', marginTop: 40 }}>
        Web Programming · Week 11 · React Components & Props
      </p>

    </div>
  );
}

export default App;
