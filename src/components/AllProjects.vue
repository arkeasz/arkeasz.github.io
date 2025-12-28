<script setup>
    import { useTemplateRef, onMounted, ref } from 'vue';
    
    import Archive from './Archive.vue'
    import Monsho from './Monsho.vue'
    import Mano from './Mano.vue'
    import Zix from './Zix.vue';
    import Argham from './Argham.vue';
    import Bingou from './Bingou.vue';

    const nav = useTemplateRef("nav");
    const content = useTemplateRef("content");
    const pro = ref(null)

    onMounted(() => {
        pro.value = window.location.hash || null
    })

    const exist = () => {
        if (nav.value) {
            nav.value.classList.toggle("exist");
        }
        if (content.value) {
            content.value.classList.toggle("exist");
        }
    }

    window.addEventListener('hashchange', () => {
        pro.value = window.location.hash
    })
</script>

<template>
    <section class="all-projects">
        <ul ref="nav" class="bardirections exist">
            <a @click="pro = '#monsho'" href="#monsho"><Archive /> monsho</a>
            <a @click="pro = '#mano'" href="#mano"><Archive /> mano</a>
            <a @click="pro = '#zix'" href="#zix"><Archive /> zix</a>
            <a @click="pro = '#argham'" href="#argham"><Archive /> argham</a>
            <a @click="pro = '#bingou'" href="#bingou"><Archive /> bingou</a>
        </ul>
        <a class="bardirections-opener" @click="exist()"><</a>
        <div ref="content" class="content">
            <div v-show="pro === '#monsho'">
                <Monsho />
            </div>
            <div v-show="pro === '#mano'">
                <Mano />
            </div>
            <div v-show="pro === '#zix'">
                <Zix />
            </div>
            <div v-show="pro === '#argham'">
                <Argham />
            </div>
            <div v-show="pro === '#bingou'">
                <Bingou />
            </div>
            <div v-show="!pro" class="neovim">
                    PROJECTS v1.0.0
                    <p>
                        -- buffer is empty --
                    </p>
                    <p>
                        select a file from the list
                    </p>
            </div>
            
            <div class="EOF">• EOF •</div>

        </div>

    </section>
</template>

<style scoped>
    .all-projects {
        width: 100%;
        display: flex;
        overflow: hidden;
        height: calc(100vh - 3rem);
    }

    .bardirections {
        padding: 0;
        margin: 0;
        width: 20%;
        min-width: 4rem;
        height: 100%;
        overflow: hidden;
        overflow-y: auto;
		background-color: #d8d0cd;
        border-right: .1rem solid #111;
        display: none;
    }

    .bardirections.exist {
        display: block;
    }

    .content.exist {
        width: calc(100% - 0.2rem);
    }

    .bardirections a {
        text-decoration: none;
        width: calc(100% - 1rem);
		color: #4a4949;
        padding: 1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: .5rem;
        border-bottom: .1rem solid #111;
        &:hover {
      		background-color: #e0d6b4;
        }
    }


    .bardirections-opener {
        height: 100%;
        display: flex;
        align-items: center;
        background-color: #4a4949;
        color: #eee;
        padding: 0 .1rem;
        cursor: pointer;
        position: relative;
        z-index: 4;

        &:hover {
            background-color: #4a4949ee;
        }

        &::selection {
            background: transparent;
        }
    }

    .content {
        overflow: auto;
        width: 80%;
        padding: .5rem 1rem;
        padding-bottom: 8rem;
        position: relative;

    }

    .neovim {
        color: #676767;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
    .EOF {
        padding: 3rem 0;
        color: #676767;
        text-align: center;
    }

    
    @media screen and (max-width: 680px) {
        .bardirections {
            position: absolute;
            z-index: 1;
            width: 10rem
        }

        .content {
            width: calc(100% - 0.2rem) !important;
        }

        .content.exist {
            width: calc(100%-0.2rem);
        }
    }
</style>