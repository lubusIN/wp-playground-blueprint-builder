import { useState } from '@wordpress/element';
import {
    Button,
    __experimentalHeading as Heading,
    __experimentalItemGroup as ItemGroup,
    __experimentalItem as Item,
    __experimentalView as View,
    __experimentalHStack as HStack,
    __experimentalConfirmDialog as ConfirmDialog
} from '@wordpress/components';
import { edit, closeSmall } from "@wordpress/icons"

function List() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <ItemGroup
                isBordered
                isRounded
                isSeparated
                size="large"
                style={{ marginTop: "10px" }}
            >
                <Item>
                    <HStack>
                        <View>login</View>
                        <HStack alignment='right' expanded={false}>
                            <Button icon={edit} size="compact" />
                            <Button
                                icon={closeSmall}
                                size="compact"
                                onClick={() => setOpen(true)}
                            />
                        </HStack>
                    </HStack>
                </Item>
                <Item>
                    <HStack>
                        <View>installPlugin</View>
                        <HStack alignment='right' expanded={false}>
                            <Button icon={edit} size="compact" />
                            <Button icon={closeSmall} size="compact" />
                        </HStack>
                    </HStack>
                </Item>
                <Item>
                    <HStack>
                        <View>installTheme</View>
                        <HStack alignment='right' expanded={false}>
                            <Button icon={edit} size="compact" />
                            <Button icon={closeSmall} size="compact" />
                        </HStack>
                    </HStack>
                </Item>
            </ItemGroup>

            <ConfirmDialog
                isOpen={isOpen}
                onConfirm={() => {
                    alert('Delete Confirmed!');
                    setOpen(false);
                }}
                onCancel={() => setOpen(false)}>
                <HStack>
                    <Heading level={4}>Would you like to Delete this step?</Heading>
                </HStack>
            </ConfirmDialog>
        </>
    );
}

export default List;