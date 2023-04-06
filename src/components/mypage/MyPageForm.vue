<template>
  <div class="d-flex justify-content-center align-items-center flex-column vh-100">
    <ul class="list-group" v-if="myinfo && myinfo.length > 0">
      <li class="list-group-item" v-for="(item, index) in myinfo" :key="index">
        <v-card>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field :value="item.email" :label="'Email'" outlined>
                  <template v-slot:append>
                    <v-btn color="primary" @click="editEmail(item)">Edit</v-btn>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field :value="item.city" :label="'City'" outlined>
                  <template v-slot:append>
                    <v-btn color="primary" @click="editCity(item)">Edit</v-btn>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field :value="item.street" :label="'Street'" outlined>
                  <template v-slot:append>
                    <v-btn color="primary" @click="editStreet(item)">Edit</v-btn>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field :value="item.zipcode" :label="'Zipcode'" outlined>
                  <template v-slot:append>
                    <v-btn color="primary" @click="editZipcode(item)">Edit</v-btn>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field :value="item.default_city" :label="'Default City'" outlined>
                  <template v-slot:append>
                    <v-btn color="primary" @click="editDefaultCity(item)">Edit</v-btn>
                  </template>
                </v-text-field>
                <v-text-field :value="item.default_street" :label="'Default Street'" outlined>
                  <template v-slot:append>
                    <v-btn color="primary" @click="editDefaultStreet(item)">Edit</v-btn>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </li>
    </ul>
    <div v-else class="text-center">Loading...</div>
  </div>
</template>

<script>
export default {
  name: "MyPageForm",
  props: {
    myinfo: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    editEmail(item) {
      console.log("Edit email:", item);
    },
    editCity(item) {
      console.log("Edit city:", item);
    },
    editStreet(item) {
      console.log("Edit street:", item);
    },
    editZipcode(item) {
      console.log("Edit zipcode:", item);
    },
    editDefaultCity(item) {
      console.log("Edit default city:", item);
    },
    editDefaultStreet(item) {
      console.log("Edit default street:", item);
    },
  },
};
</script>

<style>
  .text-center {
    text-align: center;
  }
</style>
