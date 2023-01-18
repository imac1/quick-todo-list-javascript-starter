
// 1. add a task and clear the input fields

document.getElementById("addButton").addEventListener("click", function () {
	let inputValue = document.getElementById("new").value;
	if (inputValue != "") {
		let newTask = document.createElement("div");
		newTask.innerHTML =
			"<span>" +
			inputValue +
			"</span>" +
			"<button class='toggleStatus'>not done</button>";
		document.getElementById("list").appendChild(newTask);
		// clear the input field
		document.getElementById("new").value = "";
	}
});

// 2. toggle the status of a task