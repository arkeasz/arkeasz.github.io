<script setup>
import TableProject from './TableProject.vue';
</script>

<template>
  <figure class="preview">
    <img src="https://github.com/zix-rs/zix/raw/main/assets/zix.gif" alt="zix preview" />
    <figcaption>zix</figcaption>
  </figure>

    <TableProject 
    type="project"
    description="minimal CLI tool and plugin-based system"
    stack="Rust"
    focus="cli tooling, unix philosophy, extensibility"
    :links="[
        {
            name: 'Github',
            url: 'https://github.com/zix-rs/zix'
        },
        {
            name: 'Webpage',
            url: 'https://zix-rs.github.io/'
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