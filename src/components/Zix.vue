<script setup>
import Monsho from '../assets/monsho.gif'
</script>

<template>
  <figure class="preview">
    <img src="https://github.com/zix-rs/zix/raw/main/assets/zix.gif" alt="zix preview" />
    <figcaption>zix</figcaption>
  </figure>

  <ul class="info">
    <li><b>type:</b><p>project</p></li>
    <li><b>description:</b><p>minimal CLI tool and plugin-based system</p></li>
    <li><b>stack:</b><p>Rust</p></li>
    <li><b>focus:</b><p>cli tooling, unix philosophy, extensibility</p></li>
   <li><b>links:</b><p class="links"><a href="https://zix-rs.github.io/">Webpage</a><a href="https://github.com/arkeasz/meta">Github</a></p></li>
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