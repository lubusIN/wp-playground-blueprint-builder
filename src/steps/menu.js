import { useContext, createElement } from '@wordpress/element';
import {
    Button,
    Modal,
    __experimentalNavigation as Navigation,
    __experimentalNavigationMenu as NavigationMenu,
    __experimentalNavigationItem as NavigationItem,
    __experimentalHStack as HStack
} from '@wordpress/components';
 
import { BlueprintContext } from "../data";
import * as Forms from '../forms'

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
                    <NavigationItem
                        title="Login"
                        item="item-login"
                        onClick={() => {
                            setItem({
                                title: 'Login',
                                form: Forms.Login,
                                isEdit: false,
                                data: null
                            });
                            setIsOpen(true);
                        }}
                    />

                    <NavigationItem
                        title="Install Plugin"
                        item="item-install-plugin"
                        onClick={() => {
                            setItem({
                                title: 'Install Theme',
                                form: Forms.InstallPlugin,
                                data: null
                            });
                            setIsOpen(true);
                        }}
                    />

                    <NavigationItem
                        title="Install Theme"
                        item="item-install-theme"
                        onClick={() => {
                            setItem({
                                title: 'Install Theme',
                                form: Forms.InstallTheme,
                                data: null
                            });
                            setIsOpen(true);
                        }}
                    />
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
                                <Button variant="primary">Update</Button>
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