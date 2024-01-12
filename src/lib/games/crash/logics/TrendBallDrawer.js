export default class TrendBallDrawer {
  constructor() {
    // Initialize the number of rows and columns to 0
    this.row = 0;
    this.col = 0;
  }

  // Method to compute the space matrix
  computeSpaceMatrix(data) {
    // Create a new array filled with nulls
    let matrix = new Array(this.row * this.col).fill(null);

    // Iterate over the data
    for (let i = 0; i < data.length; i++) {
      let row = data[i];

      for (let j = 0; j < row.length; j++) {
        let cell = row[j];
        let nextCell = null;
        let prevCell = null;

        if (j === 0) {
          nextCell = matrix[this.indexOfMatrix(i, j + 1)];
          if (nextCell || i === this.col - 1) {
            return this.computeSpaceMatrix(data.slice(1));
          }
          cell.vector = [j, i];
          cell.direction = 0;
        } else {
          let prevCell = row[j - 1];
          let [x, y] = prevCell.vector.slice();

          if (prevCell.direction === 0 && x + 1 < this.row) {
            let currentCell = matrix[this.indexOfMatrix(y, x + 1)];

            if (x + 2 < this.row) {
              nextCell = matrix[this.indexOfMatrix(y, x + 2)];
            }

            if (y > 0) {
              prevCell = matrix[this.indexOfMatrix(y - 1, x + 1)];
            }

            if (nextCell && nextCell.value === cell.value) {
              if (x === 0) return this.computeSpaceMatrix(data.slice(1));
              y++;
              cell.direction = 1;
            } else {
              (prevCell && prevCell.value === cell.value) || currentCell
                ? (y++, (cell.direction = 1))
                : (x++, (cell.direction = 0));
            }
          } else {
            y++;
            cell.direction = 1;
          }

          if (y === this.col - 1) {
            if (i === 0) data[0].shift();
            else data = data.slice(1);
            return this.computeSpaceMatrix(data);
          }

          cell.vector = [x, y];
        }

        matrix[this.indexOfMatrix(cell.vector[1], cell.vector[0])] = cell;
      }
    }

    return matrix.map((cell) => (cell ? cell.value : 0));
  }

  // Method to get the index of a cell in the matrix
  indexOfMatrix(row, col) {
    return row + col * this.col;
  }

  // Method to get the trend balls
  getTrendBalls(data) {
    let trendBalls = [];

    for (let i = 0; i < data.length; i++) {
      let trendBall = { vector: [-1, -1], value: data[i], direction: 0 };
      this.isEqual(data[i], data[i - 1])
        ? trendBalls[trendBalls.length - 1].push(trendBall)
        : trendBalls.push([trendBall]);
    }

    return trendBalls;
  }

  // Method to check if two values are equal
  isEqual(value1, value2) {
    return (value1 < 2 && value2 < 2) || (value1 >= 2 && value2 >= 2);
  }

  // Method to render the graph
  render(data, row = this.row, col = this.col) {
    this.row = row;
    this.col = col;
    return this.computeSpaceMatrix(this.getTrendBalls(data));
  }
}
