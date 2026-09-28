import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import './LandingPage.css';

const stakeholders = [
  {
    id: 'student',
    title: 'Student',
    description: 'Discover skills, find jobs, and build your career roadmap.',
    icon: '🎓',
  },
  {
    id: 'company',
    title: 'Company',
    description: 'Post vacancies, find talent, and analyze industry skill demand.',
    icon: '🏢',
  },
  {
    id: 'institute',
    title: 'Institute',
    description: 'Analyze curriculum, align with industry needs, and improve outcomes.',
    icon: '🏛️',
  },
  {
    id: 'government',
    title: 'Government',
    description: 'Access district insights, monitor skill gaps, and drive policy.',
    icon: '⚖️',
  },
];

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <Navbar />
      <main className="landing-main">
        <section className="landing-hero">
          <h1 className="landing-heading">
            Bridging the gap between <span className="text-gradient">skills and opportunity</span>
          </h1>
          <p className="landing-subtitle">
            SkillAlign connects students, companies, institutes, and government to
            create a unified skill ecosystem. Select your role to get started.
          </p>
        </section>

        <section className="landing-grid">
          {stakeholders.map((s) => (
            <button
              key={s.id}
              className="stakeholder-card"
              onClick={() => navigate(`/${s.id}`)}
            >
              <span className="stakeholder-icon">{s.icon}</span>
              <h2 className="stakeholder-title">{s.title}</h2>
              <p className="stakeholder-desc">{s.description}</p>
              <span className="stakeholder-cta">Get Started →</span>
            </button>
          ))}
        </section>
      </main>

      <footer className="landing-footer">
        <p>© 2026 SkillAlign. Built for the future of skills.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
