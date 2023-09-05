import { useContext } from '@wordpress/element';
import {
    __experimentalHeading as Heading,
    __experimentalItemGroup as ItemGroup,
    __experimentalHStack as HStack,
    __experimentalConfirmDialog as ConfirmDialog
} from '@wordpress/components';

import { BlueprintContext } from "../data";
import { ListItem } from '../steps';

function List() {
    const {
        blueprint,
        selectedItem,
        setItem,
        formData,
        setFormData,
        isConfirm,
        setIsConfirm,
        push,
        updateAt,
        removeAt
    } = useContext(BlueprintContext);
    return (
        <>
            <ItemGroup
                isBordered
                isRounded
                isSeparated
                size="large"
                style={{ marginTop: "10px" }}
            >
                {
                    blueprint.steps.map((item, index) => <ListItem data={item} index={index} key={index} />)
                }

            </ItemGroup>

            <ConfirmDialog
                isOpen={isConfirm}
                onConfirm={() => {
                    removeAt(selectedItem.index);
                    setIsConfirm(false);
                }}
                onCancel={() => setIsConfirm(false)}>
                <HStack>
                    <Heading level={4}>Would you like to Delete this step?</Heading>
                </HStack>
            </ConfirmDialog>
        </>
    );
}

export default List;