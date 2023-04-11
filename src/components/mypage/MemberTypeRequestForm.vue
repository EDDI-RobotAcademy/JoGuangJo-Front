<template>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="requestMessage" label="Request Message" outlined type="text" multiline></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn color="primary" @click="submitRequest">Submit Request</v-btn>
            <v-btn color="secondary">Cancel</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "MemberTypeRequestForm",
    data() {
      return {
        requestMessage: "",
      };
    },
    methods: {
      async submitRequest() {
        // Logic to send the request to the server, e.g., using axios.post()
      },
    },
  };
  </script>
  