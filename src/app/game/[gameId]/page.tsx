import LocationPicker from './../../../components/LocationPicker/LocationPicker';

export default (
  { params, searchParams }: { params: { gameId: string }, searchParams: any }) => {

  return <LocationPicker gameId={params.gameId} arcadeId={searchParams.arcadeId} />
}
