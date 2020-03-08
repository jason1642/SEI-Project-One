// const DOMAIN = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=";
// const api_key = "F54QHYGAERM0R1CB";

// const inputSubmit = document.querySelector("#search-submit");
// const stockSearch = document.querySelector("#stock-search-input");
// const polarDiv1 = document.querySelector("#polar-div-one");
// inputSubmit.addEventListener("click", async () => {
//   const response = await axios.get(
//     `${DOMAIN}${stockSearch.value}&interval=5min&apikey=${api_key}`)
//   polarDiv1.innerHTML = ``
//   debugger;

//   console.log(response.data.MetaData.Information);
// });

const DOMAIN = "https://financialmodelingprep.com/api/v3/company/profile/";
const inputSubmit = document.querySelector("#search-submit");
const stockSearch = document.querySelector("#stock-search-input");
const polarDiv1 = document.querySelector("#polar-div-one");
const polarDiv2 = document.querySelector("#polar-div-two");
const polarDiv3 = document.querySelector("#polar-div-three");
const polarDiv4 = document.querySelector("#polar-div-four");
inputSubmit.addEventListener("click", async () => {
  const response = await axios.get(`${DOMAIN}${stockSearch.value}`);
  debugger;
  console.log(response.data)
  polarDiv1.innerHTML = `<img src='${response.data.profile.image}'>`
  polarDiv2.innerHTML = `<h1>${response.data.profile.companyName}
  <p>${response.data.profile.price}</p>`
  polarDiv3.innerHTML = `
  <h2>52 Week Range</h2>
  <p>${response.data.profile.range}</p>`
  polarDiv4.innerHTML = `<h3>Description</h3>
  <p>${response.data.profile.description}</p>`
})