export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
  };
}

export async function getStaticProps(params) {
  const res = await fetch(
    `http://localhost:3000/api/students/${params.params.id}`
  );
  const student = await res.json();
  return {
    props: {
      student: student,
    },
  };
}

export default function StudentsById(props) {
  return (
    <div>
      <h1>Student details</h1>
      <ul>
        <li>Student ID: {props.student.id}</li>
        <li>Student Name: {props.student.name}</li>
        <li>Student Age: {props.student.age}</li>
        <li>Student Registry: {props.student.registry}</li>
        <li>Student E-mail: {props.student.email}</li>
        <li>Student Celphone: {props.student.phone}</li>
      </ul>
    </div>
  );
}
