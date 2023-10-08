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
 * Render Copy Form Component
 */
function Unzip() {
    const {
        selectedItem: { isEdit, data, formDefault },
        formData = isEdit ? data : formDefault,
        setFormData
    } = useContext(BlueprintContext);

    return (
        <>
            <TextControl
                label="Extract To Path"
                value={formData.extractToPath}
                onChange={(value) => setFormData({ ...formData, extractToPath: value })}
            />

            <TextControl
                label="Zip Path"
                value={formData.zipPath}
                onChange={(value) => setFormData({ ...formData, zipPath: value })}
            />
        </>
    );
}

export default Unzip;