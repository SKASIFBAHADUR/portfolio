import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  Server,
  Activity,
  Cloud,
  Gauge,
  Shield,
  Database,
  Cpu,
  Code2,
  Zap,
  GitBranch,
  Workflow,
} from 'lucide-react'
import './Section.css'
import './Skills.css'

const skillCategories = [
  {
    id: 'backend',
    label: 'Backend Engineering',
    icon: Server,
    description: 'Distributed systems, event-driven architecture, concurrency, and API design.',
    skills: [
      {
        name: 'Spring Boot 3',
        level: 'Expert',
        experience: '3+ yrs',
        impact: 'Built 250K TPS distributed banking APIs with 99.99% uptime.',
        focus: ['distributed systems', 'resilience', 'API design'],
        icon: Code2,
        mastery: 95,
      },
      {
        name: 'Java 17',
        level: 'Expert',
        experience: '5+ yrs',
        impact: 'Designed high-throughput services with structured concurrency & profiling.',
        focus: ['concurrency', 'performance engineering'],
        icon: Cpu,
        mastery: 92,
      },
      {
        name: 'Kafka & Event Streams',
        level: 'Advanced',
        experience: '3 yrs',
        impact: 'Shipped event-driven pipelines handling 8TB/day telemetry.',
        focus: ['event-driven architecture', 'scalability'],
        icon: Activity,
        mastery: 88,
      },
    ],
  },
  {
    id: 'platform',
    label: 'Platform & Reliability',
    icon: Cloud,
    description: 'Infrastructure, automation, observability, and release engineering.',
    skills: [
      {
        name: 'Docker & Kubernetes',
        level: 'Advanced',
        experience: '3 yrs',
        impact: 'Rolled out GitOps deployments across multi-region clusters.',
        focus: ['scalability', 'platform engineering'],
        icon: Cloud,
        mastery: 85,
      },
      {
        name: 'CI/CD & GitHub Actions',
        level: 'Advanced',
        experience: '4 yrs',
        impact: '10+ automated release pipelines with policy gates & smoke tests.',
        focus: ['automation', 'developer productivity'],
        icon: GitBranch,
        mastery: 83,
      },
      {
        name: 'Observability Stack',
        level: 'Advanced',
        experience: '3 yrs',
        impact: 'Instrumented tracing/logging that cut MTTR by 40%.',
        focus: ['observability', 'resilience'],
        icon: Gauge,
        mastery: 80,
      },
    ],
  },
  {
    id: 'data-security',
    label: 'Data & Security',
    icon: Shield,
    description: 'Storage engines, performance tuning, auth, and compliance.',
    skills: [
      {
        name: 'PostgreSQL & ClickHouse',
        level: 'Advanced',
        experience: '4 yrs',
        impact: 'Optimized OLTP/OLAP workloads with partitioning & vector indexes.',
        focus: ['performance engineering', 'scalability'],
        icon: Database,
        mastery: 84,
      },
      {
        name: 'Spring Security / Keycloak',
        level: 'Advanced',
        experience: '3 yrs',
        impact: 'Centralized auth for 60+ services with policy automation.',
        focus: ['security', 'compliance'],
        icon: Shield,
        mastery: 82,
      },
      {
        name: 'API Governance',
        level: 'Advanced',
        experience: '4 yrs',
        impact: 'Designed resilient API contracts & schema registries.',
        focus: ['API design', 'platform governance'],
        icon: Workflow,
        mastery: 81,
      },
    ],
  },
]

const timeline = [
  { year: '2019', milestone: 'Core Java & REST APIs' },
  { year: '2021', milestone: 'Spring + SQL + production APIs' },
  { year: '2023', milestone: 'Kafka, distributed systems, resilience' },
  { year: '2024', milestone: 'ClickHouse, observability, high-scale platforms' },
]

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('backend')
  const activeSkills = skillCategories.find((category) => category.id === activeCategory)

  return (
    <section id="skills" className="skills">
      <Helmet>
        <title>Skills | Full Stack Developer Skills | Shaik Bahadur</title>
        <meta name="description" content="A complete list of my technical and professional skills as a full stack developer. Proficient in Java, Spring Boot, React, JavaScript, MySQL, MongoDB, APIs, microservices, and cloud-ready deployments. My skillset covers frontend, backend, databases, version control, and clean coding practices." />
        <meta name="keywords" content="full stack developer skills, Java and Spring Boot skills, React developer skillset, backend developer technical skills, web development technologies list, Java skills, microservices skills, REST API development, database skills" />
      </Helmet>
      <div className="section-container">
        <div className="skills-header">
          <div className="section-header">
            <span className="section-kicker">Skills</span>
            <h2 className="section-title">
              Backend-first toolkit for{' '}
              <span className="gradient-highlight">distributed systems</span>,{' '}
              <span className="gradient-highlight">event-driven architecture</span>, and{' '}
              <span className="gradient-highlight">performance engineering</span>
            </h2>
            <p className="section-subtitle">
              Proven experience designing resilient microservices, high-concurrency APIs, and cloud-native platforms that ship fast and scale cleanly.
            </p>
          </div>
          <div className="skills-filters">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`filter-chip ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <category.icon size={16} />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeCategory}
          className="skills-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="skills-panel-header">
            <div>
              <h3>{activeSkills.label}</h3>
              <p>{activeSkills.description}</p>
            </div>
            <span className="panel-meta">Role alignment: Backend Engineer · Platform Engineer · SRE partner</span>
          </div>

          <div className="skills-matrix">
            {activeSkills.skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              >
                <div className="skill-card-header">
                  <div className="skill-icon-wrapper">
                    <skill.icon size={18} />
                  </div>
                  <div>
                    <h4>{skill.name}</h4>
                    <span className="skill-meta">
                      {skill.level} · {skill.experience}
                    </span>
                  </div>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <p className="skill-impact">{skill.impact}</p>
                <div className="skill-focus">
                  {skill.focus.map((focus) => (
                    <span key={focus}>{focus}</span>
                  ))}
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: `${skill.mastery}%` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="skills-timeline">
          {timeline.map((item, index) => (
            <div key={item.year} className="timeline-node">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <p>{item.milestone}</p>
              </div>
              {index !== timeline.length - 1 && <div className="timeline-connector" />}
            </div>
          ))}
        </div>

        <div className="skills-tags">
          {['scalability', 'resilience', 'concurrency', 'API design', 'performance engineering', 'observability', 'CI/CD automation', 'cloud-native delivery'].map(
            (tag
            ) => (
              <span key={tag} className="skills-tag">
                {tag}
              </span>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


