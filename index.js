import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'
import Wall from './components/wall.js'
import Floor from './components/Floor.js'
import Ceiling from './components/Ceiling.js'
import Rig from './components/Rig.js'

new Vue({
    el: '#app',
    components: { Layout, Box, Scene, Wall, Floor, Ceiling, Rig },
    template: `
    <Layout>
      <Scene>
        <template v-slot:assets>
          <a-assets>
          <a-asset-item id="window" src="./assets/models/window.obj"></a-asset-item>
          <a-asset-item id="window-mtl" src="./assets/models/window.mtl"></a-asset-item>
          

          </a-assets>
        </template>
        <Box  position="-1.5 2.3 -3.49" 
              scale="3 2 0.01"
              shadow="cast: true"
               />

        <Box  position="5.35 2 3.85"
              rotation="0 -45 0" 
              scale="1 4 0.03"
              shadow="cast: true"
               />

        <Box  position="-5.35 2 3.85"
              rotation="0 -135 0" 
              scale="1 4 0.03"
              shadow="cast: true"
               />

        <Box  position="0 2 14.20"
              rotation="0 -90 0" 
              scale="0.2 4 5.4"
              shadow="cast: true"
               />


        <a-entity position="7.7 0 14.20" rotation="0 -90 0" scale="1 2 2" class="window" material="castShadow: true" obj-model="obj: #window; mtl: #window-mtl"></a-entity>
        <a-entity position="-7.7 0 14.20" rotation="0 -90 0" scale="1 2 2" class="window" material="castShadow: true" obj-model="obj: #window; mtl: #window-mtl"></a-entity>
        <Rig>
        <a-entity>
        
        </a-entity>
          <a-text id="kuubikutekst" value="see on kuubik" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="plakatitekst" value="joonistused" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="plakatitekst1" value="Kompositsioon nimetähtedest" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="plakatitekst2" value="Taimstilisatsioon" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
        </Rig>
      <Ceiling position="0 4 0" c="10" d="7">
      <a-entity light="type: point; intensity: 0.3; color: white; castShadow: true;" position="0 -2 0"> </a-entity>
      <a-entity light="type: ambient; intensity: 0.4; color: lightblue"></a-entity>
      </Ceiling>
      <Ceiling position="0 4 8.70" c="25.45" d="11">
      </Ceiling>

      <!-- Tuba otse -->
      <Wall position="0 -0.5 -3.5" w="10" >
        </Wall>

      <Wall position="-5 -0.5 0" rotation="0 90 0" w="7">
      </Wall>

      <Wall position="5 -0.5 0" rotation="0 -90 0" w="7">
      </Wall>

      <!-- Tuba paremal -->
      <Wall position="5.35 -0.5 3.85" rotation="0 -45 0" >
      </Wall>

      <Wall position="9.20 -0.5 4.20" w="7">
      </Wall>

      <Wall position="12.70 -0.5 9.20" rotation="0 -90 0" w="10">
      </Wall>

    <!-- Tuba vasakul -->
    <Wall position="-5.35 -0.5 3.85" rotation="0 45 0" >
    </Wall>

    <Wall position="-9.20 -0.5 4.20" w="7" >
    </Wall>

    <Wall position="-12.70 -0.5 9.20" rotation="0 90 0" w="10">
    </Wall>

<!-- Põrand -->

      <Floor position="0 0.01 0" a="10" b="7"></Floor>
      <!-- <Floor position="0 0.01 7" ></Floor>
      <Floor position="7 0.01 7" ></Floor> -->
      <Floor position="0 0.01 9.20" a="25.45" b="10"></Floor>
      <Floor position="0 0.01 3.85" a="11.5" b="0.75"></Floor>

<a-entity environment="preset: forest; lighting: distant; dressing: trees; playArea: 50; dressingScale: 10; skyType: atmosphere" ></a-entity>

      </Scene>
    </Layout>
    `,
})