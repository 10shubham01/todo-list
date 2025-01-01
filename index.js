const listConatiner = document.getElementById("listContainer");
const input = document.querySelector("input");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", addToList);

function addToList() {
    if (!input.value) {
        return window.alert('Input is empty!!')
    }

    const listItem = document.createElement("div");

  listItem.innerHTML = `
       <div class="bg-yellow-400 h-fit w-64 p-4 flex flex-col gap-y-2 items-end">
      <button class="text-sm bg-red-500 px-2 text-white" id="deleteButton">Delete</button>
      <div class="w-full">${input.value}</div>
    </div>
    `;

    listConatiner.append(listItem);
    input.value = '';
    const deleteButton = document.getElementById('deleteButton');
    deleteButton.addEventListener('click', function () {
        listItem.remove();
    })
}
