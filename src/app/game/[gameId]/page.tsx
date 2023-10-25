import LocationPicker from './../../../components/LocationPicker/LocationPicker';

const GamePage = (
  { params, searchParams }: { params: { gameId: string }, searchParams: any }) => <LocationPicker
    gameId={params.gameId} arcadeId={searchParams.arcadeId} />

export default GamePage; 
