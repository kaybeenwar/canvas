import React, { useState, useEffect } from 'react';

const CanvasDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1024);
  const [windowHeight, setWindowHeight] = useState(768);

  useEffect(() => {
    // Reset body and html margins/padding to ensure full viewport usage
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      // Restore default body styles when component unmounts
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
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

  // Responsive breakpoints
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;
  const isLargeDesktop = windowWidth >= 1400;

  // Sidebar constants - remove automatic behavior
  const sidebarWidth = '280px';

  const renderCourseGradePage = () => {
    const course = courses.find(c => c.id === selectedCourse);
    const grades = courseGrades[selectedCourse];

    return (
      <div style={{ 
        width: '100vw',
        height: '100vh',
        padding: 0,
        margin: 0,
        paddingLeft: sidebarOpen ? sidebarWidth : '0',
        paddingTop: '128px', // Account for header height
        transition: 'padding-left 0.3s ease',
        overflow: 'auto',
        backgroundColor: '#F5F5F5',
        boxSizing: 'border-box'
      }}>
        {/* Course Header */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: isMobile ? '1.5rem' : '2rem',
          margin: isMobile ? '1rem 0.5rem' : '1rem 1rem',
          marginBottom: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)',
          border: '1px solid #F1F5F9',
          borderLeft: `4px solid ${course.color}`
        }}>
          <h2 style={{
            margin: '0 0 1rem 0',
            fontSize: isMobile ? '1.75rem' : 'clamp(2rem, 4vw, 3rem)',
            color: '#1F2937',
            fontWeight: '800',
            letterSpacing: '-0.025em'
          }}>{course.name}</h2>
          <p style={{
            margin: '0 0 1.5rem 0',
            color: '#6B7280',
            fontSize: isMobile ? '1rem' : 'clamp(1rem, 2.5vw, 1.25rem)',
            fontWeight: '500'
          }}>{course.code} • {course.term}</p>
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'baseline',
            marginTop: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <span style={{ 
                fontSize: isMobile ? '2.5rem' : 'clamp(3rem, 6vw, 4rem)', 
                fontWeight: '900', 
                color: course.color,
                letterSpacing: '-0.025em'
              }}>
                {course.currentGrade}
              </span>
              <span style={{ 
                fontSize: isMobile ? '1.5rem' : 'clamp(1.75rem, 3vw, 2.25rem)', 
                color: '#6B7280', 
                marginLeft: '1rem',
                fontWeight: '600'
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
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: isMobile ? '1.5rem' : '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)',
            border: '1px solid #F1F5F9',
            marginBottom: isMobile ? '1rem' : '1.5rem',
            overflow: 'hidden'
          }}>
            <h3 style={{
              margin: '0 0 2rem 0',
              fontSize: isMobile ? '1.5rem' : 'clamp(1.75rem, 3vw, 2.25rem)',
              color: '#1F2937',
              fontWeight: '700',
              letterSpacing: '-0.025em'
            }}>Assignments</h3>
            
            <div style={{ overflowX: 'auto', width: '100%' }}>
              <table style={{
                width: '100%',
                minWidth: isMobile ? '600px' : '800px',
                borderCollapse: 'collapse',
                fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 2vw, 1rem)'
              }}>
                <thead>
                  <tr style={{ borderBottom: '3px solid #E5E7EB' }}>
                    <th style={{ textAlign: 'left', padding: isMobile ? '1rem' : '1.5rem', color: '#6B7280', fontWeight: '600', fontSize: isMobile ? '0.875rem' : '1rem' }}>Name</th>
                    <th style={{ textAlign: 'left', padding: isMobile ? '1rem' : '1.5rem', color: '#6B7280', fontWeight: '600', fontSize: isMobile ? '0.875rem' : '1rem' }}>Category</th>
                    <th style={{ textAlign: 'left', padding: isMobile ? '1rem' : '1.5rem', color: '#6B7280', fontWeight: '600', fontSize: isMobile ? '0.875rem' : '1rem' }}>Due</th>
                    <th style={{ textAlign: 'right', padding: isMobile ? '1rem' : '1.5rem', color: '#6B7280', fontWeight: '600', fontSize: isMobile ? '0.875rem' : '1rem' }}>Score</th>
                    <th style={{ textAlign: 'center', padding: isMobile ? '1rem' : '1.5rem', color: '#6B7280', fontWeight: '600', fontSize: isMobile ? '0.875rem' : '1rem' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.assignments.map((assignment, index) => (
                    <tr key={index} style={{ 
                      borderBottom: '1px solid #F3F4F6',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <td style={{ 
                        padding: isMobile ? '1rem' : '1.5rem', 
                        color: '#1F2937', 
                        fontWeight: '500',
                        maxWidth: isMobile ? '250px' : 'none',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: isMobile ? 'nowrap' : 'normal',
                        lineHeight: '1.5'
                      }}>{assignment.name}</td>
                      <td style={{ padding: isMobile ? '1rem' : '1.5rem', color: '#6B7280', fontWeight: '500' }}>{assignment.category}</td>
                      <td style={{ padding: isMobile ? '1rem' : '1.5rem', color: '#6B7280', fontWeight: '500' }}>{assignment.due}</td>
                      <td style={{ padding: isMobile ? '1rem' : '1.5rem', textAlign: 'right', color: '#1F2937', fontWeight: '600' }}>
                        {assignment.score}
                      </td>
                      <td style={{ padding: isMobile ? '1rem' : '1.5rem', textAlign: 'center' }}>
                        {assignment.status === 'late' && (
                          <span style={{
                            backgroundColor: '#FEF3C7',
                            color: '#92400E',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            fontSize: isMobile ? '0.75rem' : '0.875rem',
                            fontWeight: '600'
                          }}>late</span>
                        )}
                        {assignment.status === 'missing' && (
                          <span style={{
                            backgroundColor: '#FEE2E2',
                            color: '#991B1B',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            fontSize: isMobile ? '0.75rem' : '0.875rem',
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
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: isMobile ? '1.5rem' : '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)',
            border: '1px solid #F1F5F9',
            height: 'fit-content'
          }}>
            <h3 style={{
              margin: '0 0 2rem 0',
              fontSize: isMobile ? '1.5rem' : 'clamp(1.75rem, 3vw, 2.25rem)',
              color: '#1F2937',
              fontWeight: '700',
              letterSpacing: '-0.025em'
            }}>Grade Summary</h3>
            
            {grades.summary.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.25rem 0',
                borderBottom: index < grades.summary.length - 1 ? '1px solid #F3F4F6' : 
                  item.category === 'Total' ? '3px solid #E5E7EB' : 'none',
                fontWeight: item.category === 'Total' ? '700' : '500',
                fontSize: item.category === 'Total' 
                  ? (isMobile ? '1.25rem' : 'clamp(1.25rem, 2.5vw, 1.5rem)')
                  : (isMobile ? '1rem' : 'clamp(1rem, 2vw, 1.125rem)'),
                backgroundColor: item.category === 'Total' ? '#F9FAFB' : 'transparent',
                margin: item.category === 'Total' ? '0.5rem -1.5rem 0 -1.5rem' : '0',
                paddingLeft: item.category === 'Total' ? '1.5rem' : '0',
                paddingRight: item.category === 'Total' ? '1.5rem' : '0',
                borderRadius: item.category === 'Total' ? '12px' : '0',
                marginTop: item.category === 'Total' ? '1rem' : '0'
              }}>
                <span style={{ color: '#1F2937' }}>{item.category}</span>
                <div style={{ 
                  display: 'flex', 
                  gap: isMobile ? '1rem' : 'clamp(1rem, 2vw, 1.5rem)', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: '#6B7280', fontSize: 'inherit' }}>{item.score}</span>
                  <span style={{ 
                    color: item.category === 'Total' ? course.color : '#1F2937',
                    minWidth: isMobile ? '70px' : '80px',
                    textAlign: 'right',
                    fontSize: 'inherit',
                    fontWeight: item.category === 'Total' ? '800' : '600'
                  }}>{item.percentage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div style={{
          backgroundColor: 'white',
          padding: isMobile ? '1rem' : '1.5rem',
          margin: isMobile ? '1rem 0.5rem' : '1rem 1rem',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)',
          border: '1px solid #F1F5F9'
        }}>
          <button 
            onClick={() => {
              setCurrentPage('grades');
              setSelectedCourse(null);
            }}
            style={{
            backgroundColor: 'white',
            border: '2px solid #E5E7EB',
            borderRadius: '12px',
            padding: isMobile ? '1rem 2rem' : 'clamp(1rem, 2vw, 1.5rem) clamp(2rem, 4vw, 3rem)',
            fontSize: isMobile ? '1rem' : 'clamp(1rem, 2.5vw, 1.125rem)',
            color: course.color,
            cursor: 'pointer',
            fontWeight: '600',
            width: isMobile ? '100%' : 'auto',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = course.color;
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = `0 8px 25px ${course.color}30`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = course.color;
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)';
          }}
          >
            ← Back to All Grades
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#F5F5F5',
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Sidebar Overlay */}
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

      {/* Sidebar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: sidebarOpen ? 0 : `-${sidebarWidth}`,
        width: sidebarWidth,
        height: '100vh',
        backgroundColor: '#1F2937',
        transition: 'left 0.3s ease',
        zIndex: 1000,
        overflowY: 'auto',
        boxShadow: '4px 0 16px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{
            backgroundColor: '#0374B5',
            padding: '1rem',
            borderRadius: '12px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            textAlign: 'center'
          }}>Canvas</div>
        </div>

        <nav>
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('dashboard');
              if (isMobile) setSidebarOpen(false);
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
            backgroundColor: currentPage === 'dashboard' ? 'rgba(3, 116, 181, 0.2)' : 'transparent',
            transition: 'all 0.2s ease'
          }}>
            <span style={{ fontSize: '1.5rem' }}>📊</span>
            <span style={{ fontWeight: '500' }}>Dashboard</span>
          </a>
          
          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.5rem',
            color: 'white',
            textDecoration: 'none',
            borderLeft: '4px solid transparent',
            transition: 'all 0.2s ease'
          }}>
            <span style={{ fontSize: '1.5rem' }}>📚</span>
            <span style={{ fontWeight: '500' }}>Courses</span>
          </a>

          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.5rem',
            color: 'white',
            textDecoration: 'none',
            borderLeft: '4px solid transparent',
            transition: 'all 0.2s ease'
          }}>
            <span style={{ fontSize: '1.5rem' }}>👥</span>
            <span style={{ fontWeight: '500' }}>Groups</span>
          </a>

          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.5rem',
            color: 'white',
            textDecoration: 'none',
            borderLeft: '4px solid transparent',
            transition: 'all 0.2s ease'
          }}>
            <span style={{ fontSize: '1.5rem' }}>📅</span>
            <span style={{ fontWeight: '500' }}>Calendar</span>
          </a>

          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.5rem',
            color: 'white',
            textDecoration: 'none',
            borderLeft: '4px solid transparent',
            position: 'relative',
            transition: 'all 0.2s ease'
          }}>
            <span style={{ fontSize: '1.5rem' }}>✉️</span>
            <span style={{ fontWeight: '500' }}>Inbox</span>
            <span style={{
              backgroundColor: '#E62429',
              color: 'white',
              borderRadius: '12px',
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
            borderLeft: '4px solid transparent',
            transition: 'all 0.2s ease'
          }}>
            <span style={{ fontSize: '1.5rem' }}>⏰</span>
            <span style={{ fontWeight: '500' }}>History</span>
          </a>

          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.5rem',
            color: 'white',
            textDecoration: 'none',
            borderLeft: '4px solid transparent',
            transition: 'all 0.2s ease'
          }}>
            <span style={{ fontSize: '1.5rem' }}>❓</span>
            <span style={{ fontWeight: '500' }}>Help</span>
          </a>
        </nav>
      </div>

      {/* Top Header */}
      <div style={{
        backgroundColor: '#1F2937',
        color: 'white',
        padding: '0',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100vw',
        zIndex: 100,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          height: '64px',
          paddingLeft: sidebarOpen && !isMobile ? sidebarWidth : '0'
        }}>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            padding: '0 1.5rem',
            height: '100%',
            cursor: 'pointer',
            fontSize: '1.5rem',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >☰</button>
          {!sidebarOpen && (
            <div style={{
              backgroundColor: '#0374B5',
              padding: '0.5rem 1rem',
              fontWeight: 'bold',
              marginRight: 'auto',
              fontSize: '1.25rem'
            }}>Canvas</div>
          )}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            paddingRight: '1.5rem',
            marginLeft: 'auto'
          }}>
            <button style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1.25rem',
              padding: '0.75rem',
              borderRadius: '8px',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >👤</button>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #E5E7EB',
        padding: '1rem',
        position: 'fixed',
        top: '64px',
        left: 0,
        right: 0,
        zIndex: 90,
        paddingLeft: sidebarOpen && !isMobile ? `calc(${sidebarWidth} + 1rem)` : '1rem',
        transition: 'padding-left 0.3s ease'
      }}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: isMobile ? '1.75rem' : 'clamp(2rem, 4vw, 2.5rem)', 
            color: '#1F2937',
            fontWeight: '800',
            letterSpacing: '-0.025em'
          }}>
            {currentPage === 'dashboard' ? 'Dashboard' : 
             currentPage === 'grades' ? 'Grades' : 
             selectedCourse ? courses.find(c => c.id === selectedCourse)?.name : 'Dashboard'}
          </h1>
          {currentPage === 'dashboard' && (
            <button style={{
              backgroundColor: 'transparent',
              border: '2px solid #E5E7EB',
              borderRadius: '12px',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F3F4F6';
              e.currentTarget.style.borderColor = '#D1D5DB';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#E5E7EB';
            }}
            >
              <span>⋮</span>
              <span>Dashboard Options</span>
            </button>
          )}
        </div>
      </div>

      {currentPage === 'dashboard' ? (
        <div style={{ 
          width: '100vw',
          height: '100vh',
          padding: 0,
          margin: 0,
          paddingLeft: sidebarOpen ? sidebarWidth : '0',
          paddingTop: '128px', // Account for header height
          transition: 'padding-left 0.3s ease',
          overflow: 'auto',
          boxSizing: 'border-box'
        }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile 
                ? '1fr' 
                : isTablet 
                  ? 'repeat(2, 1fr)' 
                  : isDesktop 
                    ? 'repeat(3, 1fr)'
                    : 'repeat(4, 1fr)',
              gap: isMobile ? '0' : '1rem',
              padding: isMobile ? '1rem' : '1.5rem',
              margin: isMobile ? '0 0.5rem' : '0 1rem'
            }}>
                {courses.map(course => (
                  <div
                    key={course.id}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)',
                      border: '1px solid #F1F5F9',
                      marginBottom: isMobile ? '1rem' : '1.5rem',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.08)';
                      e.currentTarget.style.borderColor = '#E2E8F0';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)';
                      e.currentTarget.style.borderColor = '#F1F5F9';
                    }}>
                    <div style={{
                      background: `linear-gradient(135deg, ${course.color}, ${course.color}dd)`,
                      height: '140px',
                      padding: '1.5rem',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end'
                    }}>
                      <button style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        border: 'none',
                        borderRadius: '8px',
                        width: '36px',
                        height: '36px',
                        cursor: 'pointer',
                        fontSize: '1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'white'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)'}
                      >⋮</button>
                      <h3 style={{
                        margin: 0,
                        color: 'white',
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        lineHeight: '1.3'
                      }}>{course.name}</h3>
                      <p style={{
                        margin: '0.5rem 0 0 0',
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}>{course.code}</p>
                      <p style={{
                        margin: '0.25rem 0 0 0',
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '0.75rem'
                      }}>{course.term}</p>
                    </div>

                    <div style={{
                      display: 'flex',
                      borderTop: '1px solid #E5E7EB'
                    }}>
                      <button style={{
                        flex: 1,
                        border: 'none',
                        borderRight: '1px solid #E5E7EB',
                        backgroundColor: 'white',
                        padding: '1rem',
                        cursor: 'pointer',
                        position: 'relative',
                        fontSize: '1.25rem',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                      >
                        📢
                        {course.unreadAnnouncements > 0 && (
                          <span style={{
                            position: 'absolute',
                            top: '0.5rem',
                            right: '0.5rem',
                            backgroundColor: '#E62429',
                            color: 'white',
                            borderRadius: '12px',
                            padding: '2px 6px',
                            fontSize: '0.75rem',
                            fontWeight: 'bold'
                          }}>{course.unreadAnnouncements}</span>
                        )}
                      </button>
                      <button style={{
                        flex: 1,
                        border: 'none',
                        borderRight: '1px solid #E5E7EB',
                        backgroundColor: 'white',
                        padding: '1rem',
                        cursor: 'pointer',
                        fontSize: '1.25rem',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                      >📝</button>
                      <button 
                        onClick={() => handleCourseClick(course.id)}
                        style={{
                        flex: 1,
                        border: 'none',
                        backgroundColor: 'white',
                        padding: '1rem',
                        cursor: 'pointer',
                        fontSize: '1.25rem',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                      >📊</button>
                    </div>
                  </div>
                ))}
              </div>

          {/* View Grades Button */}
          <div style={{
            backgroundColor: 'white',
            padding: isMobile ? '1rem' : '1.5rem',
            margin: isMobile ? '0 0.5rem' : '0 1rem',
            borderRadius: '12px',
            marginTop: '1rem',
            marginBottom: '1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)'
          }}>
            <button 
              onClick={() => setCurrentPage('grades')}
              style={{
                width: '100%',
                padding: isMobile ? '1.25rem' : 'clamp(1.25rem, 2vw, 1.5rem)',
                backgroundColor: '#0374B5',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: isMobile ? '1.125rem' : 'clamp(1.125rem, 2vw, 1.25rem)',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(3, 116, 181, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#025a8f';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(3, 116, 181, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0374B5';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(3, 116, 181, 0.3)';
              }}
            >
              View Grades
            </button>
          </div>
        </div>
      ) : currentPage === 'course-grades' ? (
        renderCourseGradePage()
      ) : (
        // All Grades Page
        <div style={{ 
          width: '100vw',
          height: '100vh',
          padding: 0,
          margin: 0,
          paddingLeft: sidebarOpen ? sidebarWidth : '0',
          paddingTop: '128px', // Account for header height
          transition: 'padding-left 0.3s ease',
          overflow: 'auto',
          boxSizing: 'border-box'
        }}>
          {/* Page Header */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: isMobile ? '1.5rem' : '2rem',
            margin: isMobile ? '1rem 0.5rem' : '1rem 1rem',
            marginBottom: '1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)',
            border: '1px solid #F1F5F9'
          }}>
            <h2 style={{
              margin: '0 0 0.5rem 0',
              fontSize: isMobile ? '1.75rem' : 'clamp(1.75rem, 3vw, 2.25rem)',
              color: '#1F2937',
              fontWeight: '800',
              letterSpacing: '-0.025em'
            }}>All Grades</h2>
            <p style={{
              margin: 0,
              color: '#6B7280',
              fontSize: isMobile ? '1rem' : 'clamp(1rem, 2vw, 1.125rem)'
            }}>View your current grades for all courses</p>
          </div>

          {/* Course Grade Cards */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            padding: isMobile ? '0 0.5rem' : '0 1rem'
          }}>
            {courses.map(course => (
              <div 
                key={course.id} 
                onClick={() => handleCourseClick(course.id)}
                style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: isMobile ? '1.5rem' : '2rem',
                marginBottom: isMobile ? '1rem' : '1.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)',
                border: '1px solid #F1F5F9',
                display: 'flex',
                flexWrap: isMobile ? 'wrap' : 'nowrap',
                alignItems: 'center',
                gap: isMobile ? '1rem' : '1.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.08)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#F1F5F9';
              }}>
                {/* Color Indicator */}
                <div style={{
                  width: isMobile ? '100%' : '8px',
                  height: isMobile ? '6px' : '100px',
                  backgroundColor: course.color,
                  borderRadius: '8px',
                  flexShrink: 0
                }}></div>

                {/* Course Info */}
                <div style={{ 
                  flex: 1,
                  minWidth: isMobile ? '100%' : 0
                }}>
                  <h3 style={{
                    margin: '0 0 0.5rem 0',
                    fontSize: isMobile ? '1.25rem' : 'clamp(1.25rem, 2.5vw, 1.5rem)',
                    color: '#1F2937',
                    fontWeight: 'bold',
                    lineHeight: '1.3'
                  }}>{course.name}</h3>
                  <p style={{
                    margin: '0 0 0.25rem 0',
                    fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 2vw, 1rem)',
                    color: '#6B7280',
                    fontWeight: '500'
                  }}>{course.code}</p>
                  <p style={{
                    margin: 0,
                    fontSize: isMobile ? '0.75rem' : 'clamp(0.75rem, 1.5vw, 0.875rem)',
                    color: '#9CA3AF'
                  }}>{course.term}</p>
                </div>

                {/* Grade Display */}
                <div style={{
                  textAlign: 'right',
                  minWidth: isMobile ? 'auto' : '160px',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: isMobile ? 'row' : 'column',
                  alignItems: isMobile ? 'center' : 'flex-end',
                  gap: isMobile ? '1rem' : '0.5rem',
                  paddingRight: '0.5rem'
                }}>
                  <div style={{
                    fontSize: isMobile ? '2rem' : 'clamp(1.75rem, 3vw, 2.25rem)',
                    fontWeight: 'bold',
                    color: '#1F2937',
                    lineHeight: 1
                  }}>{course.currentGrade}</div>
                  <div style={{
                    fontSize: isMobile ? '1.25rem' : 'clamp(1.125rem, 2vw, 1.375rem)',
                    color: '#6B7280',
                    fontWeight: '600'
                  }}>{course.letterGrade}</div>
                </div>

                {/* Arrow */}
                <div style={{
                  fontSize: '1.5rem',
                  color: '#D1D5DB',
                  flexShrink: 0,
                  display: isMobile ? 'none' : 'block'
                }}>→</div>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div style={{
            backgroundColor: 'white',
            padding: isMobile ? '1rem' : '1.5rem',
            margin: isMobile ? '1rem 0.5rem' : '1rem 1rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)',
            border: '1px solid #F1F5F9'
          }}>
            <button 
              onClick={() => setCurrentPage('dashboard')}
              style={{
              backgroundColor: 'white',
              border: '2px solid #E5E7EB',
              borderRadius: '12px',
              padding: isMobile ? '1rem 2rem' : 'clamp(1rem, 2vw, 1.25rem) clamp(2rem, 4vw, 3rem)',
              fontSize: isMobile ? '1rem' : 'clamp(1rem, 2.5vw, 1.125rem)',
              color: '#0374B5',
              cursor: 'pointer',
              fontWeight: '600',
              width: isMobile ? '100%' : 'auto',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0374B5';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(3, 116, 181, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#0374B5';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)';
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