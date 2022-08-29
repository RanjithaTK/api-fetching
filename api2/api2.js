let api = "https://data.covid19india.org/data.json"
// let api = "https://data.covid19india.org/data.json"

function getData(api) {
  fetch(api)
    .then((res) => res.json()) //converted to object
    .then((res) => {
      console.log(res)
      let i = 1
      let tableData = ""
      res.statewise.map((values) => {
        tableData += `<tr>
        <th scope="row">${i}</th>
            <td>${values.state}</td>
            <td>${values.active}</td>
            <td>${values.confirmed}</td>
            <td>${values.recovered}</td>
          </tr>`
        i++
        if (values.recovered != 0) {
            document.getElementById("table_body").innerHTML = tableData
          }
      })

      
    })
    .catch((err) => console.log(err))
}
getData(api)
