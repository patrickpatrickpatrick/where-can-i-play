import LocationPicker from './../../../components/LocationPicker/LocationPicker';

const GamePage = (
  { params }: { params: { gameId: string }}) => <LocationPicker gameId={params.gameId} />

export default GamePage; 
