<template>
  <div class="slider mt-0">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://images.pexels.com/photos/6664193/pexels-photo-6664193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ></b-carousel-slide>

      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54"> -->
      <!-- </b-carousel-slide> -->

     
    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<style scoped>
.carousel .carousel-item {
  height: 200px;
}

.carousel-item img {
    position: absolute;
    /* object-fit: cover; */
    top: 0;
    left: 0;
    max-height: 200px;
}
</style>