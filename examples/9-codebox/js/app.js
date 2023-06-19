// Global settings
const pageCategory = document.querySelector("article");
const currentPage = pageCategory.id;
const article = document.querySelector("article");

// Import the JSON data

// Dispaly current page title
let pageTitle = document.createElement("h1");

let message;
switch (currentPage) {
  case "design":
    message = "Design It";
    break;
  case "build":
    message = "Build It";
    break;
  case "scale":
    message = "Scale It";
    break;
  case "protect":
    message = "Protect It";
    break;
  default:
    message = "Opps, There was an error.";
}

pageTitle.textContent = message;
article.appendChild(pageTitle);

// Sort the JSON data to find the matching category of the page you are on
// 1. use the currenPage value to filter the data.json objects
// 2. console.log the resutls and change the article id on the DOM to see if the filter really works.

// IMPORT JSON DATA

// Return the content based on filtered results
// 1. return the following

{
  /* 
  <div class="col">
    <div class="card">
        <img src="build/img-1.jpg" class="card-img-top img-fluid" alt="ALT">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text"><strong>Description: </strong>Conduct UX research for free on this
                website.</p>
        </div>
        <div class="card-footer">
            <div class="row">
                <div class="col align-self-start"> <small class="text-body-secondary"><a href="#"
                            target="_blank">URL</a></small></div>
                <div class="col-auto"> <small class="text-body-secondary"><a href="#"
                            target="_blank">TAG</a></small></div>
            </div>
        </div>
    </div>
</div> 
                    */
  // final results
  /* 
  data needed:
  imageUrl = currentPage(this is the image folder) + image(in loop)
  imageTitle = name of the website or service
  imageDescription = the text details and the alt text details
imageLink = the actual website
  imageWebsite = the text name of the website (google.com)
imageCategory = (or tag) this is the currentPage value

  //<div class="col">
    <div class="card">
        <img src="${imageUrl}" class="card-img-top img-fluid" alt="${imageDescription}">
        <div class="card-body">
            <h5 class="card-title">${imageTitle}</h5>
            <p class="card-text"><strong>Description: </strong>${imageDescription}</p>
        </div>
        <div class="card-footer">
            <div class="row">
                <div class="col align-self-start"> <small class="text-body-secondary"><a href="${imageLink}"
                            target="_blank">${imageWebsite}</a></small></div>
                <div class="col-auto"> <small class="text-body-secondary"><a href="#"
                            target="_blank">${imageCategory}</a></small></div>
            </div>
        </div>
    </div>
</div> 
                    */
}
