import { useContext } from '@wordpress/element';

import {
    Button,
    __experimentalItem as Item,
    __experimentalView as View,
    __experimentalHStack as HStack,
} from '@wordpress/components';
import { edit, closeSmall } from "@wordpress/icons"

import { BlueprintContext } from "../data";

function ListItem({data, index}) {
    const { 
        setItem,
        setIsConfirm,
    } = useContext(BlueprintContext);

    return (
        <Item>
            <HStack>
                <View>{data.step}</View>
                <HStack alignment='right' expanded={false}>
                    <Button icon={edit} size="compact" />
                    <Button
                        icon={closeSmall}
                        size="compact"
                        onClick={() => {
                            setItem({
                                index
                            });
                            setIsConfirm(true);
                        }}
                    />
                </HStack>
            </HStack>
        </Item>
    );
}

export default ListItem;