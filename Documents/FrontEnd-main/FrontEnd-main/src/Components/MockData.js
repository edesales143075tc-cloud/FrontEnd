export const MOCK_DATA = {
    programs: [
      { id: 1, code: 'BSIT', name: 'BS Information Technology', type: "Bachelor's", duration: '4 years', units: 140, status: 'active', description: 'Focuses on software development and networking.' },
      { id: 2, code: 'BSCS', name: 'BS Computer Science', type: "Bachelor's", duration: '4 years', units: 145, status: 'active', description: 'Emphasis on algorithms and theory.' },
      { id: 3, code: 'ACT', name: 'Associate in Comp Tech', type: 'Diploma', duration: '2 years', units: 72, status: 'phased out', description: 'Technical vocational course.' },
    ],
    subjects: [
      { id: 101, code: 'IT101', title: 'Intro to Computing', units: 3, term: 'Semester', program: 'BSIT', prereq: 'none', coreq: 'none', description: 'Fundamental concepts of IT.' },
      { id: 102, code: 'CS202', title: 'Data Structures', units: 3, term: 'Both', program: 'BSCS', prereq: 'IT101', coreq: 'none', description: 'Logical structures of data.' },
      { id: 103, code: 'WD101', title: 'Web Dev 1', units: 3, term: 'Term', program: 'BSIT', prereq: 'none', coreq: 'none', description: 'HTML, CSS, and JS basics.' },
    ]
  };