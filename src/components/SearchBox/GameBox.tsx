"use client"; // This is a client component

import { ActionMeta, components, OptionProps } from 'react-select';
import AsyncSelect from 'react-select/async';
import debounce from "lodash/debounce";
import { useState, useId, useEffect } from 'react';
import { getGamesFromIgdb } from './../../lib/igdbFunctions';
import { Game } from "./../../lib/types";
import Link from 'next/link';

type Option = {label: string, value: string}

interface props {
  id?: string,
  options?: Option[],
  onChange?: any,
  selectedGame?: Game,
}

const getOptions = (
  inputValue: string,
  callback: (options: Option[]) => void
) => {
  getGamesFromIgdb(inputValue).then(
    (data: Game[]) => callback(data.map(
      ({ name, ...data }) => (
        { label: name, value: JSON.stringify({ name, ...data }) })))
  )      
}

const CustomOption = (props: OptionProps<Option>) => {
  const { children, data: { value, label } } = props;
  const { id } = JSON.parse(value);

  return (<Link href={`/game/${id}`}>
    <components.Option {...props}>
      {children}
    </components.Option>
  </Link>)
}

export default function SearchBox(props: props) {
  const [selectedOption, setSelectedOption] = useState<Option|null>(null);
  const { id, options, selectedGame } = props;

  useEffect(() => {
    if (selectedGame && !selectedOption) {
      setSelectedOption({
        label: selectedGame.name,
        value: JSON.stringify(selectedGame)
      })
    }
  }, [])

  const loadOptions = debounce(getOptions, 300);

	return (
    <AsyncSelect
      styles={{
        dropdownIndicator: (baseStyles, state) => ({
          ...baseStyles,
          display: 'none', 
        })
      }}
      components={{
        Option: CustomOption
      }}
      instanceId={useId()}
      isSearchable
      menuIsOpen={true}
      isClearable
      placeholder={"Search for a game..."}
      defaultOptions={options}
      noOptionsMessage={({ inputValue }) => inputValue.length > 0 ? "No results" : null}
      loadOptions={loadOptions}
      value={selectedOption}
    />    
	)
}
