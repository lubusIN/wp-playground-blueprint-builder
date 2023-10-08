/**
 * WordPress Dependencies
 */
import { useContext } from '@wordpress/element';
import { TextareaControl } from '@wordpress/components';

/**
 * Internal Dependencies
 */
import { BlueprintContext } from "../data";

/**
 * Render Run Php Form Component
 */
function RunPhp() {
    const {
        selectedItem: { isEdit, data, formDefault },
        formData = isEdit ? data : formDefault,
        setFormData
    } = useContext(BlueprintContext);

    return (
        <>
            <TextareaControl
                label="Code"
                value={formData.code}
                onChange={(value) => setFormData({ ...formData, code: value })}
            />
        </>
    );
}

export default RunPhp;