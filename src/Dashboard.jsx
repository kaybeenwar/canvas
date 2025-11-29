import React, { useState, useEffect } from 'react';

const CanvasDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Apply global styles to remove body margin
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
    };
  }, []);
  
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
        { name: 'Individual Assignment 2: Threats for Meridian ERP', category: 'Assignments', due: 'Nov 23', score: '—/40', status: '' }
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
        { name: 'Assignment #1 - System Request', category: 'Assignments', due: 'Sep 5', score: '100/100', status: '' },
        { name: 'Assignment #2 - UI Mockup', category: 'Assignments', due: 'Sep 11', score: '70/70', status: '' },
        { name: 'Quiz 1: Introduction and SDLC', category: 'Quizzes', due: 'Sep 16', score: '43.33/50', status: '' },
        { name: 'Assignment #2.5 - Requirements', category: 'Assignments', due: 'Sep 23', score: '28/30', status: '' },
        { name: 'Quiz 2: SDLC models and Requirement Engineering', category: 'Quizzes', due: 'Oct 2', score: '42/50', status: '' },
        { name: 'Assignment #3 - SRS', category: 'Assignments', due: 'Oct 17', score: '74/100', status: 'late' },
        { name: 'Quiz 3: Version Control & Architectural Design', category: 'Quizzes', due: 'Oct 23', score: '36/50', status: '' },
        { name: 'Assignment #4 - Design class diagram', category: 'Assignments', due: 'Nov 11', score: '80/100', status: '' },
        { name: 'Quiz 4: Object Oriented Design', category: 'Quizzes', due: 'Nov 13', score: '47/50', status: '' },
        { name: 'Assignment #5 - Partial Implementation', category: 'Assignments', due: 'Nov 18', score: '—/100', status: '' }
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
        { name: 'Class Activity 1: Playfair', category: 'Labs', due: 'Sep 10', score: '5/5', status: '' },
        { name: 'Class Activity 2: Breaking a Code', category: 'Labs', due: 'Sep 15', score: '5/5', status: '' },
        { name: 'Assignment 01: Vigenere Cipher', category: 'Homework', due: 'Sep 23', score: '17.8/20', status: 'late' },
        { name: 'Quiz 1', category: 'Quizzes', due: 'Sep 24', score: '3.6/6', status: '' },
        { name: 'Lab 1: AES in Python', category: 'Labs', due: 'Sep 30', score: '19/20', status: '' },
        { name: 'Lab 2: AES Modes in Python', category: 'Labs', due: 'Oct 9', score: '19/20', status: 'late' },
        { name: 'Quiz 2', category: 'Quizzes', due: 'Oct 13', score: '4.5/6', status: '' },
        { name: 'Assignment 02: Secret-Key Encryption', category: 'Homework', due: 'Oct 13', score: '20/20', status: '' },
        { name: 'Lab 3: Stream Cipher using Python', category: 'Labs', due: 'Oct 23', score: '18/20', status: 'late' },
        { name: 'Quiz 3', category: 'Quizzes', due: 'Nov 3', score: '5.65/6', status: '' },
        { name: 'Lab 4: RSA using Python', category: 'Labs', due: 'Nov 7', score: '0/20', status: 'missing' },
        { name: 'Assignment 03: RSA Public-Key Encryption', category: 'Homework', due: 'Nov 12', score: '20/20', status: '' },
        { name: 'Quiz 4', category: 'Quizzes', due: 'Nov 19', score: '—/6', status: '' }
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
        { name: 'Activity01 in-class: CSS Selectors', category: 'Activities', due: 'Sep 6', score: '100/100', status: '' },
        { name: 'Assignment01 Catalog of Products', category: 'Assignments', due: 'Sep 21', score: '90/100', status: 'late' },
        { name: 'Activity06 in-class: Javascript with iris Dataset', category: 'Activities', due: 'Sep 18', score: '65/100', status: 'late' },
        { name: 'Proposal of the Midterm Project', category: 'Mid-term Project', due: 'Oct 19', score: '100/100', status: '' },
        { name: 'Assignment 02: Emoji Catalog Explorer', category: 'Assignments', due: 'Oct 26', score: '100/100', status: '' },
        { name: 'Midterm Project', category: 'Mid-term Project', due: 'Oct 26', score: '100/100', status: '' },
        { name: 'Assignment 03 Cart', category: 'Assignments', due: 'Nov 5', score: '100/100', status: '' },
        { name: 'Exam1 CRUD using CONTACTS in Mongo Atlas', category: 'Exam1', due: 'Nov 19', score: '100/100', status: '' },
        { name: 'Exam2 Deploying Frontend and Backend', category: 'Exam2', due: 'Nov 25', score: '100/100', status: '' },
        { name: 'Final Project', category: 'Final Project', due: 'Dec 14', score: '—/100', status: '' }
      ],
      summary: [
        { category: 'Activities In-class', score: '1531.00/1600.00', percentage: '95.69%' },
        { category: 'Assignments', score: '290.00/300.00', percentage: '96.67%' },
        { category: 'ZyBooks', score: '767.37/1100.00', percentage: '69.76%' },
        { category: 'Exam1', score: '100.00/100.00', percentage: '100%' },
        { category: 'Exam2', score: '100.00/100.00', percentage: '100%' },
        { category: 'Mid-term Project', score: '200.00/200.00', percentage: '100%' },
        { category: 'Attendance', score: '97.00/100.00', percentage: '97%' },
        { category: 'Total', score: '3085.37/3400.00', percentage: '98.72%' }
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
      unreadAnnouncements: 0,
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

  const recentFeedback = [
    { course: 'Secure Web Development', assignment: 'Midterm Project', grade: '100/100', comment: 'Excellent work!' },
    { course: 'Introduction to Software Engineering', assignment: 'Assignment #4 - Design class diagram', grade: '80/100', comment: 'Good design approach' }
  ];

  const handleCourseClick = (courseId) => {
    setSelectedCourse(courseId);
    setCurrentPage('course-grades');
  };

  const renderCourseGradePage = () => {
    const course = courses.find(c => c.id === selectedCourse);
    const grades = courseGrades[selectedCourse];

    return (
      <div style={{ 
        maxWidth: '1920px', 
        margin: '0 auto',
        padding: 'clamp(1rem, 2vw, 2rem)'
      }}>
        {/* Course Header */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '4px',
          padding: 'clamp(1rem, 2vw, 1.5rem)',
          marginBottom: '2rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          borderLeft: `4px solid ${course.color}`
        }}>
          <h2 style={{
            margin: '0 0 0.5rem 0',
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            color: '#2D3B45'
          }}>{course.name}</h2>
          <p style={{
            margin: '0 0 0.5rem 0',
            color: '#73818F',
            fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
          }}>{course.code} • {course.term}</p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            marginTop: '1rem'
          }}>
            <div>
              <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 'bold', color: course.color }}>
                {course.currentGrade}
              </span>
              <span style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#73818F', marginLeft: '0.5rem' }}>
                {course.letterGrade}
              </span>
            </div>
          </div>
        </div>

        {/* Assignments Table */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '4px',
          padding: 'clamp(1rem, 2vw, 1.5rem)',
          marginBottom: '2rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          overflowX: 'auto'
        }}>
          <h3 style={{
            margin: '0 0 1rem 0',
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: '#2D3B45'
          }}>Assignments</h3>
          
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
          }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #C7CDD1' }}>
                <th style={{ textAlign: 'left', padding: '0.75rem', color: '#73818F', fontWeight: '600' }}>Name</th>
                <th style={{ textAlign: 'left', padding: '0.75rem', color: '#73818F', fontWeight: '600' }}>Category</th>
                <th style={{ textAlign: 'left', padding: '0.75rem', color: '#73818F', fontWeight: '600' }}>Due</th>
                <th style={{ textAlign: 'right', padding: '0.75rem', color: '#73818F', fontWeight: '600' }}>Score</th>
                <th style={{ textAlign: 'center', padding: '0.75rem', color: '#73818F', fontWeight: '600' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {grades.assignments.map((assignment, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #F5F5F5' }}>
                  <td style={{ padding: '0.75rem', color: '#2D3B45' }}>{assignment.name}</td>
                  <td style={{ padding: '0.75rem', color: '#73818F' }}>{assignment.category}</td>
                  <td style={{ padding: '0.75rem', color: '#73818F' }}>{assignment.due}</td>
                  <td style={{ padding: '0.75rem', textAlign: 'right', color: '#2D3B45', fontWeight: '500' }}>
                    {assignment.score}
                  </td>
                  <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                    {assignment.status === 'late' && (
                      <span style={{
                        backgroundColor: '#FEF3C7',
                        color: '#92400E',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}>late</span>
                    )}
                    {assignment.status === 'missing' && (
                      <span style={{
                        backgroundColor: '#FEE2E2',
                        color: '#991B1B',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}>missing</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Grade Summary */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '4px',
          padding: 'clamp(1rem, 2vw, 1.5rem)',
          marginBottom: '2rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            margin: '0 0 1rem 0',
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: '#2D3B45'
          }}>Grade Summary</h3>
          
          {grades.summary.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.75rem 0',
              borderBottom: index < grades.summary.length - 1 ? '1px solid #F5F5F5' : 'none',
              fontWeight: item.category === 'Total' ? 'bold' : 'normal',
              fontSize: item.category === 'Total' ? '1.125rem' : '0.875rem'
            }}>
              <span style={{ color: '#2D3B45' }}>{item.category}</span>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ color: '#73818F' }}>{item.score}</span>
                <span style={{ 
                  color: item.category === 'Total' ? course.color : '#2D3B45',
                  minWidth: '60px',
                  textAlign: 'right'
                }}>{item.percentage}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div style={{
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          <button 
            onClick={() => {
              setCurrentPage('grades');
              setSelectedCourse(null);
            }}
            style={{
            backgroundColor: 'transparent',
            border: '1px solid #C7CDD1',
            borderRadius: '4px',
            padding: '0.75rem 2rem',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            color: '#0374B5',
            cursor: 'pointer',
            fontWeight: '500',
            width: windowWidth < 640 ? '100%' : 'auto'
          }}>
            ← Back to All Grades
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{
      fontFamily: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif',
      backgroundColor: '#F5F5F5',
      minHeight: '100vh',
      width: '100%',
      overflowX: 'hidden',
      margin: 0,
      padding: 0
    }}>
      {sidebarOpen && (
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

      <div style={{
        position: 'fixed',
        top: 0,
        left: sidebarOpen ? 0 : '-280px',
        width: '280px',
        height: '100vh',
        backgroundColor: '#394B58',
        transition: 'left 0.3s ease',
        zIndex: 1000,
        overflowY: 'auto'
      }}>
        <div style={{
          padding: '1rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{
            backgroundColor: '#0374B5',
            padding: '0.75rem',
            borderRadius: '4px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.25rem'
          }}>Canvas</div>
        </div>

        <nav>
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('dashboard');
              setSidebarOpen(false);
              setSelectedCourse(null);
            }}
            style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.5rem',
            color: 'white',
            textDecoration: 'none',
            borderLeft: currentPage === 'dashboard' ? '4px solid #0374B5' : '4px solid transparent',
            backgroundColor: currentPage === 'dashboard' ? 'rgba(3, 116, 181, 0.2)' : 'transparent'
          }}>
            <span style={{ fontSize: '1.5rem' }}>📊</span>
            <span>Dashboard</span>
          </a>
          
          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.5rem',
            color: 'white',
            textDecoration: 'none',
            borderLeft: '4px solid transparent'
          }}>
            <span style={{ fontSize: '1.5rem' }}>📚</span>
            <span>Courses</span>
          </a>

          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.5rem',
            color: 'white',
            textDecoration: 'none',
            borderLeft: '4px solid transparent'
          }}>
            <span style={{ fontSize: '1.5rem' }}>👥</span>
            <span>Groups</span>
          </a>

          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.5rem',
            color: 'white',
            textDecoration: 'none',
            borderLeft: '4px solid transparent'
          }}>
            <span style={{ fontSize: '1.5rem' }}>📅</span>
            <span>Calendar</span>
          </a>

          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.5rem',
            color: 'white',
            textDecoration: 'none',
            borderLeft: '4px solid transparent',
            position: 'relative'
          }}>
            <span style={{ fontSize: '1.5rem' }}>✉️</span>
            <span>Inbox</span>
            <span style={{
              backgroundColor: '#E62429',
              color: 'white',
              borderRadius: '10px',
              padding: '2px 8px',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              marginLeft: 'auto'
            }}>3</span>
          </a>

          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.5rem',
            color: 'white',
            textDecoration: 'none',
            borderLeft: '4px solid transparent'
          }}>
            <span style={{ fontSize: '1.5rem' }}>⏰</span>
            <span>History</span>
          </a>

          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.5rem',
            color: 'white',
            textDecoration: 'none',
            borderLeft: '4px solid transparent'
          }}>
            <span style={{ fontSize: '1.5rem' }}>❓</span>
            <span>Help</span>
          </a>
        </nav>
      </div>

      <div style={{
        backgroundColor: '#394B58',
        color: 'white',
        padding: '0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          height: '50px'
        }}>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            padding: '0 1rem',
            height: '100%',
            cursor: 'pointer',
            fontSize: '1.25rem'
          }}>☰</button>
          <div style={{
            backgroundColor: '#0374B5',
            padding: '0.5rem 1rem',
            fontWeight: 'bold',
            marginRight: 'auto'
          }}>Canvas</div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            paddingRight: '1rem'
          }}>
            <button style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1rem',
              padding: '0.5rem'
            }}>👤</button>
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #C7CDD1',
        padding: '1rem',
        position: 'sticky',
        top: '50px',
        zIndex: 90
      }}>
        <div style={{ 
          maxWidth: '1920px', 
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', 
            color: '#2D3B45' 
          }}>
            {currentPage === 'dashboard' ? 'Dashboard' : 
             currentPage === 'grades' ? 'Grades' : 
             selectedCourse ? courses.find(c => c.id === selectedCourse)?.name : 'Dashboard'}
          </h1>
          {currentPage === 'dashboard' && (
            <button style={{
              backgroundColor: 'transparent',
              border: '1px solid #C7CDD1',
              borderRadius: '4px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: 'clamp(0.75rem, 2vw, 1rem)'
            }}>
              <span>⋮</span>
              <span>Dashboard Options</span>
            </button>
          )}
        </div>
      </div>

      {currentPage === 'dashboard' ? (
        <>
        <div style={{ 
          maxWidth: '1920px', 
          margin: '0 auto',
          padding: 'clamp(1rem, 2vw, 2rem)',
          display: 'grid',
          gridTemplateColumns: windowWidth >= 1024 ? '1fr 340px' : '1fr',
          gap: 'clamp(1rem, 2vw, 2rem)'
        }}>
        <div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: windowWidth >= 1400 ? 'repeat(3, 1fr)' : 
                               windowWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
            gap: 'clamp(1rem, 1.5vw, 1.5rem)'
          }}>
            {courses.map(course => (
              <div
                key={course.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}>
                <div style={{
                  backgroundColor: course.color,
                  height: '120px',
                  padding: '1rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end'
                }}>
                  <button style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    border: 'none',
                    borderRadius: '4px',
                    width: '32px',
                    height: '32px',
                    cursor: 'pointer',
                    fontSize: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>⋮</button>
                  <h3 style={{
                    margin: 0,
                    color: 'white',
                    fontSize: '1.125rem',
                    fontWeight: 'bold'
                  }}>{course.name}</h3>
                  <p style={{
                    margin: '0.25rem 0 0 0',
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '0.875rem'
                  }}>{course.code}</p>
                  <p style={{
                    margin: '0.125rem 0 0 0',
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '0.75rem'
                  }}>{course.term}</p>
                </div>

                <div style={{
                  display: 'flex',
                  borderTop: '1px solid #C7CDD1'
                }}>
                  <button style={{
                    flex: 1,
                    border: 'none',
                    borderRight: '1px solid #C7CDD1',
                    backgroundColor: 'white',
                    padding: '1rem',
                    cursor: 'pointer',
                    position: 'relative',
                    fontSize: '1.25rem'
                  }}>
                    📢
                    {course.unreadAnnouncements > 0 && (
                      <span style={{
                        position: 'absolute',
                        top: '0.5rem',
                        right: '0.5rem',
                        backgroundColor: '#E62429',
                        color: 'white',
                        borderRadius: '10px',
                        padding: '2px 6px',
                        fontSize: '0.75rem',
                        fontWeight: 'bold'
                      }}>{course.unreadAnnouncements}</span>
                    )}
                  </button>
                  <button style={{
                    flex: 1,
                    border: 'none',
                    borderRight: '1px solid #C7CDD1',
                    backgroundColor: 'white',
                    padding: '1rem',
                    cursor: 'pointer',
                    fontSize: '1.25rem'
                  }}>📝</button>
                  <button 
                    onClick={() => handleCourseClick(course.id)}
                    style={{
                    flex: 1,
                    border: 'none',
                    backgroundColor: 'white',
                    padding: '1rem',
                    cursor: 'pointer',
                    fontSize: '1.25rem'
                  }}>📊</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          display: windowWidth >= 1024 ? 'block' : 'none'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            padding: '1rem',
            marginBottom: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              margin: '0 0 1rem 0',
              fontSize: '1.25rem',
              color: '#2D3B45',
              fontWeight: 'bold'
            }}>To Do</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {todos.map(todo => (
                <li key={todo.id} style={{
                  padding: '0.75rem 0',
                  borderBottom: '1px solid #F5F5F5',
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'start'
                }}>
                  <span style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>
                    {todo.type === 'assignment' ? '📝' : todo.type === 'announcement' ? '📢' : '💬'}
                  </span>
                  <div style={{ flex: 1 }}>
                    <a href="#" style={{
                      color: '#0374B5',
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '0.875rem',
                      display: 'block',
                      marginBottom: '0.25rem'
                    }}>{todo.title}</a>
                    <p style={{
                      margin: '0 0 0.25rem 0',
                      fontSize: '0.75rem',
                      color: '#73818F'
                    }}>{todo.course}</p>
                    <p style={{
                      margin: 0,
                      fontSize: '0.75rem',
                      color: '#73818F'
                    }}>
                      {todo.points && `${todo.points} points • `}{todo.dueDate}
                    </p>
                  </div>
                  <button style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.25rem',
                    color: '#73818F',
                    padding: 0
                  }}>×</button>
                </li>
              ))}
            </ul>
            <button style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#0374B5',
              cursor: 'pointer',
              padding: '0.75rem 0',
              fontSize: '0.875rem',
              width: '100%',
              textAlign: 'left'
            }}>Show All</button>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            padding: '1rem',
            marginBottom: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              margin: '0 0 1rem 0',
              fontSize: '1.25rem',
              color: '#2D3B45',
              fontWeight: 'bold'
            }}>Recent Feedback</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {recentFeedback.map((feedback, index) => (
                <li key={index} style={{
                  padding: '0.75rem 0',
                  borderBottom: index < recentFeedback.length - 1 ? '1px solid #F5F5F5' : 'none'
                }}>
                  <a href="#" style={{
                    color: '#0374B5',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '0.875rem',
                    display: 'block',
                    marginBottom: '0.25rem'
                  }}>{feedback.assignment}</a>
                  <p style={{
                    margin: '0 0 0.25rem 0',
                    fontSize: '0.75rem',
                    color: '#73818F'
                  }}>{feedback.course}</p>
                  <p style={{
                    margin: 0,
                    fontSize: '0.875rem',
                    color: '#2D3B45',
                    fontWeight: 'bold'
                  }}>{feedback.grade}</p>
                  <p style={{
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.75rem',
                    color: '#73818F',
                    fontStyle: 'italic'
                  }}>"{feedback.comment}"</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div style={{
        maxWidth: '1920px',
        margin: '2rem auto',
        padding: '0 clamp(1rem, 2vw, 2rem)'
      }}>
        <button 
          onClick={() => setCurrentPage('grades')}
          style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: '#0374B5',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#025a8f'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0374B5'}
        >
          View Grades
        </button>
      </div>
      </>
      ) : currentPage === 'course-grades' ? (
        renderCourseGradePage()
      ) : (
        <div style={{ 
          maxWidth: '1920px', 
          margin: '0 auto',
          padding: 'clamp(1rem, 2vw, 2rem)'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            padding: 'clamp(1rem, 2vw, 1.5rem)',
            marginBottom: '2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              margin: '0 0 0.5rem 0',
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              color: '#2D3B45'
            }}>All Grades</h2>
            <p style={{
              margin: 0,
              color: '#73818F',
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
            }}>View your current grades for all courses</p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {courses.map(course => (
              <div 
                key={course.id} 
                onClick={() => handleCourseClick(course.id)}
                style={{
                backgroundColor: 'white',
                borderRadius: '4px',
                padding: 'clamp(1rem, 2vw, 1.5rem)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                display: 'flex',
                flexWrap: windowWidth < 640 ? 'wrap' : 'nowrap',
                alignItems: 'center',
                gap: 'clamp(0.75rem, 2vw, 1.5rem)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }}>
                <div style={{
                  width: windowWidth < 640 ? '100%' : '8px',
                  height: windowWidth < 640 ? '4px' : '80px',
                  backgroundColor: course.color,
                  borderRadius: '4px',
                  flexShrink: 0
                }}></div>

                <div style={{ 
                  flex: 1,
                  minWidth: windowWidth < 640 ? '100%' : 0
                }}>
                  <h3 style={{
                    margin: '0 0 0.25rem 0',
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                    color: '#2D3B45',
                    fontWeight: 'bold'
                  }}>{course.name}</h3>
                  <p style={{
                    margin: '0 0 0.25rem 0',
                    fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                    color: '#73818F'
                  }}>{course.code}</p>
                  <p style={{
                    margin: 0,
                    fontSize: 'clamp(0.7rem, 1.5vw, 0.75rem)',
                    color: '#73818F'
                  }}>{course.term}</p>
                </div>

                <div style={{
                  textAlign: 'right',
                  minWidth: windowWidth < 640 ? 'auto' : '100px',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: windowWidth < 640 ? 'row' : 'column',
                  alignItems: windowWidth < 640 ? 'center' : 'flex-end',
                  gap: windowWidth < 640 ? '0.5rem' : '0'
                }}>
                  <div style={{
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    fontWeight: 'bold',
                    color: '#2D3B45',
                    lineHeight: 1
                  }}>{course.currentGrade}</div>
                  <div style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                    color: '#73818F',
                    marginTop: windowWidth < 640 ? '0' : '0.25rem'
                  }}>{course.letterGrade}</div>
                </div>

                <div style={{
                  fontSize: '1.5rem',
                  color: '#C7CDD1',
                  flexShrink: 0,
                  display: windowWidth < 640 ? 'none' : 'block'
                }}>›</div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '2rem',
            textAlign: 'center'
          }}>
            <button 
              onClick={() => setCurrentPage('dashboard')}
              style={{
              backgroundColor: 'transparent',
              border: '1px solid #C7CDD1',
              borderRadius: '4px',
              padding: '0.75rem 2rem',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              color: '#0374B5',
              cursor: 'pointer',
              fontWeight: '500',
              width: windowWidth < 640 ? '100%' : 'auto'
            }}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CanvasDashboard;