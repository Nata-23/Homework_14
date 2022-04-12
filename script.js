"use strict";

const getUserTitle = async (companyName) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if (!response.ok) {
      throw response;
    }
    const data = await response.json();
    console.log("data", data);
    //
    let titleList = data.map((item) => item.title);
    console.log(titleList);
    //
    let elements = document.querySelector("#albums");
    console.log(elements);
    elements.append(...getListContent(titleList));
  } catch (responseError) {
    if (responseError.status === 404) {
      console.log("User is not found");
    } else {
      console.error(error);
    }
  }
};
getUserTitle();

function getListContent(titleList) {
  titleList.forEach(function (person) {
    let li = elements.createElement("li");
    ul.append(li);
    li.innerHTML = li.innerHTML + person;
  });
}
