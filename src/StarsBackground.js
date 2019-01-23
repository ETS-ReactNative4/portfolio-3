import React, {PureComponent} from 'react';
import * as THREE from 'three';

export default class StarsBackground extends PureComponent {

  componentDidMount(){
      window.addEventListener( 'resize', this.onWindowResize, false );
      const width = this.mount.clientWidth
      const height = this.mount.clientHeight

      // ADD SCENE
      this.scene = new THREE.Scene()

      // ADD CAMERA
      this.camera = new THREE.PerspectiveCamera(
        75,
        width / height,
        0.1,
        1000
      )
      this.camera.position.z = 4

      // ADD RENDERER
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setClearColor('#000000')
      this.renderer.setSize(width, height)
      this.mount.appendChild(this.renderer.domElement)

      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize( window.innerWidth, window.innerHeight );

      this.start()
    }



  componentWillUnmount(){
      this.stop()
      this.mount.removeChild(this.renderer.domElement)
    }

  start = () => {
      if (!this.frameId) {
        this.frameId = window.requestAnimationFrame(this.animate)
      }
      const starQty = 5000;
  		const	geometry = new THREE.SphereGeometry(100, 2, 2);

	    const	materialOptions = {
	    		size: 1.0
	    	};

    	const starStuff = new THREE.PointCloudMaterial(materialOptions);

  		for (let i = 0; i < starQty; i+=1) {

  			const starVertex = new THREE.Vector3();
  			starVertex.x = Math.random() * 2000 - 1000;
  			starVertex.y = Math.random() * 2000 - 1000;
  			starVertex.z = Math.random() * 2000 - 1000;

  			geometry.vertices.push(starVertex);
  		}

  		const stars = new THREE.PointCloud(geometry, starStuff);
  		this.scene.add(stars);
      this.camera.lookAt( this.scene.position );

    }

  stop = () => {
      window.cancelAnimationFrame(this.frameId)
    }

  animate = () => {
     this.camera.rotation.y += ( - window.scrollY - this.camera.position.y + 20) * 0.00001;
     this.renderScene()
     this.frameId = window.requestAnimationFrame(this.animate)
   }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
}


  render(){
      return(
        <div className="background-root"
          style={{ width: '100vh', height: '100vh', position: 'absolute', zIndex: '0'}}
          ref={(mount) => { this.mount = mount }}
        />
      )
    }
}
