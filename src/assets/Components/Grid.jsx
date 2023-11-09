function Grid ({ player, color, handleClick, isEnemy }) {

  const cellColor = color == 'pink' ? 'var(--light-blue)' : 'var(--light-grey)';
  const takenCell = isEnemy ? cellColor : color == 'pink' ? 'var(--darker-blue)' : 'var(--grey)';
  const sunkColor = 'var(--red)';

  const setCellColor = (rowCell) => {
    if(rowCell == null || rowCell == 'miss') {
      return cellColor;
    } 
    else if(rowCell.ship.isSunk) {
      return sunkColor;
    } 
    else {
      return takenCell;
    }
  }

  return (
  <div className='game-grid'>
    {
      player.board.boardArr.map((columnC, indexC) => {
        return (
          <div key={'column-'+ indexC}>
            {
              columnC.map((rowCell, indexR) => {
                return(
                  <div onClick={handleClick} data-x={indexC} data-y={indexR} style={{backgroundColor: setCellColor(rowCell)}} className='game-cell' key={'row-' + indexR}>
                    {
                    player.board.boardArr[indexC][indexR] == 'miss' ? 
                    'O' :
                    player.board.boardArr[indexC][indexR] == null || !player.board.boardArr[indexC][indexR].isHit ?
                    '' : 'X'
                  }
                  </div>
                )
              })
            }
          </div>
        )
      })
    }
  </div>
  )
}

export default Grid;