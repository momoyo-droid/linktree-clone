const linkButton = document.querySelectorAll(".icon");

linkButton.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const getLink = e.target.parentElement.getAttribute("href");
    navigator.clipboard.writeText(getLink)
      .then(() => {
        alert("Link has been copied to clipboard");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
        alert("Failed to copy link to clipboard");
      });
  });
});
