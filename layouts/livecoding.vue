<script setup lang="ts">
import {onMounted, useTemplateRef} from "vue"
const videoRef = useTemplateRef('livecoding-video')

async function startCapture() {
    if(window.LIVECODING_ASKED) return
    window.LIVECODING_ASKED = true
    const stream = await navigator.mediaDevices.getDisplayMedia();
    window.LIVECODING = stream;
    window.open("/", "_blank", "x=y");
}

function attachVideo(){
    const stream = window.opener === null ? window.LIVECODING : window.opener.LIVECODING;
    if(stream === null || typeof stream === "undefined"){
        console.log("stream not found")
        setTimeout(() => {
            attachVideo()
        }, 1000);
        return
    }
    if(!videoRef.value){
        console.log("video ref not found")
        setTimeout(() => {
            attachVideo()
        }, 1000);
        return
    }
    let videoElem = videoRef.value;
    videoElem.autoplay = true;
    videoElem.muted = true;
    videoElem.srcObject = stream;
}

if (window.location.href.indexOf("presenter") > -1 && typeof window.LIVECODING === "undefined") {
    startCapture()
}

onMounted(() => {
    attachVideo()
})

</script>

<template>
    <div class="grid grid-cols-1 w-full h-full">
        <div class="w-full w-full" :style="style" />
        <div class="slidev-layout default" style="padding: 0rem">
            <video ref="livecoding-video"></video>
            <div style="position: absolute; top: 0px; left: 0px;">  </div>
        </div>
    </div>
</template>