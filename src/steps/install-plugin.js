import {
    Button,
    TextControl,
    RadioControl,
    ToggleControl,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalNavigationMenu as NavigationMenu,
    __experimentalNavigationItem as NavigationItem,
} from '@wordpress/components';
import { addCard } from "@wordpress/icons";
import { useState } from '@wordpress/element';

function InstallPlugin() {
    const [resourceType, setResourceType] = useState('wordpress.org/plugins');
    const [activate, setActivate] = useState(true);

    const options = [
        { label: 'Url', value: 'url' },
        { label: 'Core Theme', value: 'wordpress.org/plugins' },
        { label: 'VFS', value: 'vfs' },
    ]
    return (
        <NavigationMenu
            menu="install-plugin-menu"
            parentMenu="root"
            title="Install Plugin"
        >
            <NavigationItem item="install-plugin" className='step-form'>
                <VStack spacing={4}>
                    <RadioControl
                        selected={resourceType}
                        label="Resource"
                        options={options}
                        onChange={setResourceType}
                    />

                    {resourceType == 'url' &&
                        <TextControl
                            label="Url"
                        />
                    }

                    {resourceType == 'wordpress.org/plugins' &&
                        <TextControl
                            label="Slug"
                        />
                    }

                    {resourceType == 'vfs' &&
                        <TextControl
                            label="Path"
                        />
                    }

                    <ToggleControl
                        label="Activate"
                        checked={activate}
                        onChange={setActivate}
                    />

                    <HStack>
                        <Button variant="primary" icon={addCard}>
                            Add
                        </Button>
                    </HStack>
                </VStack>
            </NavigationItem>
        </NavigationMenu>
    );
}

export default InstallPlugin;