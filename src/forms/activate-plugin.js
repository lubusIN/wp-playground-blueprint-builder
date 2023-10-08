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
function ActivatePlugin() {
    const {
        selectedItem: { isEdit, data, formDefault },
        formData = isEdit ? data : formDefault,
        setFormData
    } = useContext(BlueprintContext);

    return (
        <>
            <TextControl
                label="Plugin Name"
                value={formData.pluginName}
                onChange={(value) => setFormData({ ...formData, pluginName: value })}
            />
            <TextControl
                label="Plugin Path"
                value={formData.pluginPath}
                onChange={(value) => setFormData({ ...formData, pluginPath: value })}
            />
        </>
    );
}

export default ActivatePlugin;