const urlFromLs = localStorage.getItem("apiUrl");

const fetchData = async () => {
  console.log(urlFromLs);
  if (urlFromLs) {
    const response = await fetch(`${urlFromLs}/users`);
    const data = await response.json();
    console.log(data);
  } else {
    window.location.href = "/api";
  }
};

const uploadFile = async () => {
  const inputTag = document.getElementById("fileUpload");
  const response = await fetch(`${urlFromLs}/upload`, {
    method: "POST",
    body: inputTag.files[0],
  });
};

fetchData();
