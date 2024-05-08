function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabela-estados");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

fetch("http://localhost:3000/estados")
.then(response => {
  return response.json();
})
.then (function(estados){
  let placeholder = document.querySelector("#data-output");
  let out = "";
  for(let estado of estados){
    out +=`
    <tr>
    <td>${estado.regiao.name}</td>
      <td>${estado.name}</td>
      
    </tr>  
      `;
  }

  placeholder.innerHTML = out
})
