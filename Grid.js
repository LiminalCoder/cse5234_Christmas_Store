class Grid {
   constructor (
      colNum,
      rowNum,
      cards,
      verticalMargin,
      gridBordersVisible
   ) {
      this.numberOfColumns = colNum;
      this.numberOfRows = rowNum;
      this.gridCards = cards;
      this.gridYMargins = verticalMargin;
      this.gridBordersVisible = gridBordersVisible;
   }
}

export default Grid;