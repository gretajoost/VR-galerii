export default {
    props: ["a", "b"],
    template: `
    <a-entity class="Floor" shadow="recieve: true">
    <a-plane 
    material="src: ./assets/textures/sand.jpg; repeat: 40 40"
              color="rgba(192,192,192,0.4)"
    rotation="-90 0 0" 
    :width=this.a
    :height=this.b
    ></a-plane>
   
         </a-entity>
    `
}