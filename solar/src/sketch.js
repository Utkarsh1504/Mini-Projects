// Ensure ThreeJS is in global scope for the 'examples/'
global.THREE = require("three");

// Include any additional ThreeJS examples below
require("three/examples/js/controls/OrbitControls");

const canvasSketch = require("canvas-sketch");
const { Mesh } = require("three");

const settings = {
  // Make the loop animated
  animate: true,
  // Get a WebGL canvas rather than 2D
  context: "webgl"
};

const sketch = ({ context }) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas
  });

  // WebGL background color
  renderer.setClearColor("#333", 1);

  // Setup a camera
  const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 100);
  camera.position.set(3, 3, -5);
  camera.lookAt(new THREE.Vector3());

  // Setup camera controller
  const controls = new THREE.OrbitControls(camera, context.canvas);

  // Setup your scene
  const scene = new THREE.Scene();

  // Setup a geometry
  const geometry = new THREE.SphereGeometry(1, 32, 16);
 
  //coding
  const loader = new THREE.TextureLoader();
  const sunTexture = loader.load("/images/sun.jpg")
  const mercuryTexture = loader.load("/images/mercury.jpg")
  const venusTexture =loader.load("/images/venus.jpg")
  const earthTexture = loader.load("/images/earth.jpg")
 // const moonTexture = loader.load("/images/moon.jpg")
  const marsTexture=loader.load("/images/mars.jpg")
  const jupiTexture=loader.load("/images/jupiter.jpg")
  const satTexture=loader.load("/images/saturn.jpg")
  const uraTexture=loader.load("/images/uranus.jpg")
  const nepTexture=loader.load("/images/neptune.jpg")
  

  // Setup a material
 
  const sunMaterial = new THREE.MeshBasicMaterial({
    map: sunTexture
  });
  const mercuryMaterial = new THREE.MeshBasicMaterial({
    map: mercuryTexture
  });

  const venusMaterial = new THREE.MeshBasicMaterial({
    map: venusTexture
  });
  const earthMaterial = new THREE.MeshBasicMaterial({
    map:earthTexture
  });
  // const moonMaterial = new THREE.MeshBasicMaterial({
  //   map:moonTexture
  // })
  const marsMaterial = new THREE.MeshBasicMaterial({
    map:marsTexture
  });
  const jupiMaterial = new THREE.MeshBasicMaterial({
    map:jupiTexture
  });
  const satMaterial = new THREE.MeshBasicMaterial({
    map:satTexture
  });
  const uraMaterial = new THREE.MeshBasicMaterial({
    map:uraTexture
  });
  const nepMaterial = new THREE.MeshBasicMaterial({
    map:nepTexture
  });

  // Setup a mesh with geometry + material
  const sunMesh = new THREE.Mesh(geometry, sunMaterial);
  scene.add(sunMesh);

  const mercuryGroup = new THREE.Group();
  const mercuryMesh = new THREE.Mesh(geometry, mercuryMaterial);
  mercuryMesh.position.set(1.3, 0.6, 0);
  mercuryMesh.scale.setScalar(0.20);
  //scene.add(mercuryMesh);
  mercuryGroup.add(mercuryMesh);

  scene.add(mercuryGroup);

  const venusGroup = new THREE.Group();
  const venusMesh = new THREE.Mesh(geometry, venusMaterial);
  venusMesh.position.set(1.8, 1, 0);
  venusMesh.scale.setScalar(0.20);
  //scene.add(venusMesh);
  venusGroup.add(venusMesh);

  scene.add(venusGroup);

  const earthGroup = new THREE.Group();
  const earthMesh = new THREE.Mesh(geometry, earthMaterial);
  earthMesh.position.set(2.1,1.3,0)
  earthMesh.scale.setScalar(0.30);
  //scene.add(earthMesh);
  earthGroup.add(earthMesh);

  scene.add(earthGroup);

  // const moonGroup = new THREE.Group();
  // const moonMesh = new THREE.Mesh(geometry, moonMaterial);
  // moonMesh.position.set(1.5, 1, 0);
  // moonMesh.scale.setScalar(0.10);
  // moonGroup.add(moonMesh);

  // scene.add(moonGroup);

 const marsGroup = new THREE.Group();
  const marsMesh = new THREE.Mesh(geometry, marsMaterial);
  marsMesh.position.set(2.7,1.7,0)
  marsMesh.scale.setScalar(0.35);
  //scene.add(marsMesh);
  marsGroup.add(marsMesh);

  scene.add(marsGroup);

const jupiGroup = new THREE.Group();
  const jupiMesh = new THREE.Mesh(geometry, jupiMaterial);
  jupiMesh.position.set(3.5,2,0)
  jupiMesh.scale.setScalar(0.50);
  //scene.add(jupiMesh);
  jupiGroup.add(jupiMesh);

  scene.add(jupiGroup);
  
  const satGroup = new THREE.Group();
  const satMesh = new THREE.Mesh(geometry, satMaterial);
  satMesh.position.set(4,2.5,0)
  satMesh.scale.setScalar(0.43);
  //scene.add(satMesh);
  satGroup.add(satMesh);

  scene.add(satGroup);

  const uraGroup = new THREE.Group();
  const uraMesh = new THREE.Mesh(geometry, uraMaterial);
  uraMesh.position.set(4.5,3,0)
  uraMesh.scale.setScalar(0.40);
  //scene.add(uraMesh);
  uraGroup.add(uraMesh);

  scene.add(uraGroup);

  const nepGroup = new THREE.Group();
  const nepMesh = new THREE.Mesh(geometry, nepMaterial);
  nepMesh.position.set(5,3.5,0)
  nepMesh.scale.setScalar(0.37);
  //scene.add(nepMesh);
  nepGroup.add(nepMesh);

  scene.add(nepGroup);

  // draw each frame
  return {
    // Handle resize events here
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight, false);
      camera.aspect = viewportWidth / viewportHeight;
      camera.updateProjectionMatrix();
    },
    // Update & render your scene here
    render({ time }) {
      sunMesh.rotation.y=time*0.4
      mercuryMesh.rotation.y = time * 0.2;
      mercuryGroup.rotation.y = time * 0.3
      venusGroup.rotation.y = time * 0.27;
      earthMesh.rotation.y = time * 0.34;
      earthGroup.rotation.y = time * 0.35;
      //moonMesh.rotation.y = time * 0.08;
      //moonGroup.rotation.y = time * 0.17;
      marsMesh.rotation.y=time*0.32;
      marsGroup.rotation.y=time*0.27;
      jupiMesh.rotation.y=time*0.32;
      jupiGroup.rotation.y=time*0.25;
      satMesh.rotation.y=time*0.33;
      satGroup.rotation.y=time*0.27;
      uraMesh.rotation.y=time*0.35;
      uraGroup.rotation.y=time*0.29;
      nepMesh.rotation.y=time*0.37;
      nepGroup.rotation.y=time*0.31;

      controls.update();
      renderer.render(scene, camera);
    },
    // Dispose of events & renderer for cleaner hot-reloading
    unload() {
      controls.dispose();
      renderer.dispose();
    }
  };
};

canvasSketch(sketch, settings);
