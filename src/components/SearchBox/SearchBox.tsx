"use client"; // This is a client component

import { ActionMeta } from 'react-select';
import AsyncSelect from 'react-select/async';
import { useState, useContext } from 'react';
import { getGame } from './../../lib/igdbFunctions';
import { IgbdContext, SelectedGameContext } from "../../page";

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
    return getGame(accessToken, clientId, inputValue).then(
      data => data.map(({ name, id }) => ({ label: name, value: id }))
    )
  };  

	return (
    <AsyncSelect
      id={`search-box-${id}`}
      instanceId={`search-box-${id}`}
      isSearchable
      isClearable
      defaultValue={selectedOption}
      onChange={handleChange}
      defaultOptions={options}
      loadOptions={loadOptions}
    />    
	)
}

