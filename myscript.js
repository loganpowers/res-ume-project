document.getElementById("addBtn").addEventListener("click", addText);

function addText(){
  var listItem = document.createElement("li");
  listItem.InnerText = document.getElementById("myInput").value;
  document.getElementById("myUl").appendChild(listItem);
  
  //delete button
  var deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.onclick=removeText;
  deleteButton.innerText = "x";
  listItem.appenedChild(deleteButton);
}

function removeText(){
  var listItem=this.parentNode;
  var ul=listItem.parentNode;
  ul.removeChild(listItem);
  
}
