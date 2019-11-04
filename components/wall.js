
export default {
    props: ["w"],
    template: `
    	<a-entity>
            <a-plane 
            static-body position="0 2.5 0" 
            shadow="recieve: true" 
            material="src: ./assets/textures/brick.jpg; repeat: 4 2"
            :width=this.w 
            height="4" 
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