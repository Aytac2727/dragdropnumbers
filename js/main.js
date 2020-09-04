let dragItem = document.querySelectorAll(".drag-item");
let dragDiv = document.getElementById("Drag");
let dropDiv = document.getElementById("Drop");

for (let i=0;i < dragItem.length;i++) {
    dragItem[i].addEventListener("dragstart", function(e){
        this.style = "background: grey;";
        e.dataTransfer.setData("dragId",this.id)
    })

    dragItem[i].addEventListener("dragend", function () {
        this.style ="background:green";
     })

     dragItem[i].addEventListener("dragleave", function () {
        this.style ="background:transparent";
     })
}

dropDiv.addEventListener("dragover", function (e) {
   e.preventDefault()
})

dropDiv.addEventListener("drop", function (e) {
    e.preventDefault();
   let draggedItemId = e.dataTransfer.getData("dragId");
   let draggedItem =  document.getElementById(draggedItemId);
    draggedItem.style.background = "Transparent";
    dropDiv.appendChild(draggedItem);
})