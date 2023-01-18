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

// get the list container
let list = document.getElementById("list");

// add an event listener to the list container
list.addEventListener("click", function (event) {
	// check if the event target is a toggleStatus button
	if (event.target.classList.contains("toggleStatus")) {
		// toggle the done class on the parent div
		event.target.parentElement.classList.toggle("done");

		// toggle the button text
		if (event.target.innerHTML === "done") {
			event.target.innerHTML = "not done";
		} else {
			event.target.innerHTML = "done";
		}
	}
});

// 3. Pressing the `Complete all` button will set all tasks to done


