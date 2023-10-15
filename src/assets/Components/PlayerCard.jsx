function PlayerCard({ player, color }) {

  const backgroundColor = color == 'pink' ? 'var(--bright-pink)' : 'var(--dark-grey)';
  const cellColor = color == 'pink' ? 'var(--light-blue)' : 'var(--light-grey)';

  let field = 
  <div className='game-grid'>
    {
      player.board.boardArr.map((column, indexC) => {
        return (
          <div key={'column-'+ indexC}>
            {
              column.map((rowCell, indexR) => {
                return(
                  <div style={{backgroundColor:cellColor}} className='game-cell' key={'row-' + indexR}>
                  </div>
                )
              })
            }
          </div>
        )
      })
    }
  </div>;

  return (
    <div className='player-card'>
      <h2 style={{backgroundColor: backgroundColor}}>
        {player.name}
      </h2>
      {field}
    </div>
  )
}

export default PlayerCard;