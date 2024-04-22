import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState([]);

  async function handleSubmitForm(e) {
    e.preventDefault();
    await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        age: age,
      }),
    });

    const response = await fetch("/api/form");
    const users = await response.json();
    setUsers(users);

    setName("");
    setAge(0);
  }

  return (
    <div>
      <h1>Integrando com API #02</h1>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="name">What's your name?</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">What's your age?</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(+e.target.value)}
          />
        </div>
        <input type="submit" value="Send" />
      </form>
      <h2>Usuários:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
