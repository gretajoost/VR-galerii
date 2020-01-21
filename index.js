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
          <a-asset-item id="plant" src="./assets/models/plant.obj"></a-asset-item>
          <a-asset-item id="plant-mtl" src="./assets/models/plant.mtl"></a-asset-item>
          <a-asset-item id="lightbank" src="./assets/models/lightbank.obj"></a-asset-item>
          <a-asset-item id="lightbank-mtl" src="./assets/models/lightbank.mtl"></a-asset-item>
          <a-asset-item id="light" src="./assets/models/light.obj"></a-asset-item>
          <a-asset-item id="light-mtl" src="./assets/models/light.mtl"></a-asset-item>

          </a-assets>
        </template>
        
        <Box  position="5.35 3 3.85" 
              rotation="0 -45 0" 
              scale="1 6 0.03"
              shadow="cast: true"
              color="white"
               />
        <Box  position="-5.35 3 3.85"
              rotation="0 -135 0" 
              scale="1 6 0.03"
              shadow="cast: true"
              color="white"
               />
        <Box  position="0 3 14.20"
              rotation="0 -90 0" 
              scale="0.2 6 5.4"
              shadow="cast: true"
              color="rgba(192,192,192,0.4)"
               />
               <a-text value="autor" rotation="0 180 0" position="2.4 4.8 14" width="5" color="black"></a-text>
               <a-text value="GRETA JOOST" rotation="0 180 0" position="2.4 4.3 14" width="7" color="black"></a-text>
               <a-text value="Kuressaare Ametikoolis" rotation="0 180 0" position="2.4 3.7 14" width="5" color="black"></a-text>
               <a-text value="valminud teosed." rotation="0 180 0" position="2.4 3.3 14" width="5" color="black"></a-text>
               <a-text value="Juhendaja: Leelo Leesi" rotation="0 180 0" position="2.4 2.9 14" width="5" color="black"></a-text>
            <Box  position="-1.18 3.48 14" 
            scale="2 1.5 0.01"
            rotation="0 -180 -90"
            shadow="cast: true"
            material="src: ./assets/images/portree-1.JPG"
            />
            <Box  position="-1.18 3.48 14.05" 
            scale="2.2 1.7 0.01"
            rotation="0 -180 -90"
            shadow="cast: true"
            color="black"
            />
       <Box  position="0 0.5 14"
              rotation="0 -90 0" 
              scale="0.5 1 25.4"
              shadow="cast: true"
              material="src: ./assets/textures/sand.jpg; repeat: 40 1"
              color="rgba(192,192,192,0.4)"
               />
       <Box  position="-12.7 0.5 9.3"
              rotation="0 0 0" 
              scale="0.5 1 10.1"
              shadow="cast: true"
              material="src: ./assets/textures/sand.jpg; repeat: 40 1"
              color="rgba(192,192,192,0.4)"
               />
        <Box  position="0 5.5 14.20"
              rotation="0 -90 0" 
              scale="0.2 1 25.4"
              shadow="cast: true"
              color="rgba(192,192,192,0.4)"
               />
        <a-entity position="7.7 1 14.20" rotation="0 -90 0" scale="1 2 2" class="window" material="castShadow: true" obj-model="obj: #window; mtl: #window-mtl"></a-entity>
        <a-entity position="-7.7 1 14.20" rotation="0 -90 0" scale="1 2 2" class="window" material="castShadow: true" obj-model="obj: #window; mtl: #window-mtl"></a-entity>
        <a-entity position="-2.5 0 13" rotation="0 -90 0" scale="0.4 0.4 0.4" class="plant" material="castShadow: true" obj-model="obj: #plant; mtl: #plant-mtl"></a-entity>
        <a-entity position="-12.73 5.3 12.27" rotation="0 90 0" scale="0.2 0.2 0.2" class="light" material="castShadow: true" obj-model="obj: #light; mtl: #light-mtl"></a-entity>
        <a-entity position="-12.73 5.3 7.43" rotation="0 90 0" scale="0.2 0.2 0.2" class="light" material="castShadow: true" obj-model="obj: #light; mtl: #light-mtl"></a-entity>
        <a-entity position="-9.6 5.3 4.16" rotation="0 0 0" scale="0.2 0.2 0.2" class="light" material="castShadow: true" obj-model="obj: #light; mtl: #light-mtl"></a-entity>
        <a-entity position="8.65 5.3 4.16" rotation="0 0 0" scale="0.2 0.2 0.2" class="light" material="castShadow: true" obj-model="obj: #light; mtl: #light-mtl"></a-entity>
        <a-entity position="1.6 5.3 -3.57" rotation="0 0 0" scale="0.2 0.2 0.2" class="light" material="castShadow: true" obj-model="obj: #light; mtl: #light-mtl"></a-entity>
        <a-entity position="-3.21 5.3 -3.57" rotation="0 0 0" scale="0.2 0.2 0.2" class="light" material="castShadow: true" obj-model="obj: #light; mtl: #light-mtl"></a-entity>
        <a-entity position="-5.1 5.3 0.81" rotation="0 90 0" scale="0.2 0.2 0.2" class="light" material="castShadow: true" obj-model="obj: #light; mtl: #light-mtl"></a-entity>
        <a-entity position="5.1 5.3 -0.81" rotation="0 -90 0" scale="0.2 0.2 0.2" class="light" material="castShadow: true" obj-model="obj: #light; mtl: #light-mtl"></a-entity>
        <a-entity position="12.73 5.3 6.43" rotation="0 -90 0" scale="0.2 0.2 0.2" class="light" material="castShadow: true" obj-model="obj: #light; mtl: #light-mtl"></a-entity>
        <a-entity position="12.73 5.3 10.93" rotation="0 -90 0" scale="0.2 0.2 0.2" class="light" material="castShadow: true" obj-model="obj: #light; mtl: #light-mtl"></a-entity>
        <a-entity position="5.08 0.96 10.3" rotation="0 21.6 0" scale="1 1.3 1" class="lightbank" material="castShadow: true" obj-model="obj: #lightbank; mtl: #lightbank-mtl"></a-entity>
        <a-entity position="-5.08 0.96 8.85" rotation="0 -160 0" scale="1 1.3 1" class="lightbank" material="castShadow: true" obj-model="obj: #lightbank; mtl: #lightbank-mtl"></a-entity>
        <Rig>
