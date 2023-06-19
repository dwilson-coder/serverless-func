# Project Title

This is a free resource for new web developers.
4 categories

- Design It
- Develop It
- Scale It
- Protect It

How the app works.
The only part of the website that needs to be touched is the JSON file.

this is a serverless function Project
that uses node cli and netlify for ci/cd

create an illustration in Figma to show the architecture

- the netlify toml directs the app to the functions folder
- app checks the page's id and create the heading title
- imports the json data
- filters the data and returns the relevant objects to match the page you're on.
- Another option would have been to buld this as a single page app and render the data using hooks, but I wante to build this using vanialla javascript.

###### example

```json
  {
    title: "Title 1",
    category: "build",
    imageId: "image-1.jpg",
    url: "http://www.cnn.com",
    description: "this is a text description",
  },
```

The JavaScript function loops through the array and returns a div that contains 2 other divs.

## Main div

### card-div

#### card-front

- image (`${category}/${imageId}`)

possible solution when filtering the json data

- create a value with an empty array
- the "keyword" is the page id or category.
- filter through the json data and create an array and fill it with the object that match that keyword.
- this is most likely going to use async away to parse through the json
- loop through this new filtered array and (inside the loop) create an individual card that get's appended to the DOM
