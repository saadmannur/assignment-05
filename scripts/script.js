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
        issueCard.addEventListener("click", () => {
            loadCardDetails(issue.id)
        })
        issueContainer.appendChild(issueCard)
        addBorder(issue, issueCard)
    });
    issueCounter()
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
        issueCard.addEventListener("click", () => {
            loadCardDetails(issue.id)
        })
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
        issueCard.addEventListener("click", () => {
            loadCardDetails(issue.id)
        })
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

document.getElementById("search-btn").addEventListener("click", () => {
    const input = document.getElementById("search-input")
    const searchValue = input.value.trim().toLowerCase()
    
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
    .then(res => res.json())
    .then(data => {
        displayAllIssue(data.data)
        document.getElementById("counter-issue").innerText = data.total
    } )
})

loadAllIssue();

const loadCardDetails = async (id) => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    const res = await fetch(url)
    const cardDetails = await res.json()
    displayCardDetails(cardDetails.data)
}
const displayCardDetails = (details) => {
    const detailsContainer = document.getElementById("details-container") 
    detailsContainer.innerHTML = `
        <h2 class="font-bold text-xl">${details.title}</h2>
                <div class="flex items-center gap-3 ml-0">
                    <p class="btn-success btn rounded-4xl ">${details.status}</p>
                    <small>
                        <p class=" text-gray-500">Opened by ${details.author}</p>
                    </small>
                    <small>
                        <p class=" text-gray-500">${details.createdAt}</p>
                    </small>
                </div>
                <div class="flex items-center gap-2">
                    <div
                        class="text-red-400 bg-red-100 text-center rounded-3xl px-6 py-1 flex justify-center items-center border border-red-400">
                        <h2>${details.labels[0]}</h2>
                    </div>
                    <div
                        class="text-yellow-600 bg-yellow-100 text-center rounded-3xl px-6 py-1 flex justify-center items-center border border-yellow-400">
                        <h2>${details.labels[1]}</h2>
                    </div>
                </div>
                <p class="text-gray-500">${details.description}</p>
                <div class="bg-base-300 flex justify-between items-center rounded-xl p-6">
                    <div>
                        <h4 class="text-gray-500">assignee:</h4>
                        <h2 class="font-bold">${details.assignee}</h2>
                    </div>
                    <div>
                        <h4 class="text-gray-500">Priority:</h4>
                        <h2 class="btn btn-secondary rounded-4xl">${details.priority}</h2>
                    </div>
                
                </div>
    `
    document.getElementById("my_modal_5").showModal()

}