<!-- Joonistused -->
        <a-entity id="pilt1" visible="false" position="0 -0.2 -0.5" > <a-text  value="Kompositsioon kuupidest ja risttahukatest" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.6 0.1 0" opacity="0.5" />  </a-entity>
        <a-entity id="pilt2" visible="false" position="0 -0.2 -0.5" > <a-text  value="Kompositsioon erinevast materjalist esemestest" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.7 0.1 0" opacity="0.5" />  </a-entity>
        <a-entity id="pilt3" visible="false" position="0 -0.2 -0.5" > <a-text  value="Dekoratiivne joonistus potilillest / pealtvaade" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.7 0.1 0" opacity="0.5" />  </a-entity>
        <a-entity id="pilt4" visible="false" position="0 -0.2 -0.5" > <a-text  value="Kompositsioon kerakujulistest objektidest" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.6 0.1 0" opacity="0.5" />  </a-entity>
        <a-entity id="pilt5" visible="false" position="0 -0.2 -0.5" > <a-text  value="Kompositsioon nimetähtedest" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.4 0.1 0" opacity="0.5" />  </a-entity>
<!-- Maasikad -->
      <a-entity id="pilt6" visible="false" position="0 -0.2 -0.5" > <a-text  value="Joonstilisatsioon" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.3 0.1 0" opacity="0.5" />  </a-entity>
      <a-entity id="pilt7" visible="false" position="0 -0.2 -0.5" > <a-text  value="Siluettstilisatsioon" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.3 0.1 0" opacity="0.5" />  </a-entity>
      <a-entity id="pilt8" visible="false" position="0 -0.2 -0.5" > <a-text  value="Must/valge pindstilisatsioon" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.4 0.1 0" opacity="0.5" />  </a-entity>
      <a-entity id="pilt9" visible="false" position="0 -0.2 -0.5" > <a-text  value="Värviline pindstilisatsioon" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.4 0.1 0" opacity="0.5" />  </a-entity>
