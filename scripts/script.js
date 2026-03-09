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
    issueContainer.classList.remove("hidden")
    const openContainer = document.getElementById("open-container")
    openContainer.classList.add("hidden")
    const closedContainer = document.getElementById("closed-container")
    closedContainer.classList.add("hidden")

    // const issueContainer = document.getElementById("issue-container")
    issueContainer.innerHTML = "";
    issues.forEach(issue => {
        // console.log(issue)
        const issueCard = document.createElement("div")
        issueCard.innerHTML = `
        <div class="bg-base-100 p-6 rounded-lg space-y-5 w-full h-full border-t-4 border-green-500 issue-apu">
            <div class="flex justify-between items-center">
                <div>
                    <img src="./assets/Open-Status.png" alt="" class="w-10 h-10">
                </div>
                <div class="text-red-400 bg-red-100 text-center rounded-3xl px-6 py-1 flex justify-center items-center">
                    <h2>${issue.priority}</h2>
                </div>
            </div>
            <div class="space-y-5">
                <h2 class="text-xl font-bold">${issue.title}</h2>
                <p class="text-gray-400">${issue.description}</p>
                <div class="flex items-center gap-2">
                    <div class="text-red-400 bg-red-100 text-center rounded-3xl px-6 py-1 flex justify-center items-center border border-red-400">
                        <h2>${issue.labels[0]}</h2>
                    </div>
                    <div class="text-yellow-600 bg-yellow-100 text-center rounded-3xl px-6 py-1 flex justify-center items-center border border-yellow-400">
                        <h2>${issue.labels[1]}</h2>
                    </div>
                </div>
            </div>
            <div class="p-2 border-t-2 border-gray-400">
                <p class="text-gray-400">${issue.author}</p>
                <p class="text-gray-400">${issue.createdAt}</p>
            </div>
        </div>
        `
        issueContainer.appendChild(issueCard)
        addBorder(issue, issueCard)
    });
}

const loadOpenIssue = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
        .then(res => res.json())
        .then(jsonData => {
            displayOpenIssue(jsonData.data)
            openIssueCounter();
        })
}
const displayOpenIssue = (allIssues) => {
    const openContainer = document.getElementById("open-container")
    openContainer.classList.remove("hidden")
    const issueContainer = document.getElementById("issue-container")
    issueContainer.classList.add("hidden")
    const closedContainer = document.getElementById("closed-container")
    closedContainer.classList.add("hidden")

    // const openContainer = document.getElementById("open-container")
    openContainer.innerHTML = ""
    const openIssues = allIssues.filter(issue => issue.status == 'open')
    // console.log(openIssues)
    openIssues.forEach(issue => {
        // console.log(issue)
        const issueCard = document.createElement("div")
        issueCard.innerHTML = `
        <div class="bg-base-100 p-6 rounded-lg space-y-5 w-full h-full border-t-4 border-green-500 issue-apu">
            <div class="flex justify-between items-center">
                <div>
                    <img src="./assets/Open-Status.png" alt="" class="w-10 h-10">
                </div>
                <div class="text-red-400 bg-red-100 text-center rounded-3xl px-6 py-1 flex justify-center items-center">
                    <h2>${issue.priority}</h2>
                </div>
            </div>
            <div class="space-y-5">
                <h2 class="text-xl font-bold">${issue.title}</h2>
                <p class="text-gray-400">${issue.description}</p>
                <div class="flex items-center gap-2">
                    <div class="text-red-400 bg-red-100 text-center rounded-3xl px-6 py-1 flex justify-center items-center border border-red-400">
                        <h2>${issue.labels[0]}</h2>
                    </div>
                    <div class="text-yellow-600 bg-yellow-100 text-center rounded-3xl px-6 py-1 flex justify-center items-center border border-yellow-400">
                        <h2>${issue.labels[1]}</h2>
                    </div>
                </div>
            </div>
            <div class="p-2 border-t-2 border-gray-400">
                <p class="text-gray-400">${issue.author}</p>
                <p class="text-gray-400">${issue.createdAt}</p>
            </div>
        </div>
        
        
        `
        openContainer.appendChild(issueCard)
        addBorder(issue, issueCard)
    });
}
const loadClosedIssue = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
        .then(res => res.json())
        .then(jsonData => {
            displayClosedIssue(jsonData.data)
            closedIssueCounter();
        })
}
const displayClosedIssue = (allIssues) => {
    const closedContainer = document.getElementById("closed-container")
    closedContainer.classList.remove("hidden")
    const issueContainer = document.getElementById("issue-container")
    issueContainer.classList.add("hidden")
    const openContainer = document.getElementById("open-container")
    openContainer.classList.add("hidden")

    // const closedContainer = document.getElementById("closed-container")
    closedContainer.innerHTML = ""
    const closedIssues = allIssues.filter(issue => issue.status == 'closed')
    console.log(closedIssues)
    closedIssues.forEach(issue => {
        // console.log(issue)
        const issueCard = document.createElement("div")
        issueCard.innerHTML = `
        <div class="bg-base-100 p-6 rounded-lg space-y-5 w-full h-full border-t-4 border-green-500 issue-apu">
            <div class="flex justify-between items-center">
                <div>
                    <img src="./assets/Closed- Status .png" alt="" class="w-10 h-10">
                </div>
                <div class="text-red-400 bg-red-100 text-center rounded-3xl px-6 py-1 flex justify-center items-center">
                    <h2>${issue.priority}</h2>
                </div>
            </div>
            <div class="space-y-5">
                <h2 class="text-xl font-bold">${issue.title}</h2>
                <p class="text-gray-400">${issue.description}</p>
                <div class="flex items-center gap-2">
                    <div class="text-red-400 bg-red-100 text-center rounded-3xl px-6 py-1 flex justify-center items-center border border-red-400">
                        <h2>${issue.labels[0]}</h2>
                    </div>
                    <div class="text-yellow-600 bg-yellow-100 text-center rounded-3xl px-6 py-1 flex justify-center items-center border border-yellow-400">
                        <h2>${issue.labels[1]}</h2>
                    </div>
                </div>
            </div>
            <div class="p-2 border-t-2 border-gray-400">
                <p class="text-gray-400">${issue.author}</p>
                <p class="text-gray-400">${issue.createdAt}</p>
            </div>
        </div>
        
        
        `
        closedContainer.appendChild(issueCard)
        addBorder(issue, issueCard)
    });
}


const buttonSetUp = () => {
    const btnDiv = document.getElementById("btn-section")
    btnDiv.addEventListener("click", (event) => {
        buttonAddSoft()
        const btn = event.target
        btn.classList.remove("btn-soft")
    })
}
buttonSetUp()
const buttonAddSoft = () => {
    const othersBtn = document.querySelectorAll(".all-button")
    othersBtn.forEach(btn => {
        btn.classList.add("btn-soft")
    });
}



loadAllIssue();


const issueCounter = () => {
    const issueContainer = document.getElementById("issue-container")
    document.getElementById("counter-issue").innerText = issueContainer.children.length
}
const openIssueCounter = () => {
    const openContainer = document.getElementById("open-container")
    document.getElementById("counter-issue").innerText = openContainer.children.length
}
const closedIssueCounter = () => {
    const closedContainer = document.getElementById("closed-container")
    document.getElementById("counter-issue").innerText = closedContainer.children.length
}

const addBorder = (issue, issueCard) => {
    const status = issue.status
    const card = issueCard.querySelector(".issue-apu")
    // console.log(status)
    if (status == "closed") {
        card.classList.remove("border-green-500")
        card.classList.add("border-purple-500")
    }
}
