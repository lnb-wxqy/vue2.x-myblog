<template>
  <div>
    <div class="p-4">
      <b-icon icon="clock"
              animation="spin"
              font-scale="4"
              shift-v="4"></b-icon>
      <b-button size="sm"
                class="mb-2">
        <b-icon icon="gear-fill"
                aria-hidden="true"></b-icon> Settings
      </b-button>
      <br>
      <b-button variant="primary"
                class="mb-2">
        Pay now <b-icon icon="credit-card"
                aria-hidden="true"></b-icon>
      </b-button>
      <br>
      <b-button variant="outline-info"
                class="mb-2">
        <b-icon icon="power"
                aria-hidden="true"></b-icon> Logout
      </b-button>
      <br>
      <b-button size="lg"
                variant="primary"
                class="mb-2">
        <b-icon icon="question-circle-fill"
                aria-label="Help"></b-icon>
      </b-button>

    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
    }
}
</script>

<style lang="stylus" scoped></style>
