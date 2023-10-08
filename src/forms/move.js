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
 * Render Activate Theme Form Component
 */
function Move() {
    const {
        selectedItem: { isEdit, data, formDefault },
        formData = isEdit ? data : formDefault,
        setFormData
    } = useContext(BlueprintContext);

    return (
        <>
            <TextControl
                label="From Path"
                value={formData.fromPath}
                onChange={(value) => setFormData({ ...formData, fromPath: value })}
            />

            <TextControl
                label="To Path"
                value={formData.toPath}
                onChange={(value) => setFormData({ ...formData, toPath: value })}
            />
        </>
    );
}

export default Move;