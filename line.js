import * as THREE from "three";

function main(){
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    const scene = new THREE.Scene();
    const canvas= document.querySelector('.webgl');
    const renderer = new THREE.WebGLRenderer({
        canvas:canvas

    });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set( 0, 0, 100 );
    camera.lookAt( 0, 0, 0 )

    const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
    const points = [];
    points.push( new THREE.Vector3( -10, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 10, 0 ) );
    points.push( new THREE.Vector3( 10, 0, 0 ) );
    points.push( new THREE.Vector3( 0, -10, 0 ) );  
    points.push( new THREE.Vector3( -10, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 10, 0 ) );
    // points.push( new THREE.Vector3( 0, 0, 0 ) );
    // points.push( new THREE.Vector3( 10, 0, 0 ) );

    const axesHelper= new THREE.AxesHelper(2);
    // scene.add( axesHelper );

    // points.push( new THREE.Vector3( 10, 0, 0 ) );

    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    const line = new THREE.Line( geometry, material );
    scene.add( line );
    renderer.render( scene, camera );

    
    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
    
        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
    
        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    
}


main();