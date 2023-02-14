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
  const formData = new FormData();
  const filesArray = [...inputTag.files];
  filesArray.forEach((file) => formData.append("files", file));
  console.log(filesArray);
  const response = await fetch(`${urlFromLs}/upload`, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  console.log(data);
};

fetchData();
