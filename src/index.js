import { createRoot, render } from '@wordpress/element';
import '@wordpress/components/build-style/style.css';
import App from './app';
import './app.css';

const root = document.getElementById( 'root' );

if ( createRoot ) {
    createRoot( root ).render( <App/> );
} else {
    render( <App/>, root );
}