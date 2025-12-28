<script setup>
import Monsho from '../assets/monsho.gif'
import TableProject from './TableProject.vue';
</script>

<template>
  <figure class="preview">
    <img :src="Monsho.src" alt="Monsho preview" />
    <figcaption>monsho</figcaption>
  </figure>

  <TableProject 
    type="project"
    description="offline-first personal app focused on local data persistence"
    stack="JavaScript, IndexedDB, Web APIs"
    focus="offline-first architecture, local persistence, client-side reliability"
    :links="[
        {
            name: 'mmm...',
            url: '#'
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
</style>