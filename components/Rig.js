export default {
    template: `
          <a-entity id="rig" position="-2.8 0 5" rotation="0 -140 0">
            <a-camera>
                <a-entity 
                  cursor="fuse:true, fuseTimeout: 50;" raycaster="far: 10; objects: .hover"
                  position="0 0 -1"
                  geometry="primitive: circle; radius: 0.005;"
                  material="color: white; shader: flat; opacity: 0.7"
                  >
                </a-entity>
                <slot />
            </a-camera>
        <a-entity position="0 0 5" oculus-go-controls="model: false"></a-entity>
        <a-entity laser-controls="hand: right"></a-entity>
          </a-entity>
      `
  };