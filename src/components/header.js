/**
 * WordPress Dependencies
 */
import { useState, useContext } from '@wordpress/element';
import {
    Modal,
    Button,
    ButtonGroup,
    TextControl,
    SelectControl,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from '@wordpress/components';
import { Icon, wordpress, copy, download, globe, settings } from "@wordpress/icons";

/**
 * Internal Dependencies
 */
import { phpVersions, wpVersions, BlueprintContext } from "../data";

/**
 * Render Header Component
 */
function Header() {
    const { blueprint, setBlueprint } = useContext( BlueprintContext );

    const [phpVersion, setPhpVersion] = useState(phpVersions[3].value);
    const [wpVersion, setWpVersion] = useState(wpVersions[0].value);
    const [Url, setUrl] = useState('/wp-admin/');

    const playgroundBase = "https://playground.wordpress.net/#";
    const blueprintString = JSON.stringify(blueprint);
    const playgroundWithBlueprint = playgroundBase + blueprintString;

    const blueprintData = new Blob([blueprintString], { type: 'text/html' });
    const blueprintDownload = URL.createObjectURL(blueprintData);

    const [isOpen, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => {
        blueprint.preferredVersions = {
            php: phpVersion,
            wp: wpVersion
        };
        blueprint.landingPage = Url;
        setBlueprint({...blueprint});
        setOpen(false);
    };

    return (
        <>
            <HStack justify='left' expanded={false}>
                <Icon size={36} icon={wordpress} />
                <Heading level={2}>Playground Blueprint</Heading>
            </HStack>

            <ButtonGroup>
                <HStack>
                    <Button variant="secondary" icon={globe} href={playgroundWithBlueprint} target='_new'>
                        Launch
                    </Button>
                    <Button
                        variant="secondary"
                        icon={copy}
                        onClick={() => { navigator.clipboard.writeText(blueprintString) }}>
                        Copy
                    </Button>
                    <Button
                        variant="secondary"
                        icon={download}
                        href={blueprintDownload}
                        download="playground-blueprint.json">
                        Download
                    </Button>
                    <Button variant="primary" onClick={openModal} icon={settings} label='Playground Settings' />
                </HStack>
            </ButtonGroup>

            {isOpen && (
                <Modal title="Settings" onRequestClose={closeModal}>
                    <SelectControl
                        label="Php"
                        options={phpVersions}
                        onChange={(selectedItem) => setPhpVersion(selectedItem)}
                        value={phpVersion}
                    />

                    <SelectControl
                        label="WP"
                        options={wpVersions}
                        onChange={(selectedItem) => setWpVersion(selectedItem)}
                        value={wpVersion}
                    />

                    <TextControl
                        label="Landing Url"
                        value={Url}
                        onChange={(value) => setUrl(value)}
                    />
                    <Button variant="primary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal>
            )}
        </>
    );
}

export default Header;