<!-- Maal -->
      <a-entity id="pilt10" visible="false" position="0 -0.2 -0.5" > <a-text  value="Monokromaatiline maal" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.4 0.1 0" opacity="0.5" />  </a-entity>
      <a-entity id="pilt11" visible="false" position="0 -0.2 -0.5" > <a-text  value="Ultramariin sinine/põlenud sienna" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.5 0.1 0" opacity="0.5" />  </a-entity>
      <a-entity id="pilt12" visible="false" position="0 -0.2 -0.5" > <a-text  value="Vaikelu" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.2 0.1 0" opacity="0.5" />  </a-entity>
<!-- Maastikud -->
      <a-entity id="pilt13" visible="false" position="0 -0.2 -0.5" > <a-text  value="Suve maastik/akvarell" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.3 0.1 0" opacity="0.5" />  </a-entity>
      <a-entity id="pilt14" visible="false" position="0 -0.2 -0.5" > <a-text  value="Sügise maastik/akvarell" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.4 0.1 0" opacity="0.5" />  </a-entity>
      <a-entity id="pilt15" visible="false" position="0 -0.2 -0.5" > <a-text  value="Talve maastik/akvarell" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.3 0.1 0" opacity="0.5" />  </a-entity>
      <a-entity id="pilt16" visible="false" position="0 -0.2 -0.5" > <a-text  value="Kevade maastik/akvarell" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.4 0.1 0" opacity="0.5" />  </a-entity>
<!-- Taimed -->
      <a-entity id="pilt17" visible="false" position="0 -0.2 -0.5" > <a-text  value="Puuviljad/akvarell/märg tehnika" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.5 0.1 0" opacity="0.5" />  </a-entity>
<!-- Portreed -->
      <a-entity id="pilt18" visible="false" position="0 -0.2 -0.5" > <a-text  value="Autoportree/harilik" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.3 0.1 0" opacity="0.5" />  </a-entity>
      <a-entity id="pilt19" visible="false" position="0 -0.2 -0.5" > <a-text  value="Autoportree/must-valge" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.4 0.1 0" opacity="0.5" />  </a-entity>
      <a-entity id="pilt20" visible="false" position="0 -0.2 -0.5" > <a-text  value="Autoportree/värviline" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.3 0.1 0" opacity="0.5" />  </a-entity>
      <a-entity id="pilt21" visible="false" position="0 -0.2 -0.5" > <a-text  value="Autoportree/segatehnika" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.4 0.1 0" opacity="0.5" />  </a-entity>
<!-- Akvarell  -->
      <a-entity id="pilt22" visible="false" position="0 -0.2 -0.5" > <a-text  value="Akvarell/segatehnika" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.3 0.1 0" opacity="0.5" />  </a-entity>
      <a-entity id="pilt23" visible="false" position="0 -0.2 -0.5" > <a-text  value="Akvarell/kuivtehnika" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.4 0.1 0" opacity="0.5" />  </a-entity>
      <a-entity id="pilt24" visible="false" position="0 -0.2 -0.5" > <a-text  value="Akvarell/märgtehnika" font="./assets/signika/Raleway-Light-msdf.json" negate="false" width="0.6" align="center" color="white" /> <a-plane color="gray" scale="0.3 0.1 0" opacity="0.5" />  </a-entity>
