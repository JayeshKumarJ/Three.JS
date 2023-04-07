import * as THREE from 'three';
import { Clock } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function main(){

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1,3,1);
const material = new THREE.MeshBasicMaterial( { color: 0xff0000,wireframe:true } );
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);
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
// orbit.update();


renderer.setSize(window.innerWidth,window.innerHeight);
renderer.render(scene,camera);

// const time = Date.now();
const clock = new THREE.Clock();

function animate() {
    orbit.update();

//     const currentTime=  Date.now();
//     const variation =currentTime-time;
	const elapsedTime =clock.getElapsedTime();
    
    requestAnimationFrame( animate );
    // cube.rotation.y  += elapsedTime ; 
                                                                                                                                                            
    // cube.position.y=Math.sin(elapsedTime);
    // cube.position.x=Math.cos(elapsedTime);

    
	renderer.render( scene, camera );
}
animate();

}
main();