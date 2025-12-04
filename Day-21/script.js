// Initial data
const students = [
  { firstName: "Ramesh", lastName: "Fadatare", email: "ramesh@gmail.com" },
  { firstName: "Umesh",  lastName: "Fadatare", email: "umesh@gmail.com"  },
  { firstName: "Raj",    lastName: "Fadatare", email: "raj@gmail.com"    },
  { firstName: "Amir",   lastName: "Khan",     email: "amir@gmail.com"   }
];

const tbody = document.getElementById("studentTableBody");

// Render table rows
function renderTable() {
  tbody.innerHTML = "";
  students.forEach((s, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${s.firstName}</td>
      <td>${s.lastName}</td>
      <td>${s.email}</td>
      <td>
        <button class="btn btn-primary btn-sm mr-2" onclick="updateStudent(${index})">
          Update
        </button>
        <button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">
          Delete
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Update student (uses prompts for simplicity)
function updateStudent(i) {
  const s = students[i];
  const first = prompt("First name:", s.firstName);
  const last  = prompt("Last name:", s.lastName);
  const mail  = prompt("Email:", s.email);

  if (first && last && mail) {
    students[i] = { firstName: first, lastName: last, email: mail };
    renderTable();
  }
}

// Delete student
function deleteStudent(i) {
  if (confirm("Delete this student?")) {
    students.splice(i, 1);
    renderTable();
  }
}

// Add new student
document.getElementById("addStudentBtn").addEventListener("click", () => {
  const first = prompt("First name:");
  const last  = prompt("Last name:");
  const mail  = prompt("Email:");

  if (first && last && mail) {
    students.push({ firstName: first, lastName: last, email: mail });
    renderTable();
  }
});

// Initial render
renderTable();