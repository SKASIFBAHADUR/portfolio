import React, { useState, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Server, Code, Database, Globe, Shield, Zap, Layers } from 'lucide-react'
import './CaseStudyPage.css'

const CaseStudyPage = () => {
  const navigate = useNavigate()
  const { projectId } = useParams()

  // Case study data for LedgerCore Banking System
  const caseStudyData = {
    ledgercore: {
      title: 'LedgerCore Banking System',
      overview: 'LedgerCore Banking System is a full-stack secure banking platform that supports authentication, accounts, transactions, and admin controls.',
      demoLink: 'https://sprightly-stroopwafel-9bee75.netlify.app',
      frontendRepo: 'https://github.com/SKASIFBAHADUR/ledger_core_frontend',
      backendRepo: 'https://github.com/SKASIFBAHADUR/ledger_core_backend',
    },
  }

  const data = caseStudyData[projectId] || caseStudyData.ledgercore

  const [showRepoDropdown, setShowRepoDropdown] = useState(false)

  return (
    <div className="case-study-page">
      {/* Animated Background Effects */}
      <div className="case-study-background">
        <div className="animated-grid"></div>
        <div className="floating-particles">
          {useMemo(() => 
            Array.from({ length: 10 }, (_, i) => {
              const left = Math.random() * 100
              const top = Math.random() * 100
              const duration = 5 + Math.random() * 3
              const delay = Math.random() * 2
              return (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    '--duration': `${duration}s`,
                    '--delay': `${delay}s`,
                  }}
                />
              )
            }), []
          )}
        </div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="case-study-container">
        {/* Header with back button */}
        <motion.button
          className="back-button"
          onClick={() => navigate('/projects')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </motion.button>

        {/* Project Overview */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 1</span>
            <h2 className="section-title">Project Overview</h2>
          </div>
          <p className="section-content">{data.overview}</p>
          <div className="overview-details">
            <div className="detail-item">
              <strong>What it does:</strong> A secure banking platform with authentication, account management, transactions, and admin controls.
            </div>
            <div className="detail-item">
              <strong>Who it's for:</strong> Financial institutions, fintech companies, and developers building banking solutions.
            </div>
            <div className="detail-item">
              <strong>Why I built it:</strong> To learn Spring Boot security, JWT authentication, and build a production-ready full-stack application with real-world banking operations.
            </div>
            <div className="demo-link-container">
              <a href={data.demoLink} target="_blank" rel="noreferrer" className="demo-link">
                <Globe size={18} />
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </a>
              <a
                href={data.frontendRepo}
                target="_blank"
                rel="noreferrer"
                className="demo-link"
              >
                <Github size={18} />
                <span>Frontend Repo</span>
                <ExternalLink size={16} />
              </a>
              <a
                href={data.backendRepo}
                target="_blank"
                rel="noreferrer"
                className="demo-link"
              >
                <Github size={18} />
                <span>Backend Repo</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Problem Statement */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 2</span>
            <h2 className="section-title">Problem Statement</h2>
          </div>
          <div className="section-content">
            <p>
              People need a safe way to manage banking operations with secure authentication and transaction processing.
              The challenge was creating a secure, scalable banking backend that handles:
            </p>
            <ul className="problem-list">
              <li>Secure user authentication and authorization</li>
              <li>Real-time transaction processing</li>
              <li>Account balance management</li>
              <li>Audit trails for compliance</li>
              <li>Role-based access control for admin operations</li>
            </ul>
            <p>
              Existing solutions lacked full JWT-based security with refresh tokens, proper role-based access control,
              and comprehensive transaction ledger management.
            </p>
          </div>
        </motion.section>

        {/* Goals & Requirements */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 3</span>
            <h2 className="section-title">Goals & Requirements</h2>
          </div>
          <div className="goals-container">
            <div className="goals-column">
              <h3 className="goals-subtitle">Functional Goals</h3>
              <ul className="goals-list">
                <li>User authentication with JWT</li>
                <li>JWT + Refresh token system</li>
                <li>Secure banking operations</li>
                <li>Admin dashboard</li>
                <li>CRUD operations for customers and accounts</li>
                <li>Transaction processing (deposit, withdraw, transfer)</li>
                <li>Logging and error handling</li>
                <li>Ledger entry tracking</li>
              </ul>
            </div>
            <div className="goals-column">
              <h3 className="goals-subtitle">Technical Goals</h3>
              <ul className="goals-list">
                <li>Learn Spring Boot security</li>
                <li>Deploy a real-world application</li>
                <li>Practice database design</li>
                <li>Build production-ready APIs</li>
                <li>Optimize frontend architecture</li>
                <li>Implement proper error handling</li>
                <li>Set up CI/CD pipelines</li>
                <li>Learn deployment best practices</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* System Architecture */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 4</span>
            <h2 className="section-title">System Architecture</h2>
          </div>
          <div className="architecture-diagram">
            <div className="arch-layer">
              <div className="arch-box frontend">
                <Code size={24} />
                <h4>Frontend</h4>
                <p>React / Vite</p>
                <p className="arch-detail">Netlify</p>
              </div>
            </div>
            <div className="arch-arrow">↓</div>
            <div className="arch-layer">
              <div className="arch-box backend">
                <Server size={24} />
                <h4>Backend</h4>
                <p>Spring Boot</p>
                <p className="arch-detail">Render</p>
              </div>
            </div>
            <div className="arch-arrow">↓</div>
            <div className="arch-layer">
              <div className="arch-box database">
                <Database size={24} />
                <h4>Database</h4>
                <p>MySQL</p>
                <p className="arch-detail">Railway</p>
              </div>
            </div>
            <div className="arch-auth">
              <div className="arch-box auth">
                <Shield size={24} />
                <h4>Authentication</h4>
                <p>JWT + Cookies</p>
              </div>
            </div>
          </div>
          <div className="section-content">
            <p>
              The system follows a three-tier architecture with clear separation of concerns:
            </p>
            <ul className="architecture-list">
              <li><strong>Frontend (React/Vite):</strong> Handles user interface, API calls via Axios, and state management</li>
              <li><strong>Backend (Spring Boot):</strong> RESTful APIs, business logic, security, and data validation</li>
              <li><strong>Database (MySQL):</strong> Persistent storage for users, accounts, transactions, and ledger entries</li>
              <li><strong>Authentication:</strong> JWT tokens stored in httpOnly cookies for security</li>
            </ul>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 5</span>
            <h2 className="section-title">Tech Stack</h2>
          </div>
          <div className="tech-stack-grid">
            <div className="tech-category">
              <h3 className="tech-category-title">Frontend</h3>
              <div className="tech-items">
                <span className="tech-item">React</span>
                <span className="tech-item">Vite</span>
                <span className="tech-item">Axios</span>
                <span className="tech-item">Tailwind CSS</span>
                <span className="tech-item">React Router</span>
                <span className="tech-item">Lucide React</span>
              </div>
            </div>
            <div className="tech-category">
              <h3 className="tech-category-title">Backend</h3>
              <div className="tech-items">
                <span className="tech-item">Spring Boot</span>
                <span className="tech-item">Spring Security</span>
                <span className="tech-item">JWT</span>
                <span className="tech-item">JPA / Hibernate</span>
                <span className="tech-item">BCrypt</span>
                <span className="tech-item">Maven</span>
              </div>
            </div>
            <div className="tech-category">
              <h3 className="tech-category-title">Database</h3>
              <div className="tech-items">
                <span className="tech-item">MySQL</span>
                <span className="tech-item">Railway</span>
              </div>
            </div>
            <div className="tech-category">
              <h3 className="tech-category-title">Hosting</h3>
              <div className="tech-items">
                <span className="tech-item">Render</span>
                <span className="tech-item">Netlify</span>
              </div>
            </div>
            <div className="tech-category">
              <h3 className="tech-category-title">Tools</h3>
              <div className="tech-items">
                <span className="tech-item">Postman</span>
                <span className="tech-item">JUnit</span>
                <span className="tech-item">Git</span>
                <span className="tech-item">GitHub</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Database Design */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 6</span>
            <h2 className="section-title">Database Design</h2>
          </div>
          <div className="database-tables">
            <div className="db-table">
              <h3 className="table-name">Users Table</h3>
              <div className="table-fields">
                <div className="field">
                  <span className="field-name">id</span>
                  <span className="field-type">BIGINT (PK)</span>
                </div>
                <div className="field">
                  <span className="field-name">email</span>
                  <span className="field-type">VARCHAR (UNIQUE)</span>
                </div>
                <div className="field">
                  <span className="field-name">username</span>
                  <span className="field-type">VARCHAR</span>
                </div>
                <div className="field">
                  <span className="field-name">password</span>
                  <span className="field-type">VARCHAR (BCrypt)</span>
                </div>
                <div className="field">
                  <span className="field-name">role</span>
                  <span className="field-type">ENUM (USER, ADMIN)</span>
                </div>
                <div className="field">
                  <span className="field-name">status</span>
                  <span className="field-type">ENUM (ACTIVE, INACTIVE)</span>
                </div>
              </div>
            </div>
            <div className="db-table">
              <h3 className="table-name">Accounts Table</h3>
              <div className="table-fields">
                <div className="field">
                  <span className="field-name">id</span>
                  <span className="field-type">BIGINT (PK)</span>
                </div>
                <div className="field">
                  <span className="field-name">account_number</span>
                  <span className="field-type">VARCHAR (UNIQUE)</span>
                </div>
                <div className="field">
                  <span className="field-name">customer_id</span>
                  <span className="field-type">BIGINT (FK → Users)</span>
                </div>
                <div className="field">
                  <span className="field-name">balance</span>
                  <span className="field-type">DECIMAL</span>
                </div>
                <div className="field">
                  <span className="field-name">account_type</span>
                  <span className="field-type">ENUM (SAVINGS, CURRENT)</span>
                </div>
              </div>
            </div>
            <div className="db-table">
              <h3 className="table-name">Transactions Table</h3>
              <div className="table-fields">
                <div className="field">
                  <span className="field-name">id</span>
                  <span className="field-type">BIGINT (PK)</span>
                </div>
                <div className="field">
                  <span className="field-name">account_id</span>
                  <span className="field-type">BIGINT (FK → Accounts)</span>
                </div>
                <div className="field">
                  <span className="field-name">type</span>
                  <span className="field-type">ENUM (DEPOSIT, WITHDRAW, TRANSFER)</span>
                </div>
                <div className="field">
                  <span className="field-name">amount</span>
                  <span className="field-type">DECIMAL</span>
                </div>
                <div className="field">
                  <span className="field-name">reference</span>
                  <span className="field-type">VARCHAR (UNIQUE)</span>
                </div>
                <div className="field">
                  <span className="field-name">created_at</span>
                  <span className="field-type">TIMESTAMP</span>
                </div>
              </div>
            </div>
            <div className="db-table">
              <h3 className="table-name">Ledger Entries Table</h3>
              <div className="table-fields">
                <div className="field">
                  <span className="field-name">id</span>
                  <span className="field-type">BIGINT (PK)</span>
                </div>
                <div className="field">
                  <span className="field-name">account_id</span>
                  <span className="field-type">BIGINT (FK → Accounts)</span>
                </div>
                <div className="field">
                  <span className="field-name">transaction_id</span>
                  <span className="field-type">BIGINT (FK → Transactions)</span>
                </div>
                <div className="field">
                  <span className="field-name">debit</span>
                  <span className="field-type">DECIMAL</span>
                </div>
                <div className="field">
                  <span className="field-name">credit</span>
                  <span className="field-type">DECIMAL</span>
                </div>
                <div className="field">
                  <span className="field-name">balance_after</span>
                  <span className="field-type">DECIMAL</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Backend Logic */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 7</span>
            <h2 className="section-title">Backend Logic (Core Features Explained)</h2>
          </div>
          <div className="backend-features">
            <div className="feature-block">
              <h3 className="feature-title">⚡ Authentication Flow</h3>
              <ul className="feature-list">
                <li><strong>Login:</strong> User credentials validated → Generate access & refresh tokens</li>
                <li><strong>Refresh Token:</strong> Stored in httpOnly cookie for security</li>
                <li><strong>Token Rotation:</strong> New refresh token issued on each refresh</li>
                <li><strong>Logout:</strong> Tokens invalidated and cookies cleared</li>
                <li><strong>Security Filter Chain:</strong> JWT validation on protected endpoints</li>
              </ul>
            </div>
            <div className="feature-block">
              <h3 className="feature-title">⚡ Account System</h3>
              <ul className="feature-list">
                <li><strong>Create Account:</strong> Generate unique account number, link to customer</li>
                <li><strong>Deposit:</strong> Add funds, update balance, create ledger entry</li>
                <li><strong>Withdraw:</strong> Validate sufficient balance, deduct funds, create ledger entry</li>
                <li><strong>Transfer:</strong> Atomic operation between two accounts with ledger entries</li>
                <li><strong>Ledger Entries:</strong> Double-entry bookkeeping for audit trail</li>
              </ul>
            </div>
            <div className="feature-block">
              <h3 className="feature-title">⚡ Error Handling</h3>
              <ul className="feature-list">
                <li><strong>Custom Exceptions:</strong> Business logic exceptions (InsufficientBalanceException, etc.)</li>
                <li><strong>Global Exception Handler:</strong> Centralized error response formatting</li>
                <li><strong>Validation:</strong> Input validation using Spring Validation annotations</li>
              </ul>
            </div>
            <div className="feature-block">
              <h3 className="feature-title">⚡ Testing</h3>
              <ul className="feature-list">
                <li><strong>Postman Collection:</strong> API endpoint testing and documentation</li>
                <li><strong>JUnit Tests:</strong> Unit and integration tests for services</li>
                <li><strong>K6 Load Tests:</strong> Performance testing under load</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Frontend Features */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 8</span>
            <h2 className="section-title">Frontend Features</h2>
          </div>
          <div className="frontend-features-grid">
            <div className="frontend-feature">
              <h3>Login Page</h3>
              <p>Secure authentication with email/password, JWT token management, and automatic redirect</p>
            </div>
            <div className="frontend-feature">
              <h3>Dashboard</h3>
              <p>Overview statistics, quick access to features, and system status information</p>
            </div>
            <div className="frontend-feature">
              <h3>Customer Management</h3>
              <p>Create, view, update, and delete customers with search functionality</p>
            </div>
            <div className="frontend-feature">
              <h3>Account Management</h3>
              <p>Create accounts, view balances, manage account types (Savings/Current)</p>
            </div>
            <div className="frontend-feature">
              <h3>Transaction Processing</h3>
              <p>Deposit, withdraw, and transfer operations with idempotency key support</p>
            </div>
            <div className="frontend-feature">
              <h3>Ledger Viewing</h3>
              <p>Search ledger entries by account number or transaction reference</p>
            </div>
            <div className="frontend-feature">
              <h3>Responsive UI</h3>
              <p>Fully responsive design with Tailwind CSS, works on all devices</p>
            </div>
            <div className="frontend-feature">
              <h3>API Integration</h3>
              <p>Axios-based API calls with interceptors for token refresh and error handling</p>
            </div>
          </div>
        </motion.section>

        {/* Challenges */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 9</span>
            <h2 className="section-title">Challenges You Faced</h2>
          </div>
          <div className="challenges-list">
            <div className="challenge-item">
              <Zap className="challenge-icon" size={20} />
              <div>
                <h3>Setting up JWT with Refresh Tokens</h3>
                <p>Implementing secure token rotation and httpOnly cookie storage</p>
              </div>
            </div>
            <div className="challenge-item">
              <Zap className="challenge-icon" size={20} />
              <div>
                <h3>Fixing CORS Issues</h3>
                <p>Configuring proper CORS policies for frontend-backend communication</p>
              </div>
            </div>
            <div className="challenge-item">
              <Zap className="challenge-icon" size={20} />
              <div>
                <h3>Deploying Spring Boot + MySQL</h3>
                <p>Setting up database connections and environment variables on Render</p>
              </div>
            </div>
            <div className="challenge-item">
              <Zap className="challenge-icon" size={20} />
              <div>
                <h3>Storing Tokens in httpOnly Cookie</h3>
                <p>Implementing secure cookie-based token storage instead of localStorage</p>
              </div>
            </div>
            <div className="challenge-item">
              <Zap className="challenge-icon" size={20} />
              <div>
                <h3>Password Hashing (BCrypt)</h3>
                <p>Properly implementing password hashing and verification</p>
              </div>
            </div>
            <div className="challenge-item">
              <Zap className="challenge-icon" size={20} />
              <div>
                <h3>Handling 500 Errors During Login</h3>
                <p>Debugging and fixing authentication flow issues</p>
              </div>
            </div>
            <div className="challenge-item">
              <Zap className="challenge-icon" size={20} />
              <div>
                <h3>React Router Issues on Netlify</h3>
                <p>Fixing routing with _redirects file for SPA deployment</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Solutions */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 10</span>
            <h2 className="section-title">How You Solved These Challenges</h2>
          </div>
          <div className="solutions-list">
            <div className="solution-item">
              <div className="solution-number">1</div>
              <div>
                <h3>Added BCrypt Password Hashing</h3>
                <p>Implemented Spring Security's BCryptPasswordEncoder for secure password storage</p>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-number">2</div>
              <div>
                <h3>Fixed DB Schema Issues</h3>
                <p>Properly designed database relationships with foreign keys and indexes</p>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-number">3</div>
              <div>
                <h3>Used Proxy in Vite Dev Environment</h3>
                <p>Configured Vite proxy to handle CORS during development</p>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-number">4</div>
              <div>
                <h3>Implemented Strict CORS Config</h3>
                <p>Added proper CORS configuration in Spring Boot security settings</p>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-number">5</div>
              <div>
                <h3>Moved Frontend to Netlify</h3>
                <p>Deployed frontend to Netlify for better SPA support and CDN benefits</p>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-number">6</div>
              <div>
                <h3>Added _redirects File for React Router</h3>
                <p>Created _redirects file to handle client-side routing on Netlify</p>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-number">7</div>
              <div>
                <h3>Fixed Render Deployment Errors</h3>
                <p>Configured environment variables and build settings correctly</p>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-number">8</div>
              <div>
                <h3>Created Admin Seed User Manually</h3>
                <p>Set up initial admin user for testing and system access</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Performance Considerations */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 11</span>
            <h2 className="section-title">Performance Considerations</h2>
          </div>
          <div className="performance-grid">
            <div className="performance-item">
              <Layers size={24} />
              <h3>Pagination for Transactions</h3>
              <p>Implemented pagination to handle large transaction lists efficiently</p>
            </div>
            <div className="performance-item">
              <Layers size={24} />
              <h3>Database Indexing</h3>
              <p>Added indexes on frequently queried fields (account_number, email, reference)</p>
            </div>
            <div className="performance-item">
              <Layers size={24} />
              <h3>Thread Safety</h3>
              <p>Used @Transactional annotations for atomic operations and data consistency</p>
            </div>
            <div className="performance-item">
              <Layers size={24} />
              <h3>Optimized Queries</h3>
              <p>Used JPA relationships and eager/lazy loading strategies appropriately</p>
            </div>
          </div>
        </motion.section>

        {/* Security Features */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 12</span>
            <h2 className="section-title">Security Features</h2>
          </div>
          <div className="security-grid">
            <div className="security-item">
              <Shield size={24} />
              <h3>BCrypt Password Hashing</h3>
              <p>All passwords are hashed using BCrypt with salt rounds</p>
            </div>
            <div className="security-item">
              <Shield size={24} />
              <h3>Role-Based Authorization</h3>
              <p>Admin and User roles with different access levels</p>
            </div>
            <div className="security-item">
              <Shield size={24} />
              <h3>JWT Validation</h3>
              <p>All protected endpoints validate JWT tokens</p>
            </div>
            <div className="security-item">
              <Shield size={24} />
              <h3>httpOnly Cookies</h3>
              <p>Refresh tokens stored in httpOnly cookies to prevent XSS attacks</p>
            </div>
            <div className="security-item">
              <Shield size={24} />
              <h3>Input Validation</h3>
              <p>Server-side validation for all user inputs</p>
            </div>
            <div className="security-item">
              <Shield size={24} />
              <h3>CSRF Protection</h3>
              <p>CSRF protection disabled for API endpoints (stateless JWT authentication)</p>
            </div>
          </div>
        </motion.section>

        {/* Deployment Architecture */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 13</span>
            <h2 className="section-title">Deployment Architecture</h2>
          </div>
          <div className="deployment-grid">
            <div className="deployment-item">
              <Globe size={24} />
              <h3>Frontend → Netlify</h3>
              <ul>
                <li>Automatic builds from GitHub</li>
                <li>CDN distribution</li>
                <li>SPA routing support</li>
                <li>Environment variables configured</li>
              </ul>
            </div>
            <div className="deployment-item">
              <Server size={24} />
              <h3>Backend → Render</h3>
              <ul>
                <li>Spring Boot application deployment</li>
                <li>Environment variables for database</li>
                <li>Health check endpoints</li>
                <li>Auto-restart on crashes</li>
              </ul>
            </div>
            <div className="deployment-item">
              <Database size={24} />
              <h3>Database → Railway</h3>
              <ul>
                <li>MySQL database hosting</li>
                <li>Connection pooling</li>
                <li>Automatic backups</li>
                <li>Secure connections</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Screenshots */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 14</span>
            <h2 className="section-title">Screenshots or Demo Video</h2>
          </div>
          <div className="screenshots-note">
            <p>
              Visit the live demo to see the application in action:
            </p>
            <a href={data.demoLink} target="_blank" rel="noreferrer" className="demo-link-large">
              <Globe size={20} />
              <span>View Live Application</span>
              <ExternalLink size={18} />
            </a>
            <p className="screenshots-description">
              The application includes:
            </p>
            <ul className="screenshots-list">
              <li>Modern login UI with secure authentication</li>
              <li>Dashboard with overview statistics</li>
              <li>Accounts page with balance information</li>
              <li>Transaction processing interface</li>
              <li>Ledger viewing with search functionality</li>
              <li>Responsive design for all devices</li>
            </ul>
          </div>
        </motion.section>

        {/* Future Improvements */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 15</span>
            <h2 className="section-title">Future Improvements</h2>
          </div>
          <div className="improvements-grid">
            <div className="improvement-item">Notifications system</div>
            <div className="improvement-item">Scheduled transactions</div>
            <div className="improvement-item">Loan/interest module</div>
            <div className="improvement-item">Admin audit logs</div>
            <div className="improvement-item">Multi-level authorization</div>
            <div className="improvement-item">Dockerization</div>
            <div className="improvement-item">Monitoring dashboard</div>
            <div className="improvement-item">API rate limiting</div>
            <div className="improvement-item">Two-factor authentication</div>
            <div className="improvement-item">Transaction export (CSV/PDF)</div>
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div className="section-header">
            <span className="section-number">🔥 16</span>
            <h2 className="section-title">Conclusion</h2>
          </div>
          <div className="conclusion-content">
            <p>
              Building the LedgerCore Banking System was an incredible learning experience that taught me:
            </p>
            <div className="learnings-grid">
              <div className="learning-item">Spring Boot security and JWT authentication</div>
              <div className="learning-item">Real-world API architecture and design</div>
              <div className="learning-item">Database schema design and optimization</div>
              <div className="learning-item">UI/UX integration with React</div>
              <div className="learning-item">Deployment pipelines and CI/CD</div>
              <div className="learning-item">Debugging and problem-solving skills</div>
              <div className="learning-item">Production-ready application development</div>
              <div className="learning-item">Security best practices for financial applications</div>
            </div>
            <p className="conclusion-final">
              This project demonstrates my ability to build secure, scalable, and production-ready full-stack applications
              with modern technologies and best practices.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default CaseStudyPage

