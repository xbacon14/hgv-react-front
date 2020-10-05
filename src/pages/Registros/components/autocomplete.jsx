import React from 'react'
import { render } from 'react-dom'
import Downshift from 'downshift'
import ciudades from '../../../services/ciudades';

export default function AutoComplete() {
    return (
        <Downshift
            onChange={selection => alert(`You selected ${selection}`)}
            render={({
                getInputProps,
                getItemProps,
                getLabelProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem,
            }) => (
                    <div>
                        <label {...getLabelProps()}>Enter a fruit</label>
                        <input {...getInputProps()} />
                        {isOpen ? (
                            <div>
                                {ciudades
                                    .filter(i => !inputValue || i.includes(inputValue))
                                    .map((ciudades, index) => (
                                        <div
                                            {...getItemProps({
                                                key: ciudades,
                                                index,
                                                ciudades,
                                                style: {
                                                    backgroundColor: highlightedIndex === index
                                                        ? 'lightgray'
                                                        : 'white',
                                                    fontWeight: selectedItem === ciudades
                                                        ? 'bold'
                                                        : 'normal',
                                                },
                                            })}
                                        >
                                            {ciudades}
                                        </div>
                                    ))}
                            </div>
                        ) : null}
                    </div>
                )}
        />
    )
}
