<!DOCTYPE html>
<html>
<head>
  <title>Multiplication Table Generator</title>
</head>
<body>
  <h1>Multiplication Table Generator</h1>
  <label for="number">Enter a number:</label>
  <input type="number" id="number">
  <label for="start">Start range:</label>
  <input type="number" id="start">
  <label for="end">End range:</label>
  <input type="number" id="end">
  <button onclick="generateTable()">Generate Table</button>
  <br>
  <table id="table"></table>

  <script>
    function range(start, end) {
      if (start === end) {
        return [start];
      } else if (start < end) {
        let numbers = range(start, end - 1);
        numbers.push(end);
        return numbers;
      } else {
        let numbers = range(start, end + 1);
        numbers.push(end);
        return numbers;
      }
    }

    function generateTable() {
      const numberInput = document.getElementById("number");
      const startInput = document.getElementById("start");
      const endInput = document.getElementById("end");
      const table = document.getElementById("table");

      // Clear any existing table rows
      table.innerHTML = "";

      // Generate table rows for the specified range
      const numbers = range(parseInt(startInput.value), parseInt(endInput.value));
      for (let i = 0; i < numbers.length; i++) {
        const row = document.createElement("tr");
        const multiplier = numbers[i];
        const result = numberInput.value * multiplier;

        const col1 = document.createElement("td");
        const col2 = document.createElement("td");
        col1.innerText = multiplier;
        col2.innerText = result;

        row.appendChild(col1);
        row.appendChild(col2);
        table.appendChild(row);
      }
    }
  </script>
</body>
</html>
