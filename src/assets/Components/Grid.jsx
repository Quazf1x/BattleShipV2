function Grid ({ player, color }) {

  const cellColor = color == 'pink' ? 'var(--light-blue)' : 'var(--light-grey)';
  const takenCell = color == 'pink' ? 'var(--darker-blue)' : 'var(--grey)';

  return (
  <div className='game-grid'>
    {
      player.board.boardArr.map((column, indexC) => {
        return (
          <div key={'column-'+ indexC}>
            {
              column.map((rowCell, indexR) => {
                return(
                  <div style={{backgroundColor: rowCell == null ? cellColor : takenCell}} className='game-cell' key={'row-' + indexR}>
                  {/* <p>{rowCell && rowCell.index}</p> */}
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