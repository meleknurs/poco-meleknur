function project(pID, pName, pDetail, pLink) {
    this.pID = pID;
    this.pName = pName;
    this.pDetail = pDetail;
    this.pLink = pLink;
}

const detailsOfProject = [
    new project("project1", "My First Portfolio", "Some details about my first portfolio", "link1"),
    new project("project2", "Form", "Some explanation", "link2"),
    new project("project3", "Bootstrap", "Some details here", "link3")
];

function giveDetails(articleId) {
    const articleArea = document.getElementById(`details-container-${articleId}`);
    articleArea.innerHTML = "";

    detailsOfProject.forEach(function (element) {
        if (element.pID.toLowerCase() === articleId.toLowerCase()) {
            const ul = document.createElement("ul");

            const pNameItem = document.createElement("li");
            pNameItem.textContent = `${element.pName}`;
            ul.appendChild(pNameItem);

            const pDetailItem = document.createElement("li");
            pDetailItem.textContent = `${element.pDetail}`;
            ul.appendChild(pDetailItem);

            const linkItem = document.createElement("li");
            linkItem.textContent = `${element.pLink}`;
            ul.appendChild(linkItem);

            articleArea.appendChild(ul);
        }
    });
}

// Add event listeners for each article to control image visibility.
const articles = document.querySelectorAll('article');
articles.forEach(function (article) {
    const img = article.querySelector('img');
    article.addEventListener('mouseover', function () {
        img.style.display = 'none';
        giveDetails(article.id);
    });

    article.addEventListener('mouseleave', function () {
        img.style.display = 'block';
        const articleArea = document.getElementById(`details-container-${article.id}`);
        articleArea.innerHTML = '';
    });
});

