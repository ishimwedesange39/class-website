const students = [
  {
    id: 'SD001',
    name: 'MUHIRE Joseph',
    trade: 'Software Development'
  },
  {
    id: 'SD002',
    name: 'ISHIMWE Desange',
    trade: 'Software Development'
  },
  {
    id: 'SD003',
    name: 'AGATESI Deborah',
    trade: 'Software Development'
  },
  {
    id: 'SD004',
    name: 'MUNEZERO Innocent',
    trade: 'Software Development'
  },
  {
    id: 'SD005',
    name: 'UMUTONI WASE Gaelle',
    trade: 'Software Development'
  }
];

function Students() {
  return (
    <section>
      <h2>Our Students</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Trade</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.trade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Students;