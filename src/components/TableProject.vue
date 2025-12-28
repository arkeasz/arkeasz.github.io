<script setup>
    const props = defineProps({
        type: String,
        description: String,
        stack: String,
        focus: String,
        links: {
            type: Array,
            validator: (value) => {
                return value.every(item => {
                    const hasName = typeof item.name === 'string';
                    const hasUrl = typeof item.url === 'string'

                    return hasName && hasUrl
                })
            },
            default: () => [],
        }
    })
</script>

<template>
  <ul class="info">
    <li><b>type:</b><p>{{ props.type }}</p></li>
    <li><b>description:</b><p>{{ props.description }}</p></li>
    <li><b>stack:</b><p>{{ props.stack }}</p></li>
    <li><b>focus:</b><p>{{ props.focus }}</p></li>
    <li>
        <b>links:</b>
        <p class="links">
            <a v-for="link in props.links" :href="link.url">{{link.name}}</a>
        </p>
    </li>
  </ul>
</template>

<style scoped>
    
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
            width: calc(20% - 2rem);
            text-wrap: break;
            word-break: break-all;
        }

        p {
            display: flex;
            align-items: center;
            width: calc(80% - 1rem);
            padding: .1rem .5rem;
        }
    }
    .links {
        display: flex;
        gap: 1rem;
    }

    .links a {
        color: #111;
    }
</style>