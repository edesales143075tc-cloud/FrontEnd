export const mockData = {
  programs: [
    { id: 1, code: 'BSIT', name: 'BS in Information Technology', type: 'Bachelor', duration: '4 Years', units: 140, status: 'Active', desc: 'Focus on software and networks.', years: [{ year: '1st Year', subjects: ['IT101', 'IT102'] }, { year: '2nd Year', subjects: ['IT201'] }] },
    { id: 2, code: 'BSCS', name: 'BS in Computer Science', type: 'Bachelor', duration: '4 Years', units: 142, status: 'Under Review', desc: 'Theory and algorithms.', years: [{ year: '1st Year', subjects: ['CS101'] }] }
  ],
  subjects: [
    { code: 'IT101', title: 'Intro to Computing', units: 3, term: 'Semester', program: 'BSIT', pre: 'None', co: 'None', desc: 'Basic hardware.' },
    { code: 'IT201', title: 'Data Structures', units: 3, term: 'Both', program: 'BSIT', pre: 'IT101', co: 'None', desc: 'Algorithm efficiency.' }
  ]
};