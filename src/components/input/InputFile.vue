<template>
  <div
    :class="{
      'vue-input': type !== 'textarea',
      'vue-textarea': type === 'textarea',
      'vue-input--prefix': $slots.prefix,
      'vue-input--suffix': $slots.suffix,
      'vue-input--prepend': $slots.prepend,
      'vue-input--append': $slots.append,
    }"
  >
    <div
      v-if="$slots.prefix && type !== 'textarea'"
      class="vue-input__prefix"
    >
      <slot name="prefix" />
    </div>
    <div
      v-if="$slots.suffix && type !== 'textarea'"
      class="vue-input__suffix"
    >
      <slot name="suffix" />
    </div>
    <div
      v-if="$slots.prepend && type !== 'textarea'"
      class="vue-input__prepend"
    >
      <slot name="prepend" />
    </div>
    <div
      :class="{'has-file': showRemovedBtn}"
      class="c-file-input js-file-input"
    >
      <!-- <div class="c-file-input__indicator">
        <span class="c-file-input__indicator__icon c-icon c-icon--attach"></span>
      </div> -->
      <label class="c-file-input__label js-file-input__label">
        <span>{{ theFileName }}</span>
        <input
          type="file"
          name="attachment"
          class="c-file-input__field js-file-input__field"
          @change="fileChangeHandler"
        >
      </label>
      <div
        class="c-file-input__remove js-file-input__remove"
        @click.stop="clearFileHandler"
      >
        <span class="c-file-input__remove__icon c-icon c-icon--remove-circle" />
      </div>
    </div>
    <div
      v-if="this.$slots.append && type !== 'textarea'"
      class="vue-input__append"
    >
      <slot name="append" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueInputFile',

  $_veeValidate: {
    name () {
      return this.name
    },
    value () {
      return this.value
    }
  },

  model: {
    prop: 'value',
    event: 'input'
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    step: {
      type: [Number],
      default: 120
    },
    placeholder: {
      type: String,
      default: 'No file choosen'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      files: [],
      showRemovedBtn: false
    }
  },
  computed: {
    theFileName () {
      if ((this.files.length > 0) && 'name' in this.files[0]) {
        return this.files[0].name
      }
      return this.placeholder
    }
  },
  methods: {
    fileChangeHandler (e) {
      this.files = Array.from(e.target.files)
      this.showRemovedBtn = true
    },
    clearFileHandler () {
      const el = this.$el.querySelector('.js-file-input__field')
      const wrapper = document.createElement('form')
      this.wrapInputAndReset(el, wrapper)
    },
    wrapInputAndReset (el, wrapper) {
      // wrap input with form tag
      el.parentNode.insertBefore(wrapper, el)
      wrapper.appendChild(el)

      // reset input with form.reset()
      wrapper.reset()

      // place childNodes in document fragment
      const docFrag = document.createDocumentFragment()
      while (wrapper.firstChild) {
        const child = wrapper.removeChild(wrapper.firstChild)
        docFrag.appendChild(child)
      }

      // replace wrapper with document fragment
      wrapper.parentNode.replaceChild(docFrag, wrapper)

      this.files = []
      this.showRemovedBtn = false
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/variables';
@import '../../scss/mixins';
.c-file-input {
  position: relative;
  display: block;
  height: 36px;
  border: 1px dashed #ddd;
  background-color: #fff;
}

/* line 24, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
.c-file-input:invalid,
.c-field--error .c-file-input {
  background-color: #ffe6e9;
  border-color: #ff566a;
}

/* line 28, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
.c-file-input:invalid:focus,
.c-field--error .c-file-input:focus {
  background-color: #ffe6e9;
  border-color: #ff566a;
}

/* line 34, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
.c-file-input__label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  line-height: 36px;
  color: #999;
  font-size: 12px;
  overflow: hidden;
  word-wrap: break-word;
  z-index: 1;
}

/* line 50, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
.c-file-input__field {
  position: absolute !important;
  height: 1px !important;
  width: 1px !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  z-index: -1;
}

/* line 59, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
.c-file-input__field:focus {
  outline: none;
}

/* line 64, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
.c-file-input__indicator {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 36px;
  z-index: 2;
}

/* line 73, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
.c-file-input__indicator__icon {
  color: #bbb;
  position: absolute;
  top: 50%;
  -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
       -o-transform: translate(0, -50%);
          transform: translate(0, -50%);
  left: 4px;
  font-size: 20px;
}

/* line 81, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
.has-file .c-file-input__indicator__icon {
  color: #d71149;
}

/* line 86, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
.c-file-input__remove {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 36px;
  z-index: 2;
}

.has-file > .c-file-input__remove {
  display: block;
}

/* line 100, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
.c-file-input__remove__icon {
  position: absolute;
  top: 50%;
  -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
       -o-transform: translate(0, -50%);
          transform: translate(0, -50%);
  left: 4px;
  font-size: 20px;
  color: #ff566a;
}

</style>
