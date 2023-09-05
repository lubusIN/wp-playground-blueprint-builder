/**
 * WordPress Dependencies
 */
import { createRoot, render } from '@wordpress/element';
import '@wordpress/components/build-style/style.css';

/**
 * Internal Dependencies
 */
import App from './app';
import './app.css';

/**
 * Render App Root
 */
const root = document.getElementById( 'root' );

if ( createRoot ) {
    createRoot( root ).render( <App/> );
} else {
    render( <App/>, root );
}