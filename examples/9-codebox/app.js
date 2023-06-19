const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    const { data } = await axios.get("/api/9-codebox");
    const resourceItems = data.map((eachResourceItem) => {
      console.log(eachResourceItem);
    });
    result.innerHTML = `<h2>Success</h2>`;
  } catch (error) {
    result.innerHTML = `<h4>There was an error.</h4>`;
  }
};

fetchData();
