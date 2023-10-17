"use client"; // This is a client component

import { ActionMeta } from 'react-select';
import AsyncSelect from 'react-select/async';
import debounce from "lodash/debounce";
import { useState, useContext, useId, useMemo } from 'react';
import { getGamesFromIgdb } from './../../lib/igdbFunctions';
import { SelectedGameContext } from "./../../lib/contexts";

type Option = {label: string, value: string}

interface props {
  id?: string,
  options?: Option[],
  onChange?: any,
}

const getOptions = (
  inputValue: string,
  callback: (options: Option[]) => void
) => {
  getGamesFromIgdb(inputValue).then(
    data => callback(data.map(({ name, ...data }) => ({ label: name, value: JSON.stringify({ name, ...data }) })))
  )      
}

export default function SearchBox(props: props) {
  const [selectedOption, setSelectedOption] = useState<Option|null>(null);
  const { setSelectedGame, selectedGame } = useContext(SelectedGameContext);
  const { id, options } = props;

  const handleChange = (option: Option | null, actionMeta: ActionMeta<Option>) => {
    if (option) {
      setSelectedOption(option);
      setSelectedGame(option.value);
    }
  }

  const loadOptions = debounce(getOptions, 300);

  if (selectedGame && !selectedOption) {
    setSelectedOption({
      label: JSON.parse(selectedGame)["name"],
      value: selectedGame
    })
  }

	return (
    <AsyncSelect
      styles={{
        dropdownIndicator: (baseStyles, state) => ({
          ...baseStyles,
          display: 'none', 
        })
      }}
      instanceId={useId()}
      isSearchable
      isClearable
      defaultValue={selectedOption}
      onChange={handleChange}
      defaultOptions={options}
      noOptionsMessage={(inputValue) => inputValue.length > 0 ? "No results" : null}
      loadOptions={loadOptions}
      value={selectedOption}
    />    
	)
}
