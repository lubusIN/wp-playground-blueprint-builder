/**
 * WordPress Dependencies
 */
import { useContext } from '@wordpress/element';
import {
    Button,
    __experimentalItem as Item,
    __experimentalView as View,
    __experimentalHStack as HStack,
} from '@wordpress/components';
import { edit, closeSmall } from "@wordpress/icons"

/**
 * Internal Dependencies
 */
import { BlueprintContext, getForm } from "../data";

/**
 * Render Step Component
 */
function Step({data, index}) {
    const {
        setItem,
        setIsConfirm,
        setIsOpen
    } = useContext(BlueprintContext);

    return (
        <Item>
            <HStack>
                <View>{data.step}</View>
                <HStack alignment='right' expanded={false}>
                    <Button 
                        icon={edit} 
                        size="compact"
                        onClick={() => {
                            setItem({
                                ...getForm(data.step),
                                index,
                                data,
                                isEdit: true
                            });
                            setIsOpen(true);
                        }}/>
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

export default Step;