
export default {
    props: ["w"],
    template: `
    	<a-entity>
            <a-plane 
            static-body position="0 3.5 0" 
            shadow="recieve: true" 
            material="src: ./assets/textures/brick.jpg; repeat: 4 2; side: double"
            :width=this.w 
            height="6" 
            class="wall">
            
                <a-entity position="0 0 0.01">
                    <!-- pilt läheb siia -->
                    <slot />
                    <!--  -->
                </a-entity>
            </a-plane>
            
        </a-entity>
    `
}