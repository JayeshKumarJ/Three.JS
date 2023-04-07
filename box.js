import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function main(){

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(0.1,2,1);
const geometry1 = new THREE.CircleGeometry( 1, 32 );

const material = new THREE.MeshBasicMaterial( { color: 0x44aa88 } );
const circle = new THREE.Mesh( geometry1, material );
// const cube = new THREE.Mesh( geometry, material );
// circle.rotation.x = 1;

circle.position.x=0;
circle.position.y =2.5
scene.add( circle );

const camera =new THREE.PerspectiveCamera(75,window.innerHeight/window.innerWidth,0.1,5);
scene.add(camera)

camera.position.z = 5;
camera.position.x = 0;
camera.position.y = 0;

const canvas= document.querySelector('.webgl');
const renderer=new THREE.WebGL1Renderer({
	canvas:canvas
})
const orbit = new OrbitControls(camera, canvas);
orbit.enableDamping = true;
orbit.update();

{
	const color = 0xffffff;
	const intensity = 5;
	const light = new THREE.DirectionalLight(color, intensity);
	light.position.set(-1, 2, 4);
	scene.add(light);
}

renderer.setSize(window.innerWidth,window.innerHeight);
renderer.render(scene,camera);

const cubes = [
    makeInstance(geometry, 0x44aa88,  0),
    makeInstance(geometry, 0x8844aa, -1.25),
    makeInstance(geometry, 0xaa8844,  1.25),
  ];
function animate() {
	requestAnimationFrame( animate );
    cubes.forEach((cube, ndx) => {
		// cube.rotation.x += 0.01;
		// cube.rotation.z += 0.01;
		cube.rotation.y += 0.01;

	});
	renderer.render( scene, camera );
}
animate();

function makeInstance(geometry, color, x) {
	const material = new THREE.MeshPhongMaterial({color});
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
   
	cube.position.x = x;
	// cube.position.x = 0;
	cube.scale.set(4,0.6,0.5);

   
	return cube;
  }
}
main();