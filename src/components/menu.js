/**
 * WordPress Dependencies
 */
import { useContext, createElement } from '@wordpress/element';
import {
    Button,
    Modal,
    __experimentalNavigation as Navigation,
    __experimentalNavigationMenu as NavigationMenu,
    __experimentalNavigationItem as NavigationItem,
    __experimentalHStack as HStack
} from '@wordpress/components';

/**
 * Internal Dependencies
 */
import { BlueprintContext, forms, getForm } from "../data";

/**
 * Render Menu Component
 */
function Menu() {
    const {
        selectedItem,
        setItem,
        formData,
        setFormData,
        isOpen,
        setIsOpen,
        push,
        updateAt
    } = useContext(BlueprintContext);
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Navigation className="steps-navigation">
                <NavigationMenu title="Steps" hasSearch>
                    {Object.entries(forms).map((form, index) => {
                        const formKey = form[0]; // Form Key
                        const {title} = form[1]; // Form Data

                        return (
                            <NavigationItem
                                key={index}
                                title={title}
                                item={`item-${formKey}`}
                                onClick={() => {
                                    setItem(getForm(formKey));
                                    setIsOpen(true);
                                }}
                            />
                        )
                    })}
                </NavigationMenu>
            </Navigation>
            {isOpen && (
                <Modal title={selectedItem.title} onRequestClose={closeModal}>
                    {createElement(selectedItem.form)}

                    <HStack>
                        {
                            !selectedItem.data && (
                                <Button variant="primary" onClick={() => {
                                    push(formData);
                                    setIsOpen(false);
                                    setFormData(undefined);
                                }}>Add</Button>
                            )
                        }

                        {
                            !!selectedItem.data && (
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        updateAt(selectedItem.index, formData);
                                        setIsOpen(false);
                                    }}
                                >
                                    Update
                                </Button>
                            )
                        }
                        <Button onClick={closeModal}>Cancel</Button>
                    </HStack>

                </Modal>
            )}
        </>
    );
}

export default Menu;