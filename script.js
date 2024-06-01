// const card1 = {
//   name: "Prince Pipaliya",
//   courses: ["Web Developer"],
//   p: "This Card Created By Web Devloper Prince Pipaliya Using Most Popular Language Javascript",
//   email: " princ1953e@gmail.com",
// };
document.getElementById("data");
const array = [
  {
    name: "Prince Pipaliya",
    courses: ["Web Developer"],
    p: "This Card Created By Web Developer Prince Pipaliya Using Most Popular Language Javascript",
    email: "princ1953e@gmail.com",
  },
  {
    name: "John Doe",
    courses: ["Data Scientist"],
    p: "This Card Created By Data Scientist John Doe Using Most Popular Language Python",
    email: "john.doe@example.com",
  },
  {
    name: "Jane Smith",
    courses: ["Machine Learning Engineer"],
    p: "This Card Created By Machine Learning Engineer Jane Smith Using Most Popular Language Python",
    email: "jane.smith@example.com",
  },
  {
    name: "Alice Johnson",
    courses: ["Front-end Developer"],
    p: "This Card Created By Front-end Developer Alice Johnson Using Most Popular Language JavaScript",
    email: "alice.johnson@example.com",
  },
  {
    name: "Bob Brown",
    courses: ["Backend Developer"],
    p: "This Card Created By Backend Developer Bob Brown Using Most Popular Language Java",
    email: "bob.brown@example.com",
  },
  {
    name: "Charlie Davis",
    courses: ["Full Stack Developer"],
    p: "This Card Created By Full Stack Developer Charlie Davis Using Most Popular Language JavaScript",
    email: "charlie.davis@example.com",
  },
  {
    name: "Eve Martinez",
    courses: ["Mobile App Developer"],
    p: "This Card Created By Mobile App Developer Eve Martinez Using Most Popular Language Swift",
    email: "eve.martinez@example.com",
  },
  {
    name: "Frank Wilson",
    courses: ["Cybersecurity Specialist"],
    p: "This Card Created By Cybersecurity Specialist Frank Wilson Using Most Popular Language Python",
    email: "frank.wilson@example.com",
  },
  {
    name: "Grace Lee",
    courses: ["AI Researcher"],
    p: "This Card Created By AI Researcher Grace Lee Using Most Popular Language Python",
    email: "grace.lee@example.com",
  },
  {
    name: "Hank Taylor",
    courses: ["Cloud Engineer"],
    p: "This Card Created By Cloud Engineer Hank Taylor Using Most Popular Language Go",
    email: "hank.taylor@example.com",
  },
  {
    name: "Ivy Thomas",
    courses: ["DevOps Engineer"],
    p: "This Card Created By DevOps Engineer Ivy Thomas Using Most Popular Language Python",
    email: "ivy.thomas@example.com",
  },
  {
    name: "Jack White",
    courses: ["Data Analyst"],
    p: "This Card Created By Data Analyst Jack White Using Most Popular Language R",
    email: "jack.white@example.com",
  },
  {
    name: "Kathy Harris",
    courses: ["Software Engineer"],
    p: "This Card Created By Software Engineer Kathy Harris Using Most Popular Language C++",
    email: "kathy.harris@example.com",
  },
  {
    name: "Liam Martin",
    courses: ["Game Developer"],
    p: "This Card Created By Game Developer Liam Martin Using Most Popular Language C#",
    email: "liam.martin@example.com",
  },
  {
    name: "Mia Clark",
    courses: ["Database Administrator"],
    p: "This Card Created By Database Administrator Mia Clark Using Most Popular Language SQL",
    email: "mia.clark@example.com",
  },
  {
    name: "Alice Johnson",
    courses: ["Front-end Developer"],
    p: "This Card Created By Front-end Developer Alice Johnson Using Most Popular Language JavaScript",
    email: "alice.johnson@example.com",
  },
  {
    name: "Noah Walker",
    courses: ["Network Engineer"],
    p: "This Card Created By Network Engineer Noah Walker Using Most Popular Language Python",
    email: "noah.walker@example.com",
  },
  {
    name: "Olivia Hall",
    courses: ["UI/UX Designer"],
    p: "This Card Created By UI/UX Designer Olivia Hall Using Most Popular Language JavaScript",
    email: "olivia.hall@example.com",
  },
  {
    name: "Peter Young",
    courses: ["Systems Analyst"],
    p: "This Card Created By Systems Analyst Peter Young Using Most Popular Language Python",
    email: "peter.young@example.com",
  },
  {
    name: "Quinn King",
    courses: ["IT Support Specialist"],
    p: "This Card Created By IT Support Specialist Quinn King Using Most Popular Language Bash",
    email: "quinn.king@example.com",
  },
  {
    name: "Rachel Scott",
    courses: ["Blockchain Developer"],
    p: "This Card Created By Blockchain Developer Rachel Scott Using Most Popular Language Solidity",
    email: "rachel.scott@example.com",
  },
];

array.forEach((ele) => {
  data.innerHTML += `<div
  class="card w-4/12 h-[640px] rounded-3xl flex justify-center items-center"
  >
  <div
    class="card-content p-5 h-[500px] w-[400px] border rounded-3xl bg-purple-300"
  >
    <div class="img-block w-full flex justify-center my-6 ">
      <img
        src="user.png"
        alt=""
        class="w-40 h-40 p-5 rounded-full border bg-[#6b61ba]"
      />
    </div>
    <div class="card-text text-center my-4">
      <h2 class="text-white text-2xl mb-1">${ele.name}</h2>
      <span
        class="text-[#6b61ba] font-semibold mb-4 inline-block"
      >
    ${ele.courses}</span>
      <p class="text-white text-sm mb-3" id="pa">${ele.p}</p>
      <button class="my-4">
        <div
          class="email bg-[#6b61ba] border transition-all duration-500 border-[#6b61ba] hover:border-[#443280] hover:bg-transparent px-6 flex items-center text-white font-medium py-2 rounded-lg"
        >
          <i class="fa-regular fa-envelope mr-3"></i>
          <span>
          ${ele.email}
            <a
              href="https://mail.google.com/"
              target="_blank"
              class="pl-2"
            >
            </a>
          </span>
        </div>
      </button>
      <div class="icon mt-3 flex justify-center items-center">
        <a href="https://twitter.com/Princ1953e" class="mx-2">
          <i class="fa-brands fa-x-twitter text-white text-2xl"></i>
        </a>
        <a
          href="https://www.instagram.com/prince._1953_/"
          class="mx-2"
        >
          <i class="fa-brands fa-instagram text-white text-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/prince-pipaliya-1553852a0/"
          class="mx-2"
        >
          <i class="fa-brands fa-linkedin-in text-white text-2xl"></i>
        </a>
        <a href="https://github.com/Princ1953e" class="mx-2">
          <i class="fa-brands fa-github text-white text-2xl"></i>
        </a>
      </div>
    </div>
  </div>
  </div>`;
});

// document.getElementById("name").innerHTML = card1.name;
// document.getElementById("cours").innerHTML = card1.courses;
// document.getElementById("pa").innerHTML = card1.p;
// document.getElementById("e").innerHTML = card1.email;
// document.getElementById("n").innerHTML = card1.num;
