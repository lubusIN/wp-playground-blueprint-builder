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
 * Render Activate Plugin Form Component
 */
function SetPhpIniEntry() {
    const {
        selectedItem: { isEdit, data, formDefault },
        formData = isEdit ? data : formDefault,
        setFormData
    } = useContext(BlueprintContext);

    return (
        <>
            <TextControl
                label="Key"
                value={formData.key}
                onChange={(value) => setFormData({ ...formData, key: value })}
            />
            <TextControl
                label="Value"
                value={formData.value}
                onChange={(value) => setFormData({ ...formData, value: value })}
            />
        </>
    );
}

export default SetPhpIniEntry;