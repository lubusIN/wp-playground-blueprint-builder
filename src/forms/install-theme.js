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
 * Render Install Theme Form Component
 */
function InstallThemes() {
    const {
        selectedItem: { isEdit, data, formDefault },
        formData = isEdit ? data : formDefault,
        setFormData
    } = useContext(BlueprintContext);

    const resource = formData?.themeZipFile?.resource;

    const options = [
        { label: 'Url', value: 'url' },
        { label: 'Core Theme', value: 'wordpress.org/themes' },
        { label: 'VFS', value: 'vfs' },
    ];

    return (
        <VStack spacing={4}>
            <RadioControl
                selected={resource}
                label="Resource"
                options={options}
                onChange={(resource) => {
                    setFormData({
                        ...formData,
                        themeZipFile: {
                            ...formData.themeZipFile,
                            resource
                        }
                    })
                }}
            />

            {resource == 'url' &&
                <TextControl
                    label="Url"
                    value={formData.themeZipFile.url}
                    onChange={(url) => {
                        setFormData({
                            ...formData,
                            themeZipFile: {
                                resource,
                                url
                            }
                        })
                    }}
                />
            }

            {resource == 'wordpress.org/themes' &&
                <TextControl
                    label="Slug"
                    value={formData.themeZipFile.slug}
                    onChange={(slug) => {
                        setFormData({
                            ...formData,
                            themeZipFile: {
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
                    value={formData.themeZipFile.path}
                    onChange={(path) => {
                        setFormData({
                            ...formData,
                            themeZipFile: {
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
                            ...formData.themeZipFile.options,
                            activate
                        }
                    })
                }}
            />
        </VStack>
    );
}

export default InstallThemes;