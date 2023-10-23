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
                  <div onClick={handleClick} data-x={indexC} data-y={indexR} style={{backgroundColor: rowCell == null ? cellColor : takenCell}} className='game-cell' key={'row-' + indexR}>
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