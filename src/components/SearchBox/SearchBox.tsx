"use client"; // This is a client component

import { ActionMeta } from 'react-select';
import AsyncSelect from 'react-select/async';
import debounce from "lodash/debounce";
import { useState, useContext, useId } from 'react';
import { getGamesFromIgdb } from './../../lib/igdbFunctions';
import { SelectedGameContext } from "./../../lib/contexts";
import { Game } from "./../../lib/types";
import { useRouter } from 'next/navigation'

type Option = {label: string, value: string}

interface props {
  id?: string,
  options?: Option[],
  onChange?: any,
  selectedGame: Game,
}

const getOptions = (
  inputValue: string,
  callback: (options: Option[]) => void
) => {
  getGamesFromIgdb(inputValue).then(
    data => callback(data.map(
      ({ name, ...data }) => (
        { label: name, value: JSON.stringify({ name, ...data }) })))
  )      
}

export default function SearchBox(props: props) {
  const [selectedOption, setSelectedOption] = useState<Option|null>(null);
  const { id, options, selectedGame } = props;
  const router = useRouter()

  const handleChange = (option: Option | null, actionMeta: ActionMeta<Option>) => {
    if (option) {
      const game = JSON.parse(option.value)
      router.push(`/game/${game.id}`)
    }
  }

  const loadOptions = debounce(getOptions, 300);

  if (selectedGame && !selectedOption) {
    setSelectedOption({
      label: selectedGame["name"],
      value: JSON.stringify(selectedGame)
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
