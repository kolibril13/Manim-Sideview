const vscode = acquireVsCodeApi();
container = document.getElementById("mObjects");

container.addEventListener("click", (event) => {
  if (event.target.className === "image-button") {
    vscode.postMessage({
      code: event.target.id,
    });
  }
});
