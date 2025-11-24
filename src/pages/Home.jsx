import React from 'react'
import Hero from '../components/Hero'

import { Helmet } from 'react-helmet-async'

const Home = () => (
    <>
        <Helmet>
            <title>Full Stack Developer Portfolio Website | Freelance Full Stack Developer in India | Shaik Bahadur</title>
            <meta name="description" content="Welcome to my full stack developer portfolio website. I'm Shaik Bahadur, a freelance full stack developer in India specializing in Java, Spring Boot, React, and modern web development. Explore my projects, skills, services, and professional journey as I build scalable, fast, and user-focused digital solutions." />
            <meta name="keywords" content="full stack developer portfolio website, freelance full stack developer in India, modern web developer portfolio, Java and React developer, professional developer portfolio, Java developer, Spring Boot developer, React developer, web development portfolio" />
            <link rel="canonical" href="https://shaikbahadur.dev/" />
        </Helmet>
        <Hero />
    </>
)

export default Home


