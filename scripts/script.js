const loadAllIssue = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
    .then(res => res.json())
    .then(jsonData => {
        displayAllIssue(jsonData.data)
        issueCounter();
    })
}

const displayAllIssue = (issues) => {
    const issueContainer = document.getElementById("issue-container")
    issueContainer.innerHTML = "";
    issues.forEach(issue => {
        // console.log(issue)
        const issueCard = document.createElement("div")
        issueCard.innerHTML = `
        <div class="bg-base-100 p-6 rounded-lg space-y-5">
            <div class="flex justify-between items-center">
                <div>
                    <img src="./assets/Open-Status.png" alt="" class="w-10 h-10">
                </div>
                <div class="text-red-400 bg-red-100 text-center rounded-3xl px-6 py-1 flex justify-center items-center">
                    <h2>High</h2>
                </div>
            </div>
            <div class="space-y-5">
                <h2 class="text-xl font-bold">Fix navigation menu on mobile devices</h2>
                <p class="text-gray-400">The navigation menu doesn't collapse properly on mobile devices...</p>
                <div class="flex items-center gap-2">
                    <div class="text-red-400 bg-red-100 text-center rounded-3xl px-6 py-1 flex justify-center items-center border border-red-400">
                        <h2>BUG</h2>
                    </div>
                    <div class="text-yellow-600 bg-yellow-100 text-center rounded-3xl px-6 py-1 flex justify-center items-center border border-yellow-400">
                        <h2>HELP WANTED</h2>
                    </div>
                </div>
            </div>
            <div class="p-2 border-t-2 border-gray-400">
                <p class="text-gray-400">#1 by john_doe</p>
                <p class="text-gray-400">1/15/2024</p>
            </div>
        </div>
        `
        issueContainer.appendChild(issueCard)
    });
}



loadAllIssue();


const issueCounter = () => {
    const issueContainer = document.getElementById("issue-container")
    console.log(issueContainer.children.length)
    document.getElementById("counter-issue").innerText = issueContainer.children.length
}
