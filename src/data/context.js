/**
 * WordPress dependencies.
 */
import { useState, useEffect, createContext } from '@wordpress/element';
import { useList } from "@uidotdev/usehooks";

/**
 * Context Component.
 */
export const BlueprintContext = createContext();

const BlueprintProvider = ({ children }) => {
	const defaultBlueprint = {
		$schema: "https://playground.wordpress.net/blueprint-schema.json",
		landingPage: "/wp-admin/",
		preferredVersions: {
			"php": "8.0",
			"wp": "latest"
		},
		landingPage: '/wp-admin/',
		preferredVersions: {
			php: '8.0',
			wp: 'latest',
		},
		steps: [
		],
	};
	const [blueprint, setBlueprint] = useState(defaultBlueprint);
	const [formData, setFormData] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [isConfirm, setIsConfirm] = useState(false);
	const [selectedItem, setItem] = useState({ title: '', form: null, data: null });
	const [steps, { set, push, removeAt, insertAt, updateAt, clear }] = useList(blueprint.steps);

	useEffect(() => {
		setBlueprint({ ...blueprint, steps: steps });
	}, [steps]);

	return (
		<BlueprintContext.Provider
			value={{
				blueprint,
				setBlueprint,
				formData,
				setFormData,
				isConfirm,
				setIsConfirm,
				isOpen,
				setIsOpen,
				selectedItem,
				setItem,
				steps,
				push,
				removeAt,
				updateAt
			}}
		>
			{children}
		</BlueprintContext.Provider>
	);
};

export default BlueprintProvider;