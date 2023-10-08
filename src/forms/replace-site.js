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
 * Render Replace Site Form Component
 */
function ReplaceSite() {
    const {
        selectedItem: { isEdit, data, formDefault },
        formData = isEdit ? data : formDefault,
        setFormData
    } = useContext(BlueprintContext);

    return (
        <>
            <TextControl
                label="Full Site Zip"
                value={formData.fullSiteZip}
                onChange={(value) => setFormData({ ...formData, fullSiteZip: value })}
            />
        </>
    );
}

export default ReplaceSite;