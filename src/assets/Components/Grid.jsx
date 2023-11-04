function Grid ({ player, color, handleClick }) {

  const cellColor = color == 'pink' ? 'var(--light-blue)' : 'var(--light-grey)';
  const takenCell = color == 'pink' ? 'var(--darker-blue)' : 'var(--grey)';

  return (
  <div className='game-grid'>
    {
      player.board.boardArr.map((columnC, indexC) => {
        return (
          <div key={'column-'+ indexC}>
            {
              columnC.map((rowCell, indexR) => {
                return(
                  <div onClick={handleClick} data-x={indexC} data-y={indexR} style={{backgroundColor: rowCell == null || rowCell == 'miss' ? cellColor : takenCell}} className='game-cell' key={'row-' + indexR}>
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