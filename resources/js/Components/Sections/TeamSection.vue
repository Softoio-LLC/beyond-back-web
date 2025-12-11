<script setup>
import { computed } from 'vue';

const props = defineProps({
    content: {
        type: Object,
        required: true
    },
    lang: {
        type: String,
        required: true
    }
});

const sectionTitle = computed(() => props.lang === 'ar' ? props.content.title_ar : props.content.title_en);
const getTitle = (member) => props.lang === 'ar' ? member.title_ar : member.title_en;
const getDescription = (member) => props.lang === 'ar' ? member.description_ar : member.description_en;
</script>

<template>
    <section class="team-area">
        <div class="container">
            <div class="team-inner-block">
                <div class="common-title text-center" data-aos="fade-up">
                    <h3>{{ sectionTitle }}</h3>
                </div>
                <div class="swiper team-card-wrap">
                    <div class="swiper-wrapper">
                        <div 
                            v-for="(member, index) in content.members" 
                            :key="index"
                            class="swiper-slide team-card position-relative z-1" 
                            data-aos="zoom-in" 
                            :data-aos-delay="(index + 2) * 100"
                        >
                            <div class="team-card-shape position-absolute z-n1">
                                <img class="w-100 h-100 object-fit-cover" :src="content.shape_image" alt="Shape" />
                            </div>
                            <div class="team-thumb">
                                <img class="w-100 h-100 object-fit-cover" :src="member.image" alt="Thumb" />
                            </div>
                            <div class="team-card-content">
                                <h4>{{ getTitle(member) }}</h4>
                                <p>{{ getDescription(member) }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="team-pagination"></div>
                </div>
            </div>
        </div>
    </section>
</template>
