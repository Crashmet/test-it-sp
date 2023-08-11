<script setup>
// const scroll = document.getElementById('input-401');

import { onMounted, ref } from 'vue';

const scroll = ref(null);
const isScroll = ref(false);
const isActiveTextarea = ref(false);
const contentTextarea = ref('');

onMounted(() => {
  scroll.value.addEventListener('scroll', function () {
    const scrollHeight = scroll.value.scrollHeight;
    const clientHeight = scroll.value.clientHeight;

    if (scrollHeight === clientHeight) {
      isScroll.value = false;
    } else {
      isScroll.value = true;
    }
  });

  scroll.value.addEventListener('input', (e) => {
    contentTextarea.value = e.target.value;
  });

  scroll.value.addEventListener('mouseover', (e) => {
    isActiveTextarea.value = true;
  });

  scroll.value.addEventListener('mouseout', (e) => {
    isActiveTextarea.value = false;
  });
});
</script>

<template>
  <div class="next">
    <div>
      <div
        class="v-input v-input--horizontal v-input--density-default v-locale--is-ltr v-input--dirty v-textarea v-text-field"
        :class="{ 'active-textarea': isActiveTextarea }"
      >
        <!---->

        <div class="v-field__field">
          <textarea
            class="v-field__input"
            ref="scroll"
            id="input-401"
            required
            :class="{ 'blur-textarea': isScroll }"
          ></textarea>

          <label
            class="v-label v-field-label v-field-label--before"
            aria-hidden="true"
            for="input-401"
            :class="{ 'none-label': contentTextarea.length }"
            >Label</label
          >
          <label
            class="v-label v-field-label v-field-label--after"
            for="input-401"
            v-if="contentTextarea.length"
            >Label</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-textarea {
  position: relative;
  width: 100%;
  min-width: 450px;
  background-color: rgba(0, 0, 0, 0.04);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px solid rgb(113, 113, 113);
  transition: background-color 0.2s ease-in;
}

.v-field__field textarea {
  width: 93%;
  resize: none;
  border: 0;
}

.v-field__field textarea:focus,
.v-field__field textarea:active {
  resize: vertical;
}

.v-label {
  font-size: 1rem;
  letter-spacing: 0.009375em;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.v-field-label--before {
  position: absolute;
  z-index: 100;
  top: 10px;
  left: 14px;
  opacity: 0.6;
  transition: opacity 0.2s ease-out;
}

.v-field-label--after {
  position: absolute;
  z-index: 100;
  top: 7px;
  left: 10px;
  font-size: 12px;
  opacity: 0.6;
  transition: opacity 0.2s ease-out;
}

.v-field__field textarea:focus ~ .v-field-label--before,
.v-field__field textarea:active ~ .v-field-label--before {
  position: absolute;
  z-index: 100;
  top: 7px;
  left: 10px;
  font-size: 12px;
  opacity: 1;
  transition: opacity 0.2s ease-out;
}

.v-field__field textarea:focus ~ .v-field-label--after,
.v-field__field textarea:active ~ .v-field-label--after {
  opacity: 1;
  transition: opacity 0.2s ease-out;
}

.none-label {
  display: none;
}

.v-field__input {
  display: flex;
  flex-wrap: wrap;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  padding-top: 25px;
  padding-bottom: 5px;
  height: 150px;
  letter-spacing: 0.009375em;
  opacity: 0.87;
  color: inherit;
  background-color: rgba(0, 0, 0, 0.04);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  transition: opacity 0.2s ease-in;
}

.v-field__field textarea:hover,
.v-field__field textarea:focus,
.v-field__field textarea:active {
  opacity: 1;
  transition: opacity 0.2s ease-in;
}

.blur-textarea {
  flex: 1 1 auto;
  outline: none;
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent,
    transparent calc(10px + 15px - 6px),
    black calc(10px + 15px + 4px)
  );
  mask-image: linear-gradient(
    to bottom,
    transparent,
    transparent calc(10px + 15px - 6px),
    black calc(10px + 15px + 4px)
  );
}

.active-textarea {
  background-color: rgba(0, 0, 0, 0.07);
  transition: background-color 0.2s ease-in;
}

.v-field__field::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  display: block;
  height: 1px;
  background: none repeat scroll 0 0 transparent;
  background: black;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.v-textarea:hover > .v-field__field::before,
.v-textarea:focus > .v-field__field::before,
.v-textarea:active > .v-field__field::before {
  width: 100%;
  left: 0;
}
</style>
