import Grid from "./Grid";

function PlayerCard({ player, color, handleClick }) {

  const backgroundColor = color == 'pink' ? 'var(--bright-pink)' : 'var(--dark-grey)';

  return (
    <div className='player-card'>
      <h2 style={{backgroundColor: backgroundColor}}>
        {player.name}
      </h2>
      <Grid player={player} color={color} handleClick={handleClick}/>
    </div>
  )
}

export default PlayerCard;