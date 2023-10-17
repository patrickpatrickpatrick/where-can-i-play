import LocationPicker from './../../../components/LocationPicker/LocationPicker';

export default (
  { params, searchParams }: { params: { gameId: string }, searchParams: any }) =>
    <LocationPicker gameId={params.gameId} arcadeId={searchParams.arcadeId} />