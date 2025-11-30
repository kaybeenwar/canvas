import React, { useState, useEffect } from 'react';

const CanvasDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1024);
  const [windowHeight, setWindowHeight] = useState(768);

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
    document.body.style.width = '100%';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
    document.documentElement.style.width = '100%';
    
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.width = '';
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      document.documentElement.style.width = '';
    };
  }, []);
  
  // Course data with announcements and materials
  const courseCatalogs = {
    1: { // IT Security Management
      announcements: [
        { id: 1, title: 'About Quiz3', author: 'Joshua Yue', date: 'Nov 20, 2025', content: 'Just a quick reminder to complete Quiz 3 before the deadline. I also wanted to let you know about some important updates...' },
        { id: 2, title: 'Project Part Two Updates', author: 'Joshua Yue', date: 'Nov 15, 2025', content: 'Please review the updated requirements for Project Part Two before submission.' }
      ],
      materials: [
        { id: 1, title: 'Welcome to CYB3930', type: 'Page' },
        { id: 2, title: 'Syllabus - IT Security Management', type: 'File' },
        { id: 3, title: 'Module 1: Risk Management Fundamentals', type: 'Module' },
        { id: 4, title: 'Lecture 1.1 - Introduction to IT Security', type: 'File' },
        { id: 5, title: 'Lecture 1.2 - Risk Management Overview', type: 'File' },
        { id: 6, title: 'Quiz 1 Fundamentals of Risk Management', type: 'Assignment' },
        { id: 7, title: 'Module 2: Asset Management', type: 'Module' },
        { id: 8, title: 'Lecture 2.1 - Asset Identification', type: 'File' },
        { id: 9, title: 'Lecture 2.2 - Asset Valuation', type: 'File' },
        { id: 10, title: 'Quiz 2 Asset Management', type: 'Assignment' },
        { id: 11, title: 'Assignment 1: Asset Management', type: 'Assignment' },
        { id: 12, title: 'Module 3: Threat Identification', type: 'Module' },
        { id: 13, title: 'Lecture 3.1 - Threat Landscape', type: 'File' },
        { id: 14, title: 'Lecture 3.2 - Threat Actors', type: 'File' },
        { id: 15, title: 'Group Assignment 2: Threat Identification', type: 'Assignment' },
        { id: 16, title: 'Module 4: Risk Assessment', type: 'Module' },
        { id: 17, title: 'Lecture 4.1 - Qualitative Risk Assessment', type: 'File' },
        { id: 18, title: 'Lecture 4.2 - Quantitative Risk Assessment', type: 'File' },
        { id: 19, title: 'Quiz 3 Risk Assessment', type: 'Assignment' },
        { id: 20, title: 'Risk Management Plan Template', type: 'File' },
        { id: 21, title: 'Project Part One - Risk Management Plan', type: 'Assignment' },
        { id: 22, title: 'Project Part Two - Asset Management', type: 'Assignment' },
        { id: 23, title: 'Course Resources', type: 'Folder' }
      ]
    },
    2: { // Introduction to Software Engineering
      announcements: [
        { id: 1, title: 'Assignment #5 Guidelines', author: 'Dr. Smith', date: 'Nov 18, 2025', content: 'Please check the updated guidelines for Assignment #5 - Partial Implementation.' },
        { id: 2, title: 'Final Project Teams', author: 'Dr. Smith', date: 'Nov 10, 2025', content: 'Teams for the final project have been posted. Check your groups section.' }
      ],
      materials: [
        { id: 1, title: 'Course Introduction', type: 'Page' },
        { id: 2, title: 'Syllabus - Software Engineering', type: 'File' },
        { id: 3, title: 'Module 1: SDLC Introduction', type: 'Module' },
        { id: 4, title: 'Lecture 1.1 - What is Software Engineering', type: 'File' },
        { id: 5, title: 'Lecture 1.2 - SDLC Models Overview', type: 'File' },
        { id: 6, title: 'Assignment #1 - System Request', type: 'Assignment' },
        { id: 7, title: 'Quiz 1: Introduction and SDLC', type: 'Assignment' },
        { id: 8, title: 'Module 2: Requirements Engineering', type: 'Module' },
        { id: 9, title: 'Lecture 2.1 - Requirements Gathering', type: 'File' },
        { id: 10, title: 'Lecture 2.2 - Use Cases and User Stories', type: 'File' },
        { id: 11, title: 'Assignment #2 - UI Mockup', type: 'Assignment' },
        { id: 12, title: 'Assignment #2.5 - Requirements', type: 'Assignment' },
        { id: 13, title: 'Quiz 2: SDLC models and Requirement Engineering', type: 'Assignment' },
        { id: 14, title: 'Module 3: Version Control & Git', type: 'Module' },
        { id: 15, title: 'Lecture 3.1 - Introduction to Git', type: 'File' },
        { id: 16, title: 'Lecture 3.2 - Branching and Merging', type: 'File' },
        { id: 17, title: 'Assignment #3 - SRS', type: 'Assignment' },
        { id: 18, title: 'Module 4: Architectural Design', type: 'Module' },
        { id: 19, title: 'Lecture 4.1 - Software Architecture Patterns', type: 'File' },
        { id: 20, title: 'Lecture 4.2 - Component Diagrams', type: 'File' },
        { id: 21, title: 'Quiz 3: Version Control & Architectural Design', type: 'Assignment' },
        { id: 22, title: 'Module 5: Object Oriented Design', type: 'Module' },
        { id: 23, title: 'Lecture 5.1 - OOP Principles', type: 'File' },
        { id: 24, title: 'Lecture 5.2 - Design Patterns', type: 'File' },
        { id: 25, title: 'Assignment #4 - Design class diagram', type: 'Assignment' },
        { id: 26, title: 'Quiz 4: Object Oriented Design', type: 'Assignment' },
        { id: 27, title: 'Assignment #5 - Partial Implementation', type: 'Assignment' },
        { id: 28, title: 'UML Diagram Templates', type: 'File' },
        { id: 29, title: 'Final Project Guidelines', type: 'File' }
      ]
    },
    3: { // Cryptography
      announcements: [
        { id: 1, title: 'Asynchronous lecture on November 24, Monday', author: 'Tanjila Mawla', date: 'Nov 21, 2025', content: 'We will not have an in-person lecture on November 24, Monday. I will post a video lecture on canvas and there will be a participation quiz based on the lecture under module 10.' },
        { id: 2, title: 'Quiz 4 Reminder: Quiz 4 is scheduled on November 19th, Wednesday', author: 'Tanjila Mawla', date: 'Nov 17, 2025', content: 'The Quiz 4 is scheduled on November 19th, Wednesday during the class time. The topics that will be covered in Quiz 4 include Module 8 and 9.' }
      ],
      materials: [
        { id: 1, title: 'Course Syllabus', type: 'File' },
        { id: 2, title: 'Module 1: Introduction to Cryptography', type: 'Module' },
        { id: 3, title: 'CYB_3850_Module_01_Lecture_01-Intro_Cryptography.pdf', type: 'File' },
        { id: 4, title: 'Class Activity 1: Playfair', type: 'Assignment' },
        { id: 5, title: 'Module 2: Classical Ciphers', type: 'Module' },
        { id: 6, title: 'Lecture 2.1 - Caesar and Substitution Ciphers', type: 'File' },
        { id: 7, title: 'Lecture 2.2 - Vigenere Cipher', type: 'File' },
        { id: 8, title: 'Class Activity 2: Breaking a Code', type: 'Assignment' },
        { id: 9, title: 'Assignment 01: Vigenere Cipher', type: 'Assignment' },
        { id: 10, title: 'Quiz 1', type: 'Assignment' },
        { id: 11, title: 'Module 3: Block Ciphers (AES)', type: 'Module' },
        { id: 12, title: 'Lecture 3.1 - DES and AES Overview', type: 'File' },
        { id: 13, title: 'Lecture 3.2 - AES Implementation', type: 'File' },
        { id: 14, title: 'Lab 1: AES in Python', type: 'Assignment' },
        { id: 15, title: 'Lab 2: AES Modes in Python', type: 'Assignment' },
        { id: 16, title: 'Quiz 2', type: 'Assignment' },
        { id: 17, title: 'Assignment 02: Secret-Key Encryption', type: 'Assignment' },
        { id: 18, title: 'Module 4: Stream Ciphers', type: 'Module' },
        { id: 19, title: 'Lecture 4.1 - Stream Cipher Principles', type: 'File' },
        { id: 20, title: 'Lecture 4.2 - RC4 and ChaCha20', type: 'File' },
        { id: 21, title: 'Lab 3: Stream Cipher using Python', type: 'Assignment' },
        { id: 22, title: 'Quiz 3', type: 'Assignment' },
        { id: 23, title: 'Module 5: Public Key Cryptography', type: 'Module' },
        { id: 24, title: 'Lecture 5.1 - RSA Algorithm', type: 'File' },
        { id: 25, title: 'Lecture 5.2 - Diffie-Hellman Key Exchange', type: 'File' },
        { id: 26, title: 'Lab 4: RSA using Python', type: 'Assignment' },
        { id: 27, title: 'Assignment 03: RSA Public-Key Encryption', type: 'Assignment' },
        { id: 28, title: 'Quiz 4', type: 'Assignment' },
        { id: 29, title: 'Lab Files - Python Cryptography', type: 'Folder' },
        { id: 30, title: 'Group Project Guidelines', type: 'File' }
      ]
    },
    4: { // Secure Web Development
      announcements: [
        { id: 1, title: 'Final Project Requirements Posted', author: 'Dr. Johnson', date: 'Nov 22, 2025', content: 'The final project requirements have been posted. Please review them carefully.' },
        { id: 2, title: 'Exam2 Results', author: 'Dr. Johnson', date: 'Nov 20, 2025', content: 'Great job everyone! Exam2 results have been posted.' },
        { id: 3, title: 'Office Hours Change', author: 'Dr. Johnson', date: 'Nov 18, 2025', content: 'Office hours this week will be held via Zoom.' }
      ],
      materials: [
        { id: 1, title: 'Course Overview', type: 'Page' },
        { id: 2, title: 'Syllabus - Secure Web Development', type: 'File' },
        { id: 3, title: 'ZyBooks Access Instructions', type: 'File' },
        { id: 4, title: 'Module 1: HTML & CSS Fundamentals', type: 'Module' },
        { id: 5, title: 'Lecture 1.1 - HTML Basics', type: 'File' },
        { id: 6, title: 'Lecture 1.2 - CSS Styling', type: 'File' },
        { id: 7, title: 'Activity01 in-class: CSS Selectors', type: 'Assignment' },
        { id: 8, title: 'Assignment01 Catalog of Products', type: 'Assignment' },
        { id: 9, title: 'Module 2: JavaScript Essentials', type: 'Module' },
        { id: 10, title: 'Lecture 2.1 - JavaScript Fundamentals', type: 'File' },
        { id: 11, title: 'Lecture 2.2 - DOM Manipulation', type: 'File' },
        { id: 12, title: 'Activity06 in-class: Javascript with iris Dataset', type: 'Assignment' },
        { id: 13, title: 'Module 3: React Framework', type: 'Module' },
        { id: 14, title: 'Lecture 3.1 - React Components', type: 'File' },
        { id: 15, title: 'Lecture 3.2 - State and Props', type: 'File' },
        { id: 16, title: 'Lecture 3.3 - React Hooks', type: 'File' },
        { id: 17, title: 'Assignment 02: Emoji Catalog Explorer', type: 'Assignment' },
        { id: 18, title: 'Proposal of the Midterm Project', type: 'Assignment' },
        { id: 19, title: 'Midterm Project', type: 'Assignment' },
        { id: 20, title: 'Module 4: Node.js & Express', type: 'Module' },
        { id: 21, title: 'Lecture 4.1 - Node.js Basics', type: 'File' },
        { id: 22, title: 'Lecture 4.2 - Express.js Framework', type: 'File' },
        { id: 23, title: 'Lecture 4.3 - RESTful APIs', type: 'File' },
        { id: 24, title: 'Assignment 03 Cart', type: 'Assignment' },
        { id: 25, title: 'Module 5: MongoDB & CRUD', type: 'Module' },
        { id: 26, title: 'Lecture 5.1 - MongoDB Setup', type: 'File' },
        { id: 27, title: 'Lecture 5.2 - CRUD Operations', type: 'File' },
        { id: 28, title: 'Exam1 CRUD using CONTACTS in Mongo Atlas', type: 'Assignment' },
        { id: 29, title: 'Module 6: Deployment', type: 'Module' },
        { id: 30, title: 'Lecture 6.1 - Deploying to Cloud', type: 'File' },
        { id: 31, title: 'Exam2 Deploying Frontend and Backend', type: 'Assignment' },
        { id: 32, title: 'Final Project', type: 'Assignment' },
        { id: 33, title: 'Code Examples', type: 'Folder' }
      ]
    },
    5: { // White Collar Crime
      announcements: [
        { id: 1, title: 'Welcome to White Collar Crime', author: 'Prof. Anderson', date: 'Sep 1, 2025', content: 'Welcome to the course! Please review the syllabus.' }
      ],
      materials: [
        { id: 1, title: 'Course Syllabus', type: 'File' },
        { id: 2, title: 'Module 1: Introduction to White Collar Crime', type: 'Module' },
        { id: 3, title: 'Lecture 1.1 - Definition and History', type: 'File' },
        { id: 4, title: 'Lecture 1.2 - Types of White Collar Crime', type: 'File' },
        { id: 5, title: 'Reading: Sutherland\'s White Collar Crime', type: 'File' },
        { id: 6, title: 'Module 2: Corporate Fraud', type: 'Module' },
        { id: 7, title: 'Lecture 2.1 - Financial Statement Fraud', type: 'File' },
        { id: 8, title: 'Lecture 2.2 - Embezzlement', type: 'File' },
        { id: 9, title: 'Case Study: Enron Scandal', type: 'File' },
        { id: 10, title: 'Module 3: Securities Fraud', type: 'Module' },
        { id: 11, title: 'Lecture 3.1 - Insider Trading', type: 'File' },
        { id: 12, title: 'Lecture 3.2 - Market Manipulation', type: 'File' },
        { id: 13, title: 'Case Study: Bernie Madoff Ponzi Scheme', type: 'File' },
        { id: 14, title: 'Module 4: Cybercrime', type: 'Module' },
        { id: 15, title: 'Lecture 4.1 - Identity Theft', type: 'File' },
        { id: 16, title: 'Lecture 4.2 - Phishing and Social Engineering', type: 'File' },
        { id: 17, title: 'Module 5: Investigation and Prosecution', type: 'Module' },
        { id: 18, title: 'Lecture 5.1 - Law Enforcement Agencies', type: 'File' },
        { id: 19, title: 'Lecture 5.2 - Legal Framework', type: 'File' },
        { id: 20, title: 'Case Study Materials', type: 'Folder' },
        { id: 21, title: 'Research Paper Guidelines', type: 'File' }
      ]
    }
  };

  const courseGrades = {
    1: { // IT Security Management
      assignments: [
        { name: 'Quiz 1 Fundamentals of Risk Management', category: 'Quizzes', due: 'Sep 30', score: '9/15', status: '' },
        { name: 'Project Part One - Risk Management Plan', category: 'Course Project', due: 'Oct 13', score: '30/30', status: '' },
        { name: 'Quiz 2 Asset Management', category: 'Quizzes', due: 'Oct 23', score: '15.5/20', status: '' },
        { name: 'Assignment 1: Asset Management', category: 'Assignments', due: 'Oct 26', score: '40/50', status: '' },
        { name: 'Project Part Two - Asset Management', category: 'Course Project', due: 'Oct 30', score: '—/50', status: '' },
        { name: 'Project Part Two - Peer Evaluation', category: 'Course Project', due: 'Oct 30', score: '—/5', status: 'late' },
        { name: 'Group Assignment 2: Threat Identification', category: 'Assignments', due: 'Nov 6', score: '—/20', status: '' },
        { name: 'Quiz 3 Risk Assessment', category: 'Quizzes', due: 'Nov 20', score: '—/0', status: '' },
        { name: 'Individual Assignment 2: Threats for Meridian ERP', category: 'Assignments', due: 'Nov 23', score: '—/40', status: '' },
        { name: 'Roll Call Attendance', category: 'Attendance', due: 'Sep 2', score: '25/25', status: '' }
      ],
      summary: [
        { category: 'Attendance', score: '25.00/25.00', percentage: '100%' },
        { category: 'Course Project', score: '30.00/30.00', percentage: '100%' },
        { category: 'Tests', score: '0.00/0.00', percentage: 'N/A' },
        { category: 'Assignments', score: '40.00/50.00', percentage: '80%' },
        { category: 'Quizzes', score: '24.50/35.00', percentage: '70%' },
        { category: 'Total', score: '119.50/140.00', percentage: '85.36%' }
      ]
    },
    2: { // Introduction to Software Engineering
      assignments: [
        { name: 'Assignment #0 - Form a team', category: 'Assignments', due: 'Sep 3', score: '0/0', status: '' },
        { name: 'Assignment #1 - System Request', category: 'Assignments', due: 'Sep 5', score: '100/100', status: '' },
        { name: 'Assignment #2 - UI Mockup', category: 'Assignments', due: 'Sep 11', score: '70/70', status: '' },
        { name: 'Quiz 1: Introduction and SDLC', category: 'Quizzes', due: 'Sep 16', score: '43.33/50', status: '' },
        { name: 'Activity: Interview', category: 'Activities', due: 'Sep 18', score: '0/0', status: '' },
        { name: 'Assignment #2.5 - Requirements', category: 'Assignments', due: 'Sep 23', score: '28/30', status: '' },
        { name: 'Activity: Feasibility', category: 'Activities', due: 'Sep 25', score: '0/0', status: '' },
        { name: 'Activity: Scenarios', category: 'Activities', due: 'Sep 30', score: '0/0', status: '' },
        { name: 'Quiz 2: SDLC models and Requirement Engineering', category: 'Quizzes', due: 'Oct 2', score: '42/50', status: '' },
        { name: 'Activity: Use Case', category: 'Activities', due: 'Oct 7', score: '0/0', status: '' },
        { name: 'Activity: Use Case Diagrams', category: 'Activities', due: 'Oct 9', score: '0/0', status: '' },
        { name: 'Activity: Git User Id', category: 'Activities', due: 'Oct 14', score: '0/0', status: '' },
        { name: 'Activity: Git Version Control', category: 'Activities', due: 'Oct 16', score: '-1/0', status: '' },
        { name: 'Assignment #3 - SRS', category: 'Assignments', due: 'Oct 17', score: '74/100', status: 'late' },
        { name: 'In class: architectural design', category: 'Activities', due: 'Oct 21', score: '-1/0', status: '' },
        { name: 'Git Version Control Activity 2', category: 'Activities', due: 'Oct 21', score: '-1/0', status: '' },
        { name: 'Quiz 3: Requirement Engineering, Version Control & Architectural Design', category: 'Quizzes', due: 'Oct 23', score: '36/50', status: '' },
        { name: 'Activity: Class Diagram', category: 'Activities', due: 'Oct 28', score: '-1/0', status: '' },
        { name: 'Activity: class diagram part 2', category: 'Activities', due: 'Oct 30', score: '-1/0', status: '' },
        { name: 'Activity: Cohesion and Coupling', category: 'Activities', due: 'Nov 6', score: '0/0', status: '' },
        { name: 'Assignment #4 - Design class diagram', category: 'Assignments', due: 'Nov 11', score: '80/100', status: '' },
        { name: 'Quiz 4: Object Oriented Design', category: 'Quizzes', due: 'Nov 13', score: '47/50', status: '' },
        { name: 'Activity: ECB Diagram', category: 'Activities', due: 'Nov 18', score: '—/0', status: '' },
        { name: 'Activity: Project Readout', category: 'Assignments', due: 'Nov 18', score: '—/0', status: '' },
        { name: 'Assignment #5 - Partial Implementation', category: 'Assignments', due: 'Nov 18', score: '—/100', status: '' },
        { name: 'Extra Credit - Individual Gitlab Assignment', category: 'Assignments', due: 'Dec 4', score: '—/0', status: '' },
        { name: 'Extra Credit - Team Gitlab Assignment', category: 'Assignments', due: 'Dec 4', score: '—/0', status: '' },
        { name: 'Extra Credit - Test Design Assignment', category: 'Assignments', due: 'Dec 5', score: '—/0', status: '' },
        { name: 'Activity: Software Engineering Failures', category: 'Activities', due: 'N/A', score: '—/0', status: '' },
        { name: 'Icebreaker Activity: Building Connections', category: 'Activities', due: 'N/A', score: '—/0', status: '' }
      ],
      summary: [
        { category: 'Assignments', score: '352.00/400.00', percentage: '88%' },
        { category: 'Quizzes', score: '168.33/200.00', percentage: '84.17%' },
        { category: 'Activities', score: '-5.00/0.00', percentage: 'N/A' },
        { category: 'Final Project', score: '0.00/0.00', percentage: 'N/A' },
        { category: 'Total', score: '515.33/600.00', percentage: '86.47%' }
      ]
    },
    3: { // Cryptography
      assignments: [
        { name: 'Class Activity 1: Playfair', category: 'Labs and Class Activities', due: 'Sep 10', score: '5/5', status: '' },
        { name: 'Class Activity 2: Breaking a Code', category: 'Labs and Class Activities', due: 'Sep 15', score: '5/5', status: '' },
        { name: 'Class Activity 4: PyCryptoDome', category: 'Labs and Class Activities', due: 'Sep 19', score: '5/5', status: '' },
        { name: 'Class Activity 3: OpenSSL and DES', category: 'Labs and Class Activities', due: 'Sep 19', score: '0/0', status: '' },
        { name: 'Assignment 01: Vigenere Cipher', category: 'Homework Assignments', due: 'Sep 23', score: '17.8/20', status: 'late' },
        { name: 'Quiz 1', category: 'Quizzes', due: 'Sep 24', score: '3.6/6', status: '' },
        { name: 'Class Activity 5: Block Operation Modes in OpenSSL', category: 'Labs and Class Activities', due: 'Sep 29', score: '5/5', status: '' },
        { name: 'Lab 1: AES in Python', category: 'Labs and Class Activities', due: 'Sep 30', score: '19/20', status: '' },
        { name: 'Class Activity 6: Random Numbers in OpenSSL', category: 'Labs and Class Activities', due: 'Oct 1', score: '5/5', status: '' },
        { name: 'Class Activity 7: Stream Ciphers in OpenSSL', category: 'Labs and Class Activities', due: 'Oct 3', score: '5/5', status: '' },
        { name: 'Lab 2: AES Modes in Python', category: 'Labs and Class Activities', due: 'Oct 9', score: '19/20', status: 'late' },
        { name: 'Class Activity 8: RSA in OpenSSL', category: 'Labs and Class Activities', due: 'Oct 10', score: '5/5', status: '' },
        { name: 'Quiz 2', category: 'Quizzes', due: 'Oct 13', score: '4.5/6', status: '' },
        { name: 'Assignment 02: Secret-Key Encryption', category: 'Homework Assignments', due: 'Oct 13', score: '20/20', status: 'missing' },
        { name: 'Midterm Anonymous Survey', category: 'Class Participation', due: 'Oct 14', score: '5/5', status: '' },
        { name: 'Class Activity 9: ECC in OpenSSL', category: 'Labs and Class Activities', due: 'Oct 15', score: '5/5', status: '' },
        { name: 'Lab 3: Stream Cipher using Python', category: 'Labs and Class Activities', due: 'Oct 23', score: '18/20', status: 'late' },
        { name: 'Class Activity 10: Key Wrap in Python', category: 'Labs and Class Activities', due: 'Oct 24', score: '5/5', status: 'late' },
        { name: 'Project task: Team Formation', category: 'Group Project', due: 'Oct 24', score: '0/5', status: 'late' },
        { name: 'Class Activity 11: Digital Signature', category: 'Labs and Class Activities', due: 'Oct 27', score: '5/5', status: 'late' },
        { name: 'Class Activity 11: Certificates', category: 'Labs and Class Activities', due: 'Oct 31', score: '10/10', status: 'late' },
        { name: 'Quiz 3', category: 'Quizzes', due: 'Nov 3', score: '5.65/6', status: '' },
        { name: 'Class Activity 12: Creating Certificate Authority', category: 'Labs and Class Activities', due: 'Nov 5', score: '5/5', status: '' },
        { name: 'Class Participation 1', category: 'Class Participation', due: 'Nov 7', score: '5/5', status: 'late' },
        { name: 'Lab 4: RSA using Python', category: 'Labs and Class Activities', due: 'Nov 7', score: '0/20', status: 'missing' },
        { name: 'Class Activity 13: S/MIME', category: 'Labs and Class Activities', due: 'Nov 10', score: '0/5', status: 'missing' },
        { name: 'Class Participation 2', category: 'Class Participation', due: 'Nov 12', score: '5/5', status: '' },
        { name: 'Assignment 03: RSA Public-Key Encryption and Signature', category: 'Homework Assignments', due: 'Nov 12', score: '20/20', status: 'missing' },
        { name: 'Class Activity 14: Linear and Differential Cryptanalysis', category: 'Labs and Class Activities', due: 'Nov 14', score: '5/5', status: '' },
        { name: 'Class Participation 3', category: 'Class Participation', due: 'Nov 17', score: '3/3', status: '' },
        { name: 'Quiz 4', category: 'Quizzes', due: 'Nov 19', score: '—/6', status: '' },
        { name: 'Project Description', category: 'Group Project', due: 'Nov 21', score: '10/10', status: 'missing' },
        { name: 'Class Participation 4', category: 'Class Participation', due: 'Nov 30', score: '—/5', status: '' },
        { name: 'Assignment 04: Cryptography in Software Design', category: 'Homework Assignments', due: 'Dec 5', score: '—/20', status: '' },
        { name: 'Intermediate Project Report', category: 'Group Project', due: 'Dec 8', score: '—/20', status: '' },
        { name: 'Roll Call Attendance', category: 'Class Participation', due: 'Aug 21', score: '100%', status: '' }
      ],
      summary: [
        { category: 'Quizzes', score: '13.75/18.00', percentage: '76.39%' },
        { category: 'Labs and Class Activities', score: '126.00/155.00', percentage: '81.29%' },
        { category: 'Homework Assignments', score: '57.80/60.00', percentage: '96.33%' },
        { category: 'Class Participation', score: '118.00/118.00', percentage: '100%' },
        { category: 'Group Project', score: '10.00/15.00', percentage: '66.67%' },
        { category: 'Total', score: '325.55/366.00', percentage: '84.13%' }
      ]
    },
    4: { // Secure Web Development
      assignments: [
        { name: 'Activity01 in-class: CSS Selectors', category: 'Activities In-class', due: 'Sep 6', score: '100/100', status: '' },
        { name: 'Activity02 In-class CSS Inline Internal External', category: 'Activities In-class', due: 'Sep 9', score: '100/100', status: '' },
        { name: 'Activity03 in-class Portfolio in Github Web Pages', category: 'Activities In-class', due: 'Sep 11', score: '100/100', status: '' },
        { name: 'Activity04 In_class: Catalog of Products - Flowers', category: 'Activities In-class', due: 'Sep 13', score: '80/100', status: 'late' },
        { name: 'Activity05 Variables, Operators, Arrays (Quiz)', category: 'Activities In-class', due: 'Sep 18', score: '96/100', status: '' },
        { name: 'Activity06 in-class: Javascript with the iris Dataset', category: 'Activities In-class', due: 'Sep 18', score: '65/100', status: 'late' },
        { name: 'Activity07 in-class Javascript Exercises', category: 'Activities In-class', due: 'Sep 20', score: '100/100', status: '' },
        { name: 'Assignment01 Catalog of Products', category: 'Assignments', due: 'Sep 21', score: '90/100', status: 'late' },
        { name: 'Activity08 in_class DOM', category: 'Activities In-class', due: 'Sep 25', score: '100/100', status: '' },
        { name: 'Activity09 in_class map filter forEach setTimeout setInterval', category: 'Activities In-class', due: 'Sep 28', score: '100/100', status: '' },
        { name: 'Activity10 in_class fetch JSON to Web pages', category: 'Activities In-class', due: 'Oct 2', score: '100/100', status: '' },
        { name: 'Activity11 in_class Movies From JSON', category: 'Activities In-class', due: 'Oct 4', score: '90/100', status: 'late' },
        { name: 'ZyBooks Ch6 Javascript Fundamentals', category: 'ZyBooks', due: 'Oct 5', score: '100/100', status: '' },
        { name: 'Activity12 in-class Input to select a movie', category: 'Activities In-class', due: 'Oct 7', score: '100/100', status: '' },
        { name: 'Activity13 in_class Events', category: 'Activities In-class', due: 'Oct 9', score: '—/100', status: '' },
        { name: 'ZyBooks Ch1 Introduction', category: 'ZyBooks', due: 'Oct 10', score: '0/100', status: '' },
        { name: 'ZyBooks Ch2 HTML', category: 'ZyBooks', due: 'Oct 10', score: '0.9/100', status: '' },
        { name: 'ZyBooks Ch4 CSS', category: 'ZyBooks', due: 'Oct 10', score: '—/100', status: '' },
        { name: 'Activity14 in-class Async Await Movies', category: 'Activities In-class', due: 'Oct 11', score: '100/100', status: '' },
        { name: 'ZyBooks Ch6 Objects', category: 'ZyBooks', due: 'Oct 13', score: '100/100', status: '' },
        { name: 'Activity15 in-class Modules, Components and Props', category: 'Activities In-class', due: 'Oct 18', score: '—/100', status: '' },
        { name: 'Proposal of the Midterm Project', category: 'Mid-term Project', due: 'Oct 19', score: '100/100', status: '' },
        { name: 'ZyBooks Ch7 Javascript Browser', category: 'ZyBooks', due: 'Oct 20', score: '100/100', status: '' },
        { name: 'Activity16 in-class Product Catalog from Fakestore JSON', category: 'Activities In-class', due: 'Oct 25', score: '100/100', status: '' },
        { name: 'Assignment 02: Emoji Catalog Explorer', category: 'Assignments', due: 'Oct 26', score: '100/100', status: '' },
        { name: 'Midterm Project', category: 'Mid-term Project', due: 'Oct 26', score: '100/100', status: '' },
        { name: 'ZyBooks Ch7 Events and Timers', category: 'ZyBooks', due: 'Oct 27', score: '55.56/100', status: '' },
        { name: 'Activity18 Payment Form', category: 'Activities In-class', due: 'Oct 30', score: '—/100', status: '' },
        { name: 'Activity17 Cart', category: 'Activities In-class', due: 'Oct 31', score: '100/100', status: '' },
        { name: 'Assignment 03 Cart', category: 'Assignments', due: 'Nov 5', score: '100/100', status: '' },
        { name: 'Activity19 In-class: Request Method GET response JSON, HTML, Javascript', category: 'Activities In-class', due: 'Nov 8', score: '—/100', status: '' },
        { name: 'ZyBooks Ch11 React Advanced', category: 'ZyBooks', due: 'Nov 9', score: '10.91/100', status: '' },
        { name: 'ZyBooks Ch11 React Basics', category: 'ZyBooks', due: 'Nov 9', score: '—/100', status: '' },
        { name: 'ZyBooks Ch7 Form', category: 'ZyBooks', due: 'Nov 10', score: '100/100', status: '' },
        { name: 'Activity20 REST App Contacts Review - Quiz', category: 'Activities In-class', due: 'Nov 17', score: '100/100', status: '' },
        { name: 'Exam1 CRUD using CONTACTS in Mongo Atlas', category: 'Exam1', due: 'Nov 19', score: '100/100', status: 'missing' },
        { name: 'Final Project Proposal', category: 'Final Project', due: 'Nov 23', score: '100/100', status: 'missing' },
        { name: 'Mid-Semester Course Feedback Survey', category: 'Midterm Anonymous Survey', due: 'Nov 25', score: '0.85/1', status: 'late' },
        { name: 'Exam2 Deploying Frontend in GitHub and Backend in Render.com', category: 'Exam2', due: 'Nov 25', score: '100/100', status: '' },
        { name: 'ZyBooks Ch10 Nodejs', category: 'ZyBooks', due: 'Dec 7', score: '100/100', status: '' },
        { name: 'ZyBooks Ch11 Examples', category: 'ZyBooks', due: 'Dec 7', score: '100/100', status: '' },
        { name: 'Final Project', category: 'Final Project', due: 'Dec 14', score: '—/100', status: '' },
        { name: 'ZyBooks Ch10 Databases', category: 'ZyBooks', due: 'Dec 14', score: '100/100', status: '' },
        { name: 'Roll Call Attendance', category: 'Attendance', due: 'Sep 5', score: '97%', status: '' }
      ],
      summary: [
        { category: 'Activities In-class', score: '1531.00/1600.00', percentage: '95.69%' },
        { category: 'Assignments', score: '290.00/300.00', percentage: '96.67%' },
        { category: 'ZyBooks', score: '767.37/1100.00', percentage: '69.76%' },
        { category: 'Exam1', score: '100.00/100.00', percentage: '100%' },
        { category: 'Exam2', score: '100.00/100.00', percentage: '100%' },
        { category: 'Mid-term Project', score: '200.00/200.00', percentage: '100%' },
        { category: 'Final Project', score: '100.00/100.00', percentage: '100%' },
        { category: 'Attendance', score: '97.00/100.00', percentage: '97%' },
        { category: 'Midterm Anonymous Survey', score: '0.85/1.00', percentage: '85%' },
        { category: 'Total', score: '3186.22/3401.00', percentage: '98.72%' }
      ]
    },
    5: { // White Collar Crime
      assignments: [
        { name: 'No assignments recorded', category: 'Assignments', due: 'N/A', score: '0.00/0.00', status: '' }
      ],
      summary: [
        { category: 'Total', score: '0.00/0.00', percentage: 'N/A' }
      ]
    }
  };
  
  const courses = [
    {
      id: 1,
      name: 'IT Security Management',
      code: 'CYB 3930-01',
      term: 'Fall 2025',
      color: '#0374B5',
      unreadAnnouncements: 2,
      image: null,
      currentGrade: '85.36%',
      letterGrade: 'B'
    },
    {
      id: 2,
      name: 'Introduction to Software Engineering',
      code: 'SE 2730',
      term: 'Fall 2025',
      color: '#8B5CF6',
      unreadAnnouncements: 1,
      image: null,
      currentGrade: '86.47%',
      letterGrade: 'B'
    },
    {
      id: 3,
      name: 'Cryptography',
      code: 'CYB 3850-02',
      term: 'Fall 2025',
      color: '#EF4444',
      unreadAnnouncements: 2,
      image: null,
      currentGrade: '84.13%',
      letterGrade: 'B'
    },
    {
      id: 4,
      name: 'Secure Web Development',
      code: 'CS 3870-02',
      term: 'Fall 2025',
      color: '#10B981',
      unreadAnnouncements: 3,
      image: null,
      currentGrade: '98.72%',
      letterGrade: 'A+'
    },
    {
      id: 5,
      name: 'White Collar Crime',
      code: 'CRIMJUS 2850-01',
      term: 'Fall 2025',
      color: '#F59E0B',
      unreadAnnouncements: 0,
      image: null,
      currentGrade: 'N/A',
      letterGrade: 'N/A'
    }
  ];

  const todos = [
    { id: 1, type: 'assignment', title: 'Assignment 04: Cryptography in Software Design', course: 'Cryptography', dueDate: 'Dec 5 at 11:59pm', points: 20 },
    { id: 2, type: 'assignment', title: 'Intermediate Project Report', course: 'Cryptography', dueDate: 'Dec 8 at 11:59pm', points: 20 },
    { id: 3, type: 'assignment', title: 'Final Project', course: 'Secure Web Development', dueDate: 'Dec 14 at 11:59pm', points: 100 },
    { id: 4, type: 'assignment', title: 'Extra Credit - Test Design Assignment', course: 'Introduction to Software Engineering', dueDate: 'Dec 5 at 11:59pm', points: null }
  ];

  const handleCourseClick = (courseId) => {
    setSelectedCourse(courseId);
    setCurrentPage('course-grades');
  };

  const handleCatalogClick = (courseId) => {
    setSelectedCourse(courseId);
    setCurrentPage('course-catalog');
  };

  // Responsive breakpoints
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;
  const isLargeDesktop = windowWidth >= 1400;

  // Sidebar constants
  const sidebarWidth = '80px';
  const expandedSidebarWidth = '280px';

  // Canvas-like theme colors - brighter blue for nav
  const theme = {
    primary: '#0374B5',
    secondary: '#394B58',
    accent: '#0374B5',
    background: '#f5f5f5',
    headerBg: '#0056A3',
    sidebarBg: '#0056A3', // Brighter blue
    text: '#2D3B45',
    textLight: '#6B7883',
    border: '#C7CDD1',
    white: '#ffffff',
    success: '#00AC18',
    warning: '#FC5E13',
    danger: '#EE0612',
    orange: '#f26202' // UW Parkside orange
  };

  // Big orange UWP Logo SVG (from assets/UWP_svg)
  const ParkwideLogo = ({ size = 44 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 319 319" 
      preserveAspectRatio="xMidYMid meet"
      style={{ display: 'block' }}
    >
      <g transform="translate(0, 319) scale(0.1, -0.1)" fill={theme.orange} stroke="none">
        <path d="M310 3115 l0 -75 93 -1 c50 0 129 -1 174 -1 l83 1 2 -431 3 -431 75 60 c207 164 362 415 415 667 17 86 29 198 26 259 l-1 27 -435 0 -435 0 0 -75z"/>
        <path d="M1328 3115 l-3 -75 60 0 c187 -2 311 -11 426 -31 l66 -12 119 78 c109 72 117 79 94 86 -54 17 -207 26 -477 28 l-281 2 -4 -76z"/>
        <path d="M2134 3038 l-122 -81 52 -34 c149 -100 213 -234 231 -488 4 -49 8 -91 10 -93 1 -1 39 16 84 38 80 40 257 104 316 114 77 14 111 19 123 19 16 0 15 10 -7 87 -51 182 -190 344 -371 435 -50 25 -188 86 -194 85 -1 0 -56 -37 -122 -82z"/>
        <path d="M1155 2498 c-14 -43 -131 -194 -219 -282 -50 -50 -132 -119 -183 -154 l-91 -62 2 -442 2 -442 75 -49 c97 -64 146 -105 229 -189 58 -59 155 -184 196 -254 8 -14 11 60 12 296 0 173 1 326 1 340 l1 25 240 1 c132 0 241 2 244 5 2 2 6 34 9 71 3 37 9 72 12 78 6 10 -9 15 -30 10 -16 -3 -459 -6 -470 -3 -7 2 -10 189 -9 538 1 294 -2 535 -7 535 -4 0 -11 -10 -14 -22z"/>
        <path d="M2750 2351 c-112 -24 -215 -62 -320 -117 -129 -69 -126 -65 -133 -173 -4 -50 -9 -96 -11 -100 -3 -4 -7 -20 -10 -35 -21 -116 -88 -258 -149 -316 -45 -44 -115 -80 -213 -110 l-72 -21 -12 -64 c-6 -34 -13 -76 -14 -93 -2 -28 0 -30 28 -27 17 2 52 6 77 9 218 24 464 116 613 228 101 76 222 233 264 343 6 17 17 44 23 60 31 79 48 192 46 315 -2 93 -5 115 -17 117 -8 1 -53 -6 -100 -16z"/>
        <path d="M668 933 c-3 -5 -4 -180 -4 -391 1 -249 -2 -382 -9 -383 -5 -1 -76 -2 -157 -3 -80 0 -149 -4 -153 -8 -6 -6 -8 -44 -6 -115 l1 -33 425 0 c333 0 425 3 426 13 9 95 -44 310 -112 454 -61 129 -140 237 -248 342 -62 60 -159 133 -163 124z"/>
      </g>
    </svg>
  );

  // SVG Icons matching Canvas style
  const icons = {
    dashboard: (
      <svg viewBox="0 0 280 200" style={{ width: '26px', height: '26px', fill: 'currentColor' }}>
        <path d="M273.09,180.75H197.47V164.47h62.62A122.16,122.16,0,1,0,17.85,142a124,124,0,0,0,2,22.51H90.18v16.29H6.89l-1.5-6.22A138.51,138.51,0,0,1,1.57,142C1.57,65.64,63.67,3.53,140,3.53S278.43,65.64,278.43,142a137.67,137.67,0,0,1-3.84,32.57ZM66.49,87.63,50.24,71.38,61.75,59.86,78,76.12Zm147,0L202,76.12l16.25-16.25,11.51,11.51ZM131.85,53.82v-23h16.29v23Zm15.63,142.3a31.71,31.71,0,0,1-28-16.81c-6.4-12.08-15.73-72.29-17.54-84.25a8.15,8.15,0,0,1,13.58-7.2c8.88,8.21,53.48,49.72,59.88,61.81a31.61,31.61,0,0,1-27.9,46.45ZM121.81,116.2c4.17,24.56,9.23,50.21,12,55.49A15.35,15.35,0,1,0,161,157.3C158.18,152,139.79,133.44,121.81,116.2Z"/>
      </svg>
    ),
    courses: (
      <svg viewBox="0 0 280 259" style={{ width: '26px', height: '26px', fill: 'currentColor' }}>
        <path d="M73.31,198c-11.93,0-22.22,8-24,18.73a26.67,26.67,0,0,0-.3,3.63v.3a22,22,0,0,0,5.44,14.65,22.47,22.47,0,0,0,17.22,8H200V228.19h-134V213.08H200V198Zm21-105.74h90.64V62H94.3ZM79.19,107.34V46.92H200v60.42Zm7.55,30.21V122.45H192.49v15.11ZM71.65,16.71A22.72,22.72,0,0,0,49,39.36V190.88a41.12,41.12,0,0,1,24.32-8h157V16.71ZM33.88,39.36A37.78,37.78,0,0,1,71.65,1.6H245.36V198H215.15v45.32h22.66V258.4H71.65a37.85,37.85,0,0,1-37.76-37.76Z"/>
      </svg>
    ),
    groups: (
      <svg viewBox="0 0 200 135" style={{ width: '26px', height: '26px', fill: 'currentColor' }}>
        <path d="M134.5 129.4c0-1.1 0-19.8-6.2-31.1-4.5-8.5-16.4-12.4-35-19.2-1.7-.6-3.4-1.1-5.1-1.7v-8.5c5.6-5.1 8.5-12.4 8.5-20.3V29.4C96.6 13 83.6 0 67.2 0S37.9 13 37.9 29.4v19.2c0 7.3 3.4 14.7 8.5 20.3v8.5c-1.7.6-3.4 1.1-5.1 1.7-18.6 6.2-30.5 10.7-35 19.2C0 109.6 0 128.8 0 129.4c0 3.4 2.3 5.6 5.6 5.6h123.7c3.5 0 5.7-2.3 5.2-5.6z"/>
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 280 280" style={{ width: '26px', height: '26px', fill: 'currentColor' }}>
        <path d="M197.07,213.38h16.31V197.07H197.07Zm-16.31,16.31V180.76h48.92v48.92Zm-48.92-16.31h16.31V197.07H131.85Zm-16.31,16.31V180.76h48.92v48.92ZM66.62,213.38H82.93V197.07H66.62ZM50.32,229.68V180.76H99.24v48.92Zm146.75-81.53h16.31V131.85H197.07Zm-16.31,16.31V115.54h48.92v48.92Zm-48.92-16.31h16.31V131.85H131.85Zm-16.31,16.31V115.54h48.92v48.92ZM66.62,148.15H82.93V131.85H66.62ZM50.32,164.46V115.54H99.24v48.92ZM34,262.29H246V82.93H34ZM246,66.62V42.16A8.17,8.17,0,0,0,237.84,34H213.38v8.15a8.15,8.15,0,1,1-16.31,0V34H82.93v8.15a8.15,8.15,0,0,1-16.31,0V34H42.16A8.17,8.17,0,0,0,34,42.16V66.62Z"/>
      </svg>
    ),
    inbox: (
      <svg viewBox="0 0 280 280" style={{ width: '26px', height: '26px', fill: 'currentColor' }}>
        <path d="M91.72,120.75h96.56V104.65H91.72Zm0,48.28h80.47V152.94H91.72Zm0-96.56h80.47V56.37H91.72Zm160.94,34.88H228.52V10.78h-177v96.56H27.34A24.17,24.17,0,0,0,3.2,131.48V244.14a24.17,24.17,0,0,0,24.14,24.14H252.66a24.17,24.17,0,0,0,24.14-24.14V131.48A24.17,24.17,0,0,0,252.66,107.34Z"/>
      </svg>
    ),
    history: (
      <svg viewBox="0 0 1920 1920" style={{ width: '26px', height: '26px', fill: 'currentColor' }}>
        <path d="M960 112.941c-467.125 0-847.059 379.934-847.059 847.059 0 467.125 379.934 847.059 847.059 847.059 467.125 0 847.059-379.934 847.059-847.059 0-467.125-379.934-847.059-847.059-847.059M960 1920C430.645 1920 0 1489.355 0 960S430.645 0 960 0s960 430.645 960 960-430.645 960-960 960m417.905-575.955L903.552 988.28V395.34h112.941v536.47l429.177 321.77-67.765 90.465z"/>
      </svg>
    ),
    help: (
      <svg viewBox="0 0 200 200" style={{ width: '26px', height: '26px', fill: 'currentColor' }}>
        <path d="M100,127.88A11.15,11.15,0,1,0,111.16,139,11.16,11.16,0,0,0,100,127.88Zm8.82-88.08a33.19,33.19,0,0,1,23.5,23.5,33.54,33.54,0,0,1-24,41.23,3.4,3.4,0,0,0-2.74,3.15v9.06H94.42v-9.06a14.57,14.57,0,0,1,11.13-14,22.43,22.43,0,0,0,13.66-10.27,22.73,22.73,0,0,0,2.31-17.37A21.92,21.92,0,0,0,106,50.59a22.67,22.67,0,0,0-19.68,3.88,22.18,22.18,0,0,0-8.65,17.64H66.54a33.25,33.25,0,0,1,13-26.47A33.72,33.72,0,0,1,108.82,39.8ZM100,5.2A94.8,94.8,0,1,0,194.8,100,94.91,94.91,0,0,0,100,5.2m0,178.45A83.65,83.65,0,1,1,183.65,100,83.73,83.73,0,0,1,100,183.65"/>
      </svg>
    ),
    account: (
      <svg viewBox="0 0 200 200" style={{ width: '26px', height: '26px', fill: 'currentColor' }}>
        <circle cx="100" cy="50" r="40"/>
        <path d="M100,100c-44.2,0-80,35.8-80,80h160C180,135.8,144.2,100,100,100z"/>
      </svg>
    ),
    hamburger: (
      <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', fill: 'currentColor' }}>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
    ),
    announcement: (
      <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px', fill: 'currentColor' }}>
        <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"/>
      </svg>
    ),
    assignment: (
      <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px', fill: 'currentColor' }}>
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    grades: (
      <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px', fill: 'currentColor' }}>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    document: (
      <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'currentColor' }}>
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    ),
    folder: (
      <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'currentColor' }}>
        <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
      </svg>
    ),
    module: (
      <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'currentColor' }}>
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/>
      </svg>
    ),
    file: (
      <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'currentColor' }}>
        <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/>
      </svg>
    )
  };

  const renderCourseCatalogPage = () => {
    const course = courses.find(c => c.id === selectedCourse);
    const catalog = courseCatalogs[selectedCourse];

    return (
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: sidebarOpen ? expandedSidebarWidth : sidebarWidth,
        width: `calc(100% - ${sidebarOpen ? expandedSidebarWidth : sidebarWidth})`,
        height: '100%',
        paddingTop: '60px',
        transition: 'left 0.3s ease, width 0.3s ease',
        overflowY: 'auto',
        overflowX: 'hidden',
        backgroundColor: theme.background,
        boxSizing: 'border-box'
      }}>
        {/* Page Header */}
        <div style={{
          backgroundColor: theme.white,
          borderBottom: `1px solid ${theme.border}`,
          padding: '1rem 1.5rem',
          position: 'fixed',
          top: 0,
          left: sidebarOpen ? expandedSidebarWidth : sidebarWidth,
          right: 0,
          height: '60px',
          zIndex: 90,
          transition: 'left 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '1.5rem', 
            color: theme.text,
            fontWeight: '700',
            fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
          }}>
            {course.name}
          </h1>
        </div>

        {/* Course Header */}
        <div style={{
          backgroundColor: theme.white,
          padding: isMobile ? '1.5rem' : '2rem',
          margin: isMobile ? '1rem 0.5rem' : '1rem',
          borderRadius: '4px',
          borderLeft: `4px solid ${course.color}`,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            margin: '0 0 0.5rem 0',
            fontSize: '1.75rem',
            color: theme.text,
            fontWeight: '700',
            fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
          }}>{course.name}</h2>
          <p style={{
            margin: 0,
            color: theme.textLight,
            fontSize: '1rem',
            fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
          }}>{course.code} • {course.term}</p>
        </div>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isLargeDesktop ? '1fr 1fr' : '1fr',
          gap: '1rem',
          padding: isMobile ? '0 0.5rem' : '0 1rem'
        }}>
          {/* Recent Announcements */}
          <div style={{
            backgroundColor: theme.white,
            borderRadius: '4px',
            padding: '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              margin: '0 0 1.5rem 0',
              fontSize: '1.25rem',
              color: theme.text,
              fontWeight: '700',
              fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              {icons.announcement}
              Recent Announcements
            </h3>
            
            {catalog.announcements.map((announcement, index) => (
              <div key={announcement.id} style={{
                padding: '1rem',
                borderBottom: index < catalog.announcements.length - 1 ? `1px solid ${theme.border}` : 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <h4 style={{
                  margin: '0 0 0.5rem 0',
                  fontSize: '1rem',
                  color: theme.accent,
                  fontWeight: '600',
                  fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                }}>{announcement.title}</h4>
                <p style={{
                  margin: '0 0 0.5rem 0',
                  fontSize: '0.875rem',
                  color: theme.textLight,
                  fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                }}>
                  Posted by {announcement.author} • {announcement.date}
                </p>
                <p style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  color: theme.text,
                  fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif',
                  lineHeight: '1.5',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>{announcement.content}</p>
              </div>
            ))}
          </div>

          {/* Course Materials */}
          <div style={{
            backgroundColor: theme.white,
            borderRadius: '4px',
            padding: '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              margin: '0 0 1.5rem 0',
              fontSize: '1.25rem',
              color: theme.text,
              fontWeight: '700',
              fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              {icons.document}
              Course Materials
            </h3>
            
            {catalog.materials.map((material, index) => (
              <div key={material.id} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem',
                borderBottom: index < catalog.materials.length - 1 ? `1px solid ${theme.border}` : 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span style={{ color: theme.textLight }}>
                  {material.type === 'Module' && icons.module}
                  {material.type === 'File' && icons.file}
                  {material.type === 'Page' && icons.document}
                  {material.type === 'Folder' && icons.folder}
                  {material.type === 'Assignment' && icons.assignment}
                </span>
                <div style={{ flex: 1 }}>
                  <p style={{
                    margin: 0,
                    fontSize: '0.875rem',
                    color: theme.accent,
                    fontWeight: '500',
                    fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                  }}>{material.title}</p>
                  <p style={{
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.75rem',
                    color: theme.textLight,
                    fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                  }}>{material.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div style={{
          padding: isMobile ? '1rem 0.5rem 2rem' : '1rem 1rem 2rem',
          marginTop: '1rem'
        }}>
          <button 
            onClick={() => {
              setCurrentPage('courses');
              setSelectedCourse(null);
            }}
            style={{
              backgroundColor: theme.white,
              border: `1px solid ${theme.border}`,
              borderRadius: '4px',
              padding: '0.75rem 1.5rem',
              fontSize: '0.875rem',
              color: theme.text,
              cursor: 'pointer',
              fontWeight: '500',
              fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.accent;
              e.currentTarget.style.color = theme.white;
              e.currentTarget.style.borderColor = theme.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.white;
              e.currentTarget.style.color = theme.text;
              e.currentTarget.style.borderColor = theme.border;
            }}
          >
            ← Back to Courses
          </button>
        </div>
      </div>
    );
  };

  const renderCoursesListPage = () => {
    return (
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: sidebarOpen ? expandedSidebarWidth : sidebarWidth,
        width: `calc(100% - ${sidebarOpen ? expandedSidebarWidth : sidebarWidth})`,
        height: '100%',
        paddingTop: '60px',
        transition: 'left 0.3s ease, width 0.3s ease',
        overflowY: 'auto',
        overflowX: 'hidden',
        backgroundColor: theme.background,
        boxSizing: 'border-box'
      }}>
        {/* Page Header */}
        <div style={{
          backgroundColor: theme.white,
          borderBottom: `1px solid ${theme.border}`,
          padding: '1rem 1.5rem',
          position: 'fixed',
          top: 0,
          left: sidebarOpen ? expandedSidebarWidth : sidebarWidth,
          right: 0,
          height: '60px',
          zIndex: 90,
          transition: 'left 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '1.5rem', 
            color: theme.text,
            fontWeight: '700',
            fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
          }}>
            Courses - Fall 2025
          </h1>
        </div>

        {/* Courses List */}
        <div style={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          {courses.map(course => (
            <div 
              key={course.id} 
              onClick={() => handleCatalogClick(course.id)}
              style={{
                backgroundColor: theme.white,
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                display: 'flex',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
              {/* Color Bar */}
              <div style={{
                width: '6px',
                backgroundColor: course.color,
                flexShrink: 0
              }}></div>

              {/* Course Info */}
              <div style={{
                flex: 1,
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
              }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    margin: '0 0 0.25rem 0',
                    fontSize: '1rem',
                    color: theme.accent,
                    fontWeight: '600',
                    fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                  }}>{course.name}</h3>
                  <p style={{
                    margin: 0,
                    fontSize: '0.875rem',
                    color: theme.textLight,
                    fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                  }}>{course.code} • {course.term}</p>
                </div>

                {/* Arrow */}
                <div style={{
                  fontSize: '1.25rem',
                  color: theme.border
                }}>→</div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div style={{
          padding: '0 1rem 2rem 1rem'
        }}>
          <button 
            onClick={() => setCurrentPage('dashboard')}
            style={{
              backgroundColor: theme.white,
              border: `1px solid ${theme.border}`,
              borderRadius: '4px',
              padding: '0.75rem 1.5rem',
              fontSize: '0.875rem',
              color: theme.text,
              cursor: 'pointer',
              fontWeight: '500',
              fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.accent;
              e.currentTarget.style.color = theme.white;
              e.currentTarget.style.borderColor = theme.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.white;
              e.currentTarget.style.color = theme.text;
              e.currentTarget.style.borderColor = theme.border;
            }}
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    );
  };

  const renderCourseGradePage = () => {
    const course = courses.find(c => c.id === selectedCourse);
    const grades = courseGrades[selectedCourse];

    return (
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: sidebarOpen ? expandedSidebarWidth : sidebarWidth,
        width: `calc(100% - ${sidebarOpen ? expandedSidebarWidth : sidebarWidth})`,
        height: '100%',
        paddingTop: '60px',
        transition: 'left 0.3s ease, width 0.3s ease',
        overflowY: 'auto',
        overflowX: 'hidden',
        backgroundColor: theme.background,
        boxSizing: 'border-box'
      }}>
        {/* Page Header */}
        <div style={{
          backgroundColor: theme.white,
          borderBottom: `1px solid ${theme.border}`,
          padding: '1rem 1.5rem',
          position: 'fixed',
          top: 0,
          left: sidebarOpen ? expandedSidebarWidth : sidebarWidth,
          right: 0,
          height: '60px',
          zIndex: 90,
          transition: 'left 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '1.5rem', 
            color: theme.text,
            fontWeight: '700',
            fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
          }}>
            {course.name} - Grades
          </h1>
        </div>

        {/* Course Header */}
        <div style={{
          backgroundColor: theme.white,
          borderRadius: '4px',
          padding: isMobile ? '1.5rem' : '2rem',
          margin: isMobile ? '1rem 0.5rem' : '1rem',
          marginBottom: '1rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderLeft: `4px solid ${course.color}`
        }}>
          <p style={{
            margin: '0 0 1rem 0',
            color: theme.textLight,
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
          }}>{course.code} • {course.term}</p>
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'baseline',
            flexWrap: 'wrap'
          }}>
            <div>
              <span style={{ 
                fontSize: isMobile ? '2rem' : '2.5rem', 
                fontWeight: '700', 
                color: course.color,
                fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
              }}>
                {course.currentGrade}
              </span>
              <span style={{ 
                fontSize: isMobile ? '1.25rem' : '1.5rem', 
                color: theme.textLight, 
                marginLeft: '1rem',
                fontWeight: '600',
                fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
              }}>
                {course.letterGrade}
              </span>
            </div>
          </div>
        </div>

        {/* Content Grid - Responsive Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isLargeDesktop ? '2fr 1fr' : '1fr',
          gap: isMobile ? '0' : '1rem',
          alignItems: 'start',
          padding: isMobile ? '0 0.5rem' : '0 1rem'
        }}>
          {/* Assignments Table */}
          <div style={{
            backgroundColor: theme.white,
            borderRadius: '4px',
            padding: isMobile ? '1rem' : '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            marginBottom: isMobile ? '1rem' : '1.5rem',
            overflow: 'hidden'
          }}>
            <h3 style={{
              margin: '0 0 1.5rem 0',
              fontSize: '1.25rem',
              color: theme.text,
              fontWeight: '700',
              fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}>Assignments</h3>
            
            <div style={{ overflowX: 'auto', width: '100%' }}>
              <table style={{
                width: '100%',
                minWidth: isMobile ? '500px' : '700px',
                borderCollapse: 'collapse',
                fontSize: '0.875rem',
                fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
              }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${theme.border}` }}>
                    <th style={{ textAlign: 'left', padding: '0.75rem', color: theme.textLight, fontWeight: '600' }}>Name</th>
                    <th style={{ textAlign: 'left', padding: '0.75rem', color: theme.textLight, fontWeight: '600' }}>Category</th>
                    <th style={{ textAlign: 'left', padding: '0.75rem', color: theme.textLight, fontWeight: '600' }}>Due</th>
                    <th style={{ textAlign: 'right', padding: '0.75rem', color: theme.textLight, fontWeight: '600' }}>Score</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem', color: theme.textLight, fontWeight: '600' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.assignments.map((assignment, index) => (
                    <tr key={index} style={{ 
                      borderBottom: `1px solid ${theme.border}`,
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <td style={{ 
                        padding: '0.75rem', 
                        color: theme.accent, 
                        fontWeight: '500',
                        maxWidth: '250px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>{assignment.name}</td>
                      <td style={{ padding: '0.75rem', color: theme.textLight }}>{assignment.category}</td>
                      <td style={{ padding: '0.75rem', color: theme.textLight }}>{assignment.due}</td>
                      <td style={{ padding: '0.75rem', textAlign: 'right', color: theme.text, fontWeight: '500' }}>
                        {assignment.score}
                      </td>
                      <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                        {assignment.status === 'late' && (
                          <span style={{
                            backgroundColor: '#FEF3C7',
                            color: '#92400E',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            fontWeight: '600'
                          }}>late</span>
                        )}
                        {assignment.status === 'missing' && (
                          <span style={{
                            backgroundColor: '#FEE2E2',
                            color: '#991B1B',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            fontWeight: '600'
                          }}>missing</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Grade Summary */}
          <div style={{
            backgroundColor: theme.white,
            borderRadius: '4px',
            padding: isMobile ? '1rem' : '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            height: 'fit-content'
          }}>
            <h3 style={{
              margin: '0 0 1.5rem 0',
              fontSize: '1.25rem',
              color: theme.text,
              fontWeight: '700',
              fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}>Grade Summary</h3>
            
            {grades.summary.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 0',
                borderBottom: index < grades.summary.length - 1 ? `1px solid ${theme.border}` : 'none',
                fontWeight: item.category === 'Total' ? '700' : '500',
                fontSize: item.category === 'Total' ? '1rem' : '0.875rem',
                backgroundColor: item.category === 'Total' ? '#f8f9fa' : 'transparent',
                margin: item.category === 'Total' ? '0.5rem -1rem 0 -1rem' : '0',
                padding: item.category === 'Total' ? '0.75rem 1rem' : '0.75rem 0',
                borderRadius: item.category === 'Total' ? '4px' : '0',
                fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
              }}>
                <span style={{ color: theme.text }}>{item.category}</span>
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: theme.textLight, fontSize: 'inherit' }}>{item.score}</span>
                  <span style={{ 
                    color: item.category === 'Total' ? course.color : theme.text,
                    minWidth: '60px',
                    textAlign: 'right',
                    fontWeight: item.category === 'Total' ? '700' : '500'
                  }}>{item.percentage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div style={{
          padding: isMobile ? '1rem 0.5rem' : '1rem',
          marginTop: '1rem'
        }}>
          <button 
            onClick={() => {
              setCurrentPage('grades');
              setSelectedCourse(null);
            }}
            style={{
              backgroundColor: theme.white,
              border: `1px solid ${theme.border}`,
              borderRadius: '4px',
              padding: '0.75rem 1.5rem',
              fontSize: '0.875rem',
              color: theme.text,
              cursor: 'pointer',
              fontWeight: '500',
              fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = course.color;
              e.currentTarget.style.color = theme.white;
              e.currentTarget.style.borderColor = course.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.white;
              e.currentTarget.style.color = theme.text;
              e.currentTarget.style.borderColor = theme.border;
            }}
          >
            ← Back to All Grades
          </button>
        </div>
      </div>
    );
  };

  // Canvas-style navigation item
  const NavItem = ({ icon, label, isActive, onClick, badge }) => (
    <a 
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: sidebarOpen ? '0.75rem 1rem' : '0.75rem 0',
        color: isActive ? '#fff' : 'rgba(255,255,255,0.8)',
        textDecoration: 'none',
        borderLeft: isActive ? `3px solid ${theme.orange}` : '3px solid transparent',
        backgroundColor: isActive ? 'rgba(0,0,0,0.2)' : 'transparent',
        transition: 'all 0.2s ease',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box'
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.1)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      <div style={{ position: 'relative' }}>
        {icon}
        {badge > 0 && (
          <span style={{
            position: 'absolute',
            top: '-6px',
            right: '-8px',
            backgroundColor: theme.orange,
            color: 'white',
            borderRadius: '10px',
            padding: '1px 5px',
            fontSize: '0.65rem',
            fontWeight: 'bold',
            minWidth: '14px',
            textAlign: 'center'
          }}>{badge}</span>
        )}
      </div>
      <span style={{ 
        fontSize: '0.7rem', 
        marginTop: '0.25rem',
        fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: '400',
        display: sidebarOpen ? 'block' : 'block',
        textAlign: 'center'
      }}>{label}</span>
    </a>
  );

  return (
    <div style={{
      fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif',
      backgroundColor: theme.background,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      {/* Sidebar Overlay for mobile */}
      {sidebarOpen && isMobile && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 999
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Canvas-style Left Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: sidebarOpen ? expandedSidebarWidth : sidebarWidth,
        backgroundColor: theme.sidebarBg,
        transition: 'width 0.3s ease',
        zIndex: 1000,
        overflowY: 'auto',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Logo / Hamburger Area */}
        <div style={{
          padding: '0.75rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60px',
          cursor: 'pointer'
        }}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <ParkwideLogo size={44} />
          {sidebarOpen && (
            <span style={{
              color: 'white',
              fontWeight: '700',
              fontSize: '1.25rem',
              marginLeft: '0.75rem',
              fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}>Canvas</span>
          )}
        </div>

        {/* Navigation Items */}
        <div style={{ flex: 1, paddingTop: '0.5rem' }}>
          <NavItem 
            icon={icons.account} 
            label="Account" 
            isActive={false}
          />
          <NavItem 
            icon={icons.dashboard} 
            label="Dashboard" 
            isActive={currentPage === 'dashboard'}
            onClick={() => {
              setCurrentPage('dashboard');
              setSelectedCourse(null);
            }}
          />
          <NavItem 
            icon={icons.courses} 
            label="Courses" 
            isActive={currentPage === 'courses' || currentPage === 'course-catalog' || currentPage === 'course-grades'}
            onClick={() => {
              setCurrentPage('courses');
              setSelectedCourse(null);
            }}
          />
          <NavItem 
            icon={icons.groups} 
            label="Groups" 
            isActive={false}
          />
          <NavItem 
            icon={icons.calendar} 
            label="Calendar" 
            isActive={false}
          />
          <NavItem 
            icon={icons.inbox} 
            label="Inbox" 
            isActive={false}
            badge={3}
          />
          <NavItem 
            icon={icons.history} 
            label="History" 
            isActive={false}
          />
          <NavItem 
            icon={icons.help} 
            label="Help" 
            isActive={false}
            badge={10}
          />
        </div>
      </nav>

      {/* Main Content Area */}
      {currentPage === 'dashboard' ? (
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: sidebarOpen ? expandedSidebarWidth : sidebarWidth,
          width: `calc(100% - ${sidebarOpen ? expandedSidebarWidth : sidebarWidth})`,
          height: '100%',
          paddingTop: '60px',
          transition: 'left 0.3s ease, width 0.3s ease',
          overflowY: 'auto',
          overflowX: 'hidden',
          backgroundColor: theme.background,
          boxSizing: 'border-box'
        }}>
          {/* Page Header */}
          <div style={{
            backgroundColor: theme.white,
            borderBottom: `1px solid ${theme.border}`,
            padding: '1rem 1.5rem',
            position: 'fixed',
            top: 0,
            left: sidebarOpen ? expandedSidebarWidth : sidebarWidth,
            right: 0,
            height: '60px',
            zIndex: 90,
            transition: 'left 0.3s ease',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box'
          }}>
            <h1 style={{ 
              margin: 0, 
              fontSize: '1.5rem', 
              color: theme.text,
              fontWeight: '700',
              fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}>
              Dashboard
            </h1>
          </div>

          {/* Course Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile 
              ? '1fr' 
              : isTablet 
                ? 'repeat(2, 1fr)' 
                : isDesktop 
                  ? 'repeat(3, 1fr)'
                  : 'repeat(4, 1fr)',
            gap: '1rem',
            padding: '1rem'
          }}>
            {courses.map(course => (
              <div
                key={course.id}
                style={{
                  backgroundColor: theme.white,
                  borderRadius: '4px',
                  overflow: 'hidden',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                }}>
                {/* Course Header Color Bar - Click to open Catalog */}
                <div 
                  onClick={() => handleCatalogClick(course.id)}
                  style={{
                    background: course.color,
                    height: '120px',
                    padding: '1rem',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    cursor: 'pointer',
                    transition: 'filter 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
                >
                  <h3 style={{
                    margin: 0,
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: '700',
                    lineHeight: '1.3',
                    fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                  }}>{course.name}</h3>
                  <p style={{
                    margin: '0.25rem 0 0 0',
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                  }}>{course.code}</p>
                  <p style={{
                    margin: '0.125rem 0 0 0',
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.7rem',
                    fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                  }}>{course.term}</p>
                </div>

                {/* Course Action Buttons */}
                <div style={{
                  display: 'flex',
                  borderTop: `1px solid ${theme.border}`
                }}>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCatalogClick(course.id);
                    }}
                    style={{
                      flex: 1,
                      border: 'none',
                      borderRight: `1px solid ${theme.border}`,
                      backgroundColor: theme.white,
                      padding: '0.75rem',
                      cursor: 'pointer',
                      position: 'relative',
                      fontSize: '1rem',
                      transition: 'background-color 0.2s',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.white}
                    title="View Announcements"
                  >
                    {icons.announcement}
                    {course.unreadAnnouncements > 0 && (
                      <span style={{
                        position: 'absolute',
                        top: '0.5rem',
                        right: '50%',
                        transform: 'translateX(50%)',
                        marginRight: '-15px',
                        backgroundColor: theme.orange,
                        color: 'white',
                        borderRadius: '10px',
                        padding: '1px 5px',
                        fontSize: '0.65rem',
                        fontWeight: 'bold'
                      }}>{course.unreadAnnouncements}</span>
                    )}
                    <span style={{ 
                      fontSize: '0.65rem', 
                      color: theme.textLight,
                      fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                    }}>Announce</span>
                  </button>
                  <button 
                    style={{
                      flex: 1,
                      border: 'none',
                      borderRight: `1px solid ${theme.border}`,
                      backgroundColor: theme.white,
                      padding: '0.75rem',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      transition: 'background-color 0.2s',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.white}
                    title="View Assignments"
                  >
                    {icons.assignment}
                    <span style={{ 
                      fontSize: '0.65rem', 
                      color: theme.textLight,
                      fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                    }}>Assign</span>
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCourseClick(course.id);
                    }}
                    style={{
                      flex: 1,
                      border: 'none',
                      backgroundColor: theme.white,
                      padding: '0.75rem',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      transition: 'background-color 0.2s',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.white}
                    title="View Grades"
                  >
                    {icons.grades}
                    <span style={{ 
                      fontSize: '0.65rem', 
                      color: theme.textLight,
                      fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                    }}>Grades</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View Grades Button */}
          <div style={{
            padding: '0 1rem 1rem 1rem'
          }}>
            <button 
              onClick={() => setCurrentPage('grades')}
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: theme.accent,
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#025a8f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.accent;
              }}
            >
              View All Grades
            </button>
          </div>
        </div>
      ) : currentPage === 'courses' ? (
        renderCoursesListPage()
      ) : currentPage === 'course-catalog' ? (
        renderCourseCatalogPage()
      ) : currentPage === 'course-grades' ? (
        renderCourseGradePage()
      ) : (
        // All Grades Page
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: sidebarOpen ? expandedSidebarWidth : sidebarWidth,
          width: `calc(100% - ${sidebarOpen ? expandedSidebarWidth : sidebarWidth})`,
          height: '100%',
          paddingTop: '60px',
          transition: 'left 0.3s ease, width 0.3s ease',
          overflowY: 'auto',
          overflowX: 'hidden',
          backgroundColor: theme.background,
          boxSizing: 'border-box'
        }}>
          {/* Page Header */}
          <div style={{
            backgroundColor: theme.white,
            borderBottom: `1px solid ${theme.border}`,
            padding: '1rem 1.5rem',
            position: 'fixed',
            top: 0,
            left: sidebarOpen ? expandedSidebarWidth : sidebarWidth,
            right: 0,
            height: '60px',
            zIndex: 90,
            transition: 'left 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            boxSizing: 'border-box'
          }}>
            <h1 style={{ 
              margin: 0, 
              fontSize: '1.5rem', 
              color: theme.text,
              fontWeight: '700',
              fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}>
              All Grades
            </h1>
          </div>

          {/* Course Grade Cards */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            padding: '1rem'
          }}>
            {courses.map(course => (
              <div 
                key={course.id} 
                onClick={() => handleCourseClick(course.id)}
                style={{
                  backgroundColor: theme.white,
                  borderRadius: '4px',
                  padding: '1.25rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  borderLeft: `4px solid ${course.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                }}>
                {/* Course Info */}
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    margin: '0 0 0.25rem 0',
                    fontSize: '1rem',
                    color: theme.text,
                    fontWeight: '700',
                    fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                  }}>{course.name}</h3>
                  <p style={{
                    margin: 0,
                    fontSize: '0.875rem',
                    color: theme.textLight,
                    fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                  }}>{course.code} • {course.term}</p>
                </div>

                {/* Grade Display */}
                <div style={{
                  textAlign: 'right',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: theme.text,
                    fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                  }}>{course.currentGrade}</div>
                  <div style={{
                    fontSize: '1.125rem',
                    color: theme.textLight,
                    fontWeight: '600',
                    fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
                  }}>{course.letterGrade}</div>
                </div>

                {/* Arrow */}
                <div style={{
                  fontSize: '1.25rem',
                  color: theme.border
                }}>→</div>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div style={{
            padding: '0 1rem 1rem 1rem'
          }}>
            <button 
              onClick={() => setCurrentPage('dashboard')}
              style={{
                backgroundColor: theme.white,
                border: `1px solid ${theme.border}`,
                borderRadius: '4px',
                padding: '0.75rem 1.5rem',
                fontSize: '0.875rem',
                color: theme.text,
                cursor: 'pointer',
                fontWeight: '500',
                fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.accent;
                e.currentTarget.style.color = theme.white;
                e.currentTarget.style.borderColor = theme.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.white;
                e.currentTarget.style.color = theme.text;
                e.currentTarget.style.borderColor = theme.border;
              }}
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CanvasDashboard;