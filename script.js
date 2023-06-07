const teamRows = document.querySelectorAll(".team");

teamRows.forEach((teamRow) => {
  const noCell = teamRow.querySelector(".no");
  const no = noCell.textContent;
  const teamNameCell = teamRow.querySelector(".team-name");
  const teamName = teamNameCell.textContent;
  const winsCell = teamRow.querySelector(".wins");
  const wins = winsCell.textContent;
  const lossesCell = teamRow.querySelector(".losses");
  const losses = lossesCell.textContent;
  const drawsCell = teamRow.querySelector(".draws");
  const draws = drawsCell.textContent;
  const pointsCell = teamRow.querySelector(".points");
  const points = pointsCell.textContent;
  const teamDetails = document.createElement("div");
  teamDetails.classList.add("team-details");
  teamDetails.innerHTML = `<strong>Team ${no}</strong><br>Team: ${teamName}<br>Wins: ${wins}<br>Losses: ${losses}<br>Draws: ${draws}<br>Points: ${points}`;
  teamRow.appendChild(teamDetails);

  teamRow.addEventListener("mouseenter", () => {
    teamDetails.style.opacity = "1";
    teamDetails.style.visibility = "visible";
  });

  teamRow.addEventListener("mouseleave", () => {
    teamDetails.style.opacity = "0";
    teamDetails.style.visibility = "hidden";
  });
});
