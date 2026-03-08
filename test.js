const issuesNumber = document.getElementById("issuesNumber");
const allIsues = document.getElementById("allIsues");
const loadingSpiner = document.getElementById("loadingSpiner");
const my_modal_5 = document.getElementById("my_modal_5");
const heading = document.getElementById("heading");
// show spiner
function manageSpiner(show) {
  if (show) {
    loadingSpiner.classList.remove("hidden");
    loadingSpiner.classList.add("flex");
  } else {
    // hide spiner
    loadingSpiner.classList.remove("flex");
    loadingSpiner.classList.add("hidden");
  }
}
async function loadAllIssues() {
  manageSpiner(true);
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const data = await res.json();
  manageSpiner(false);
  issuesNumber.innerText = data.data.length;
  data.data.forEach((issues) => {
    const div = document.createElement("div");
    div.innerHTML = `
        
        <div onclick="openIssue()"
          class="bg-base-100 shadow-sm p-10 mb-10 border-t-3 border-indigo-700 rounded-md"
        >
          <div class="flex justify-between items-center mb-5">
            <img src="./assets/Open-Status.png" alt="" />
            <h2 
              class="text-[#EF4444] bg-[#FEECEC] rounded-full pl-8 pr-8 pt-2 pb-2 uppercase"
            >
              ${issues.priority}
            </h2>
          </div>
          <p class="font-semibold text-xl mb-2">
            ${issues.title}
          </p>
          <p class="text-[#64748B] mb-2">
            ${issues.description}
          </p>
          <div class="flex gap-5 items-center mb-3">
            <h2
              class="text-[#EF4444] bg-[#FEECEC] rounded-full uppercase text-[12px] p-2"
            >
              ${issues.labels}
            </h2>
            <h2
              class="text-[#D97706] bg-[#FDE68A] rounded-full  text-center text-[12px] p-2"
            >
              ${issues.labels}
            </h2>
          </div>
          <hr class="mb-3" />
          <p class="text-[#64748B] mb-2">${issues.author}</p>
          <p class="text-[#64748B]">${issues.createdAt}</p>
        </div>
        <!-- card 1 -->
        
      
      `;
    allIsues.appendChild(div);
  });
}
loadAllIssues();

// button toogolling
const all = document.getElementById("all");
const open = document.getElementById("open");
const close = document.getElementById("close");
function toggleStyle(id) {
  all.classList.remove("text-white", "bg-[#4A00FF]");
  open.classList.remove("text-white", "bg-[#4A00FF]");
  close.classList.remove("text-white", "bg-[#4A00FF]");

  all.classList.add("text-black");
  open.classList.add("text-black");
  close.classList.add("text-black");

  const selected = document.getElementById(id);
  currentStatus = id;

  selected.classList.add("text-white", "bg-[#4A00FF]");
  selected.classList.remove("text-black");

  const getData = async () => {
    const res = await fetch(
      `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`,
    );
    const data = await res.json();
    console.log(data);
    displayIssues(data.status);
  };
  function displayIssues(issues) {
    allIsues.innerHTML = "";

    issues.forEach((issue) => {
      const card = document.createElement("div");
      card.className =
        "bg-base-100 shadow-sm p-10 mb-10 border-t-3 border-indigo-700 rounded-md";
      card.innerHTML = `    
          <div class="flex justify-between items-center mb-5">
            <img src="./assets/Open-Status.png" alt="" />
            <h2
              class="text-[#EF4444] bg-[#FEECEC] rounded-full pl-8 pr-8 pt-2 pb-2 uppercase"
            >
              ${issue.status}
            </h2>
          </div>
          <p class="font-semibold text-xl mb-2">
            
          </p>
          <p class="text-[#64748B] mb-2">
            
          </p>
          <div class="flex gap-5 items-center mb-3">
            <h2
              class="text-[#EF4444] bg-[#FEECEC] rounded-full uppercase text-[12px] p-2"
            >
              
            </h2>
            <h2
              class="text-[#D97706] bg-[#FDE68A] rounded-full  text-center text-[12px] p-2"
            >
              
            </h2>
          </div>
          <hr class="mb-3" />
          <p class="text-[#64748B] mb-2"></p>
          <p class="text-[#64748B]"></p>     
      `;
      allIsues.appendChild(card);
    });
  }

  getData();
}

async function openIssue(issue1) {
  const res = await fetch(
    ` https://phi-lab-server.vercel.app/api/v1/lab/issue/33${issue1}`,
  );
  const data = await res.json();
  const issueDetails = data.id;

  my_modal_5.showModal();
  heading.textContent = issueDetails.title;
}
// button toogolling