</Rig>

      <Ceiling position="0 6 0" c="10" d="7" >
      <a-entity light="type: point; intensity: 0.2; color: white; castShadow: true;" position="0 -2 0"> </a-entity>
      <a-entity light="type: point; intensity: 0.1; color: white; castShadow: true;" position="7.5 -2 9"> </a-entity>
      <a-entity light="type: point; intensity: 0.1; color: white; castShadow: true;" position="-7.5 -2 9"> </a-entity>
      <a-entity light="type: ambient; intensity: 0.4; color: lightblue"></a-entity>
      </Ceiling>
      <Ceiling position="0 6 8.70" c="25.45" d="11">
      </Ceiling>

      <!-- Tuba otse -->
      <Wall position="0 -0.5 -3.5" w="10" >
      <Box  position="-3.3 -0.4 0.03" 
            scale="3 2 0.01"
            shadow="cast: true"
            material="src: ./assets/images/kuubikud.png"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt1; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt1; visible: false"
            />
      <Box  position="0.02 -0.4 0.03" 
            scale="3 2 0.01"
            shadow="cast: true"
            material="src: ./assets/images/tintekas.png"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt2; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt2; visible: false"
            />
            />
      <Box  position="3.3 -0.4 0.03" 
            scale="3 2 0.01"
            shadow="cast: true"
            material="src: ./assets/images/ymmargused.png"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt4; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt4; visible: false"
            />          
        </Wall>

      <Wall position="-5 -0.5 0" rotation="0 90 0" w="7">
      <Box  position="1.5 -0.4 0.03" 
            scale="2 3 0.01"
            shadow="cast: true"
            material="src: ./assets/images/lillepott_2.png"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt3; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt3; visible: false"
            /> 

      <Box  position="-1.5 -0.4 0.03" 
            scale="2 2 0.01"
            shadow="cast: true"
            material="src: ./assets/images/tahed.png"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt5; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt5; visible: false"
            /> 
      </Wall>

      <Wall position="5 -0.5 0" rotation="0 -90 0" w="7">
      <Box  position="-1.5 1.3 0.03" 
            scale="1.5 1.5 0.01"
            shadow="cast: true"
            material="src: ./assets/images/maasikas_1.png"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt6; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt6; visible: false"
            />
      <Box  position="-1.5 -0.4 0.03" 
            scale="1.5 1.5 0.01"
            shadow="cast: true"
            material="src: ./assets/images/maasikas_4.png"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt7; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt7; visible: false"
            />
      <Box  position="1.3 1.3 0.03" 
            scale="1.5 1.5 0.01"
            shadow="cast: true"
            material="src: ./assets/images/maasikas_2.png"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt8; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt8; visible: false"
            />
      <Box  position="1.3 -0.4 0.03" 
            scale="1.5 1.5 0.01"
            shadow="cast: true"
            material="src: ./assets/images/maasikas_3.png"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt9; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt9; visible: false"
            />
      </Wall>

      <!-- Tuba paremal -->
      <Wall position="5.35 -0.5 3.85" rotation="0 -45 0" >
      </Wall>

      <Wall position="9.20 -0.5 4.20" w="7">
      <Box  position="-2.519 -0.4 0.03" 
            scale="2 1.5 0.01"
            rotation="0 0 -90"
            shadow="cast: true"
            material="src: ./assets/images/portree-1.JPG"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt18; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt18; visible: false"
            />
      <Box  position="-0.847 -0.4 0.03" 
            scale="2 1.5 0.01"
            rotation="0 0 -90"
            shadow="cast: true"
            material="src: ./assets/images/portree-2.JPG"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt19; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt19; visible: false"
            />
      <Box  position="0.847 -0.4 0.03" 
            scale="2 1.5 0.01"
            rotation="0 0 -90"
            shadow="cast: true"
            material="src: ./assets/images/portree-3.JPG"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt21; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt21; visible: false"
            />
      <Box  position="2.543 -0.4 0.03" 
            scale="1.5 2 0.01"
            rotation="0 0 0"
            shadow="cast: true"
            material="src: ./assets/images/portree-4.JPG"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt20; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt20; visible: false"
            />
      </Wall>

      <Wall position="12.70 -0.5 9.20" rotation="0 -90 0" w="10">
      <Box  position="-3.113 -0.4 0.03" 
            scale="2 2.8 0.01"
            shadow="cast: true"
            material="src: ./assets/images/monok.png"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt10; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt10; visible: false"
            /> 
      <Box  position="0.136 -0.4 0.03" 
            scale="3 2 0.01"
            shadow="cast: true"
            material="src: ./assets/images/vaasid.png"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt12; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt12; visible: false"
            /> 
      <Box  position="3.385 -0.4 0.03" 
            scale="2 2.8 0.01"
            shadow="cast: true"
            material="src: ./assets/images/puna-sini.png"
            class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt11; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt11; visible: false"
            /> 
      </Wall>

    <!-- Tuba vasakul -->
    <Wall position="-5.35 -0.5 3.85" rotation="0 45 0" >
    </Wall>

    <Wall position="-9.20 -0.5 4.20" w="7" >
    <Box  position="-2.252 -0.2 0.03" 
          scale="3 2 0.01"
          rotation="0 0 -90"
          shadow="cast: true"
          material="src: ./assets/images/v-pea.JPG"
          class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt22; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt22; visible: false"
            /> 
    <Box  position="-0.07 -0.2 0.03" 
          scale="3 2 0.01"
          rotation="0 0 -90"
          shadow="cast: true"
          material="src: ./assets/images/v-sinine.JPG"
          class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt23; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt23; visible: false"
            />
    <Box  position="2.236 -0.2 0.03" 
          scale="3 2 0.01"
          rotation="0 0 -90"
          shadow="cast: true"
          material="src: ./assets/images/v-tulp.JPG"
          class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt24; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt24; visible: false"
            />        
    </Wall>

    <Wall position="-12.70 -0.5 9.20" rotation="0 90 0" w="10">
    <Box  position="-3.305 -0.6 0.03" 
          scale="1 1.5 0.01"
          rotation="0 0 0"
          shadow="cast: true"
          material="src: ./assets/images/v-oun.JPG"
          class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt17; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt17; visible: false"
          />
    <Box  position="-1.607 -0.6 0.03" 
          scale="1.5 1 0.01"
          rotation="0 0 -90"
          shadow="cast: true"
          material="src: ./assets/images/v-pirn.JPG"
          class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt17; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt17; visible: false"
          />
    <Box  position="-3.305 1.244 0.03" 
          scale="1 1.5 0.01"
          rotation="0 0 0"
          shadow="cast: true"
          material="src: ./assets/images/v-kirss.JPG"
          class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt17; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt17; visible: false"
          />
    <Box  position="-1.607 1.244 0.03" 
          scale="1 1.5 0.01"
          rotation="0 0 0"
          shadow="cast: true"
          material="src: ./assets/images/v-maasikas.JPG"
          class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt17; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt17; visible: false"
          />
<!-- aastaajad -->
    <Box  position="1.536 -0.6 0.03" 
          scale="1.5 1 0.01"
          rotation="0 0 -90"
          shadow="cast: true"
          material="src: ./assets/images/talv.JPG"
          class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt15; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt15; visible: false"
          />
    <Box  position="3.332 -0.6 0.03" 
          scale="1.5 1 0.01"
          rotation="0 0 -90"
          shadow="cast: true"
          material="src: ./assets/images/kevad.JPG"
          class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt16; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt16; visible: false"
          />
    <Box  position="1.536 1.244 0.03" 
          scale="1.5 1 0.01"
          rotation="0 0 -90"
          shadow="cast: true"
          material="src: ./assets/images/sugis.JPG"
          class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt14; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt14; visible: false"
          />
    <Box  position="3.332 1.244 0.03" 
          scale="1.5 1 0.01"
          rotation="0 0 -90"
          shadow="cast: true"
          material="src: ./assets/images/suvi.JPG"
          class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt13; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt13; visible: false"
          />
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