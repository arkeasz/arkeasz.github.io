<script setup>
import Mano from '../assets/mano.png'
import TableProject from './TableProject.vue';
</script>

<template>
  <figure class="preview">
    <img :src="Mano.src" alt="mano preview" />
    <figcaption>mano</figcaption>
  </figure>
  <TableProject 
    type="project"
    description="numerical methods project combining Rust and Fortran"
    stack="Rust, Fortran"
    focus="numerical method, language interoperability, performance-oriented design"
    :links="[
        {
            name: 'Github',
            url: 'https://github.com/arkeasz/mano'
        },
        {
            name: 'Demo',
            url: 'https://mano-hzeq.onrender.com/'
        }
    ]"
  />
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
</style>