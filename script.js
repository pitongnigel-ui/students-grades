// Student data with fixed IDs and passwords
const students = [
  { 
    name: "Karel Enriquez", age: 17, sex: "Female", school: "Gutad National Highschool", 
    grades: { "Capstone Project": 99, "Physics 2": 98, "Pagsulat at Pagbasa": 96, "Entrepreneurship": 99, "Contemporary Arts": 98, "III": 96, "MIL": 99 },
    id: "S1001", password: "karel17"
  },
  { 
    name: "Fritz Nigel", age: 17, sex: "Male", school: "Gutad National Highschool", 
    grades: { "Capstone Project": 98, "Physics 2": 99, "Pagsulat at Pagbasa": 96, "Entrepreneurship": 98, "Contemporary Arts": 99, "III": 96, "MIL": 98 },
    id: "S1002", password: "fritz17"
  },
  { 
    name: "Ghenela Paule", age: 18, sex: "Female", school: "Gutad National Highschool", 
    grades: { "Capstone Project": 96, "Physics 2": 99, "Pagsulat at Pagbasa": 98, "Entrepreneurship": 96, "Contemporary Arts": 98, "III": 99, "MIL": 96 },
    id: "S1003", password: "ghenela18"
  },
  { 
    name: "Lorenz Carpo", age: 18, sex: "Male", school: "Gutad National Highschool", 
    grades: { "Capstone Project": 99, "Physics 2": 96, "Pagsulat at Pagbasa": 98, "Entrepreneurship": 99, "Contemporary Arts": 96, "III": 98, "MIL": 99 },
    id: "S1004", password: "lorenz18"
  }
];

// Show credentials on the page
const table = document.getElementById("credentialsTable");
students.forEach(s => {
  const row = table.insertRow();
  row.insertCell(0).textContent = s.name;
  row.insertCell(1).textContent = s.id;
  row.insertCell(2).textContent = s.password;
});

// Login function
function login() {
  const id = document.getElementById("studentId").value;
  const pw = document.getElementById("password").value;
  const student = students.find(s => s.id === id && s.password === pw);

  if (student) {
    document.getElementById("login").style.display = "none";
    document.getElementById("grades").style.display = "block";

    document.getElementById("info").innerHTML = `
      <strong>Name:</strong> ${student.name}<br>
      <strong>Age:</strong> ${student.age}<br>
      <strong>Sex:</strong> ${student.sex}<br>
      <strong>School:</strong> ${student.school}
    `;

    const gradesList = document.getElementById("gradesList");
    gradesList.innerHTML = "";
    for (let subject in student.grades) {
      gradesList.innerHTML += `<li>${subject}: ${student.grades[subject]}</li>`;
    }
  } else {
    document.getElementById("error").textContent = "Invalid Student ID or Password!";
  }
}

// Logout function
function logout() {
  document.getElementById("login").style.display = "block";
  document.getElementById("grades").style.display = "none";
  document.getElementById("studentId").value = "";
  document.getElementById("password").value = "";
  document.getElementById("error").textContent = "";
}
