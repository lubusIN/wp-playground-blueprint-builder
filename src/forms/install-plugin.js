/**
 * WordPress Dependencies
 */
import { useContext } from '@wordpress/element';
import {
    TextControl,
    RadioControl,
    ToggleControl,
    __experimentalVStack as VStack,
} from '@wordpress/components';

/**
 * Internal Dependencies
 */
import { BlueprintContext } from "../data";

/**
 * Export Install Plugin Form Component
 */
function InstallPlugin() {
    const {
        selectedItem: { isEdit, data, formDefault },
        formData = isEdit ? data : formDefault,
        setFormData
    } = useContext(BlueprintContext);

    const resource = formData?.pluginZipFile?.resource;

    const options = [
        { label: 'Url', value: 'url' },
        { label: 'Core Plugin', value: 'wordpress.org/plugins' },
        { label: 'VFS', value: 'vfs' },
    ]

    return (
        <VStack spacing={4}>
            <RadioControl
                selected={resource}
                label="Resource"
                options={options}
                onChange={(resource) => {
                    setFormData({
                        ...formData,
                        pluginZipFile: {
                            ...formData.pluginZipFile,
                            resource
                        }
                    })
                }}
            />

            {resource == 'url' &&
                <TextControl
                    label="Url"
                    value={formData.pluginZipFile.url}
                    onChange={(url) => {
                        setFormData({
                            ...formData,
                            pluginZipFile: {
                                resource,
                                url
                            }
                        })
                    }}
                />
            }

            {resource == 'wordpress.org/plugins' &&
                <TextControl
                    label="Slug"
                    value={formData.pluginZipFile.slug}
                    onChange={(slug) => {
                        setFormData({
                            ...formData,
                            pluginZipFile: {
                                resource,
                                slug
                            }
                        })
                    }}
                />
            }

            {resource == 'vfs' &&
                <TextControl
                    label="Path"
                    value={formData.pluginZipFile.path}
                    onChange={(path) => {
                        setFormData({
                            ...formData,
                            pluginZipFile: {
                                resource,
                                path
                            }
                        })
                    }}
                />
            }

            <ToggleControl
                label="Activate"
                checked={formData.options.activate}
                onChange={(activate) => {
                    setFormData({
                        ...formData,
                        options: {
                            ...formData.pluginZipFile.options,
                            activate
                        }
                    })
                }}
            />
        </VStack>
    );
}

export default InstallPlugin;