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
 * Render Define Site Url Form Component
 */
function DefineSiteUrl() {
    const {
        selectedItem: { isEdit, data, formDefault },
        formData = isEdit ? data : formDefault,
        setFormData
    } = useContext(BlueprintContext);

    return (
        <>
            <TextControl
                label="Site Url"
                value={formData.siteUrl}
                onChange={(value) => setFormData({ ...formData, siteUrl: value })}
            />
        </>
    );
}

export default DefineSiteUrl;