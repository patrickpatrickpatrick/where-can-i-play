"use client"; // This is a client component

import { ActionMeta } from 'react-select';
import AsyncSelect from 'react-select/async';
import { useState, useContext, useId } from 'react';
import { getGamesFromIgdb } from './../../lib/igdbFunctions';
import { IgbdContext, SelectedGameContext } from "../../app/page";

type Option = {label: string, value: string}

interface props {
  id?: string,
  options?: Option[],
  onChange?: any,
}

export default function SearchBox(props: props) {
  const [selectedOption, setSelectedOption] = useState<Option|null>(null);
  const { clientId, accessToken } = useContext(IgbdContext);
  const { setSelectedGame } = useContext(SelectedGameContext);
  const { id, options } = props;

  const handleChange = (option: Option | null, actionMeta: ActionMeta<Option>) => {
    if (option) {
      setSelectedOption(option);
      setSelectedGame(option.value);
    }
  }

  const loadOptions = (
    inputValue: string,
    callback: (options: Option[]) => void
  ) => {
    return getGamesFromIgdb(accessToken, clientId, inputValue).then(
      data => data.map(({ name, id }) => ({ label: name, value: id }))
    )
  };  

	return (
    <AsyncSelect
      instanceId={useId()}
      isSearchable
      isClearable
      defaultValue={selectedOption}
      onChange={handleChange}
      defaultOptions={options}
      loadOptions={loadOptions}
    />    
	)
}

