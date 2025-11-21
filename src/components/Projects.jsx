import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Activity, Layers, Server, Database } from 'lucide-react'
import './Section.css'
import './Projects.css'

const projects = [
  {
    title: 'LedgerCore Banking APIs',
    subtitle: 'Realtime core banking rails powering compliant payments & ledger operations',
    badges: ['Realtime', 'Ledger', 'Compliance'],
    persona: 'Used by compliance teams, treasury squads, and partner fintechs who need instant settlement with audit-ready trails.',
    accent: 'linear-gradient(135deg, rgba(60, 83, 255, 0.25), rgba(118, 75, 162, 0.35))',
    sections: [
      {
        title: 'Problem',
        copy:
          'Regional banks struggled with nightly batch processing, delayed settlements, and error-prone reconciliation across siloed ledgers.',
      },
      {
        title: 'Solution',
        copy:
          'Composed modular Spring Boot services with sagas for multi-ledger workflows, automated compliance checks, and realtime ledger snapshots.',
      },
      {
        title: 'Architecture',
        copy:
          'CQRS command services + Kafka event bus + PostgreSQL per service; Redis streams for idempotency, Vault for secrets, Grafana for tracing.',
      },
      {
        title: 'Scale',
        copy: '12M+ tx/day · 6 regions · 45ms p99 · 99.98% availability with active-active clusters.',
      },
      {
        title: 'Impact',
        copy: 'Cut settlement time by 45%, automated SOX-ready audit trails, and unlocked new B2B partnerships in LATAM.',
      },
    ],
    metrics: [
      { value: '12M+', label: 'Transactions/day', detail: '6 active regions' },
      { value: '45ms', label: 'p99 latency', detail: 'Realtime ledger sync' },
      { value: '99.98%', label: 'Uptime', detail: 'Multi-region active-active' },
    ],
    techHighlights: [
      { icon: Server, label: 'Java 17' },
      { icon: Layers, label: 'Spring Cloud' },
      { icon: Activity, label: 'Kafka' },
      { icon: Database, label: 'PostgreSQL' },
    ],
    links: { caseStudy: '#', repo: '#', demo: '#' },
  },
]

const Projects = () => (
  <section id="projects" className="projects">
    <div className="section-container">
      <div className="section-header">
        <span className="section-kicker">Projects</span>
        <h2 className="section-title">Case studies built for scale, resiliency, and measurable outcomes</h2>
        <p className="section-subtitle">
          Each build pairs a clear problem statement with architecture decisions, measurable impact, and transparent tech trade-offs.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="case-study-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="case-card-top">
              <div className="project-meta">
                <div className="project-badges">
                  {project.badges.map((badge) => (
                    <span key={badge} className="project-badge">
                      {badge}
                    </span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <div className="project-persona">
                  <span className="persona-label">Built for</span>
                  <p>{project.persona}</p>
                </div>
              </div>
              <motion.div
                className="project-media"
                style={{ background: project.accent }}
                whileHover={{ rotateX: 4, rotateY: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 150, damping: 12 }}
              >
                <div className="media-overlay">
                  <span>Architecture Snapshot</span>
                  <span className="media-detail">Hover to explore</span>
                </div>
                <div className="media-grid">
                  <div />
                </div>
              </motion.div>
            </div>

            <div className="project-sections">
              {project.sections.map((section) => (
                <div key={section.title} className="project-section">
                  <h4>{section.title}</h4>
                  <p>{section.copy}</p>
                </div>
              ))}
            </div>

            <div className="project-metrics">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                  <span className="metric-detail">{metric.detail}</span>
                </div>
              ))}
            </div>

            <div className="project-tech-icons">
              {project.techHighlights.map((tech) => (
                <div key={tech.label} className="tech-chip">
                  <tech.icon size={16} />
                  <span>{tech.label}</span>
                </div>
              ))}
            </div>

            <div className="project-actions">
              <a href={project.links.caseStudy} className="project-link primary" target="_blank" rel="noreferrer">
                <span>View Case Study</span>
                <ExternalLink size={16} />
              </a>
              <a href={project.links.repo} className="project-link secondary" target="_blank" rel="noreferrer">
                <span>Explore Repo</span>
                <Github size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Projects


