/**
 * WordPress Dependencies
 */
import { useContext, useState, useEffect } from '@wordpress/element';
import {
    Button,
    ToggleControl,
    __experimentalInputControl as InputControl,
    __experimentalConfirmDialog as ConfirmDialog,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalText as Text,
} from '@wordpress/components';
import { plus, trash } from "@wordpress/icons";

/**
 * External Dependencies
 */
import { useList } from "@uidotdev/usehooks";

/**
 * Internal Dependencies
 */
import { BlueprintContext } from "../data";

/**
 * Render Define Config Conts Form Component
 */
function DefineConfigConsts() {
    const {
        selectedItem: { isEdit, data, formDefault },
        formData = isEdit ? data : formDefault,
        setFormData
    } = useContext(BlueprintContext);

    const [selectedConfigItem, setConfigItem] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [config, setConfig] = useState({ key: '', value: '' });
    const [consts, { set, push, removeAt, insertAt, updateAt, clear }] = useList(formData.consts);

    useEffect(() => {
        setFormData({
            ...formData,
            consts
        });
    }, [consts]);

    return (
        <>
            <ToggleControl
                label="Virtualize"
                checked={formData.virtualize}
                onChange={(virtualize) => {
                    setFormData({
                        ...formData,
                        virtualize
                    })
                }}
            />

            <VStack style={{ marginBottom: '10px' }}>
                <HStack alignment='bottom'>
                    <InputControl
                        label="Key"
                        value={config.key}
                        onChange={(value) => setConfig({
                            key: value,
                            value: config.value
                        })}
                    />
                    <InputControl
                        label="Value"
                        value={config.value}
                        onChange={(value) => setConfig({
                            key: config.key,
                            value: value
                        })}
                    />
                    <Button
                        icon={plus}
                        label="Add Config"
                        onClick={() => {
                            push(config);
                            setConfig({ [config.key]: config.value });
                        }}
                    />
                </HStack>

                {consts.map((item, index) => {
                    const { key, value } = item;
                    return (
                        <HStack key={index} alignment='bottom'>
                            <InputControl
                                label="Key"
                                value={key}
                                onChange={(value) => updateAt(index, { key: [value], value: consts[index].value })}
                            />
                            <InputControl
                                label="Value"
                                value={value}
                                onChange={(value) => updateAt(index, { key: [consts[index].key], value: value })}
                            />
                            <Button
                                isDestructive
                                icon={trash}
                                label="Delete Config"
                                onClick={() => {
                                    setConfigItem({
                                        index: index,
                                        data: item,
                                        msg: ' Would you like to delete this config item?'
                                    });
                                    setIsOpen(true);
                                }}
                            />
                        </HStack>
                    )
                })}
            </VStack>
            <ConfirmDialog
                isOpen={isOpen}
                onConfirm={() => {
                    removeAt(selectedConfigItem.index);
                    setIsOpen(false);
                }}
                onCancel={() => setIsOpen(false)}
            >
                {selectedConfigItem?.msg}
            </ConfirmDialog>
        </>
    );
}

export default DefineConfigConsts;