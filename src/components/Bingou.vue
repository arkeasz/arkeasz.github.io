<script setup>
import Bingou from '../assets/bingou.gif'
</script>

<template>
  <figure class="preview">
    <img :src="Bingou.src" alt="zix preview" />
    <figcaption>bingou</figcaption>
  </figure>

  <ul class="info">
    <li><b>type:</b><p>project</p></li>
    <li><b>description:</b><p>bingo game built with React using a fully SVG-based interface</p></li>
    <li><b>stack:</b><p>React, SVG</p></li>
    <li><b>focus:</b><p>SVG-based ui, interactive</p></li>
    <li><b>links:</b><p class="links"><a href="https://github.com/arkeasz/bingou">Github</a><a href="https://arkirus.fun/bingou">Demo</a></p></li>
  </ul>

</template>

<style>
    .preview {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
    .preview img {
        border: .1rem solid #111;
        box-shadow: 0 0 10px 5px rgba(231, 231, 231, 0.766);
        width: 80%;
    }

    .info {
        display: flex;
        flex-direction: column;
        padding: 0;
        width: 90%;
        margin: 0 auto;
    }

    .info li {
        display: flex;
        border: .1rem solid #111;
        background-color: #e0d6b4;

        b {
            padding: 1rem;
            width: 20%;
        }
    }

    .links {
        display: flex;
        gap: .4rem;
    }

    .links a {
        color: #111;
    }
</style>