<script setup>
import Argham from '../assets/argham.png'
import TableProject from './TableProject.vue';
</script>

<template>
  <figure class="preview">
    <img :src="Argham.src" alt="zix preview" />
    <figcaption>argham</figcaption>
  </figure>

  <TableProject 
    type="library"
    description="symbolic math and expression evaluation library inspired by sympy"
    stack="Fortran"
    focus="expression parsing, symbolic computation, numerical foundation"
    :links="[
        {
            name: 'Github',
            url: 'https://github.com/arkeasz/argham'
        },
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