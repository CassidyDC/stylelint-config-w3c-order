// Checks if all properties in css-modules are included in the propertiesOrder array
import * as cssModules from '../css-modules/index.js';
import propertiesOrder from '../config.js';

const allProps = createFlatArray( cssModules );
const orderedProps = createFlatArray( propertiesOrder );

const missingProps = allProps.filter( ( value ) => ! orderedProps.includes( value ) );

function createFlatArray( obj ) {
	const flatArray = [];

	for ( const key in obj ) {
		const values = Object.values( obj[ key ] );
		flatArray.push( ...values );
	}
	return flatArray.flat( Infinity );
}

// eslint-disable-next-line no-console
console.log( 'Missing Props:', missingProps );
