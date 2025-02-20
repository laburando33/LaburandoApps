function showRoot(url, name, _filename) {
  const root = document.getElementById("root")
  root.innerHTML = "" // Clear previous content

  const a = document.createElement("a")
  a.href = url
  a.textContent = name
  a.target = "_blank" // Open in a new tab

  root.appendChild(a)
}

function handleFileSelect(evt) {
  const files = evt.target.files
  if (files && files[0]) {
    const reader = new FileReader()
    reader.onload = (e) => {
      const contents = e.target.result
      showRoot(contents, files[0].name, files[0].name)
    }
    reader.readAsText(files[0])
  }
}

document.getElementById("files").addEventListener("change", handleFileSelect, false)

