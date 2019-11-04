export default {
    props: ["c", "d"],
    template: `
    <a-entity class="Ceiling">
        <a-plane class="Ceiling"  rotation="90 0 0" color="white" :width=this.c :height=this.d ></a-plane>
        <slot /> 
    </a-entity>
    `
}
