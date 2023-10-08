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
function ActivateTheme() {
    const {
        selectedItem: { isEdit, data, formDefault },
        formData = isEdit ? data : formDefault,
        setFormData
    } = useContext(BlueprintContext);

    return (
        <>
            <TextControl
                label="Theme Folder Name"
                value={formData.themeFolderName}
                onChange={(value) => setFormData({ ...formData, themeFolderName: value })}
            />
        </>
    );
}

export default ActivateTheme;