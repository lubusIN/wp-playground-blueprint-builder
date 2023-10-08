/**
 * WordPress Dependencies
 */
import { useContext } from '@wordpress/element';
import { TextControl } from '@wordpress/components';

/**
 * Internal Dependencies
 */
import { BlueprintContext } from "../data";

/**
 * Render Write File Form Component
 */
function WriteFile() {
    const {
        selectedItem: { isEdit, data, formDefault },
        formData = isEdit ? data : formDefault,
        setFormData
    } = useContext(BlueprintContext);

    return (
        <>
            <TextControl
                label="Path"
                value={formData.path}
                onChange={(value) => setFormData({ ...formData, path: value })}
            />

            <TextControl
                label="Data"
                value={formData.data}
                onChange={(value) => setFormData({ ...formData, data: value })}
            />
        </>
    );
}

export default WriteFile;