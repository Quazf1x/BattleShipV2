function PlayerCard({ player, color }) {

  const backgroundColor = color == 'pink' ? '#e7004c' : '#66708a';

  return (
    <div className='player-card'>
      <h2 style={{backgroundColor: backgroundColor}}>
        {player.name}
      </h2>
      hui
    </div>
  )
}

export default PlayerCard;