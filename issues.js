const loadAllIssues = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues ")
    .then((res) => res.json())
    .then((json) => displayIssues(json.data));
};
const displayIssues = (issues) => {
  const issuesContainer = document.getElementById("issuesContainer");
  for(issue of issues){
    const btnDiv=document.createElement("div")

  }
};
loadAllIssues();
    