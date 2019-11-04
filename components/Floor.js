export default {
    props: ["a", "b"],
    template: `
    <a-entity class="Floor" shadow="recieve: true">
    <a-plane 
    material="color: white"
    rotation="-90 0 0" 
    :width=this.a
    :height=this.b
    ></a-plane>
   
         </a-entity>
    `
}