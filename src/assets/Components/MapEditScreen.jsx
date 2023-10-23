import Grid from "./Grid"

export default function MapEditScreen({ handlePlacement, player }) {
  return(
    <main className="map-edit-main">
      <h1>Place down your ships</h1>
      <div>
        <Grid handlePlacement={handlePlacement} player={player} color='pink'/>
        <button>Start Game</button>
        
      </div>
    </main>
  )
}