const React = require('react');

const MockMapView = (props) => React.createElement(React.Fragment, null, props.children);

const MockMarker = (props) => React.createElement(React.Fragment, null, props.children);

const PROVIDER_GOOGLE = 'google';

module.exports = MockMapView;
module.exports.Marker = MockMarker;
module.exports.PROVIDER_GOOGLE = PROVIDER_GOOGLE;
