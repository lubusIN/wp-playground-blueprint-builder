/**
 * WordPress dependencies.
 */
import { useState, useEffect, createContext } from '@wordpress/element';

/**
 * Context Component.
 */
export const BlueprintContext = createContext();

const BlueprintProvider = ( { children } ) => {
	// State Hook.

	// Side effect update data.
	useEffect( () => {

	}, [ ] );

	// Update settings to database.
	const saveData = () => {
		
	};

	// Render Provider.
	return (
		<BlueprintContext.Provider
			value={ {

			} }
		>
			{ children }
		</BlueprintContext.Provider>
	);
};

export default BlueprintProvider;