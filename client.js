// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance } from 'react-360-web';
import { Location } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  // const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  // leftPanel.setAngle(-0.6, 0);
  // let rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  // rightPanel.setAngle(0.6, 0);
  // Render your app content to the default cylinder surface
  //const location = new Location([0, -1, 2]);
  r360.renderToSurface(
    r360.createRoot('vrproj', { /* initial props */ }),
    r360.getDefaultSurface()
  );
  r360.renderToSurface(
    r360.createRoot('vrproj2', { /* initial props */ }),
    r360.getDefaultSurface()
  );
  // r360.renderToSurface(
  //   r360.createRoot('objectsadder', { /* initial props */ }),
  //   r360.getDefaultSurface()
  // );
  r360.renderToLocation(
    r360.createRoot('objectsadder'),
    r360.getDefaultLocation()
  );
  r360.renderToLocation(
    r360.createRoot('greenplane'),
    r360.getDefaultLocation()
  )
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('ssh0lk9-360-panorama-lands-end.jpg'));
}

window.React360 = { init };
