<template>
  <div class="d-flex justify-content-center align-items-center flex-column vh-100">
    <ul class="list-group" v-if="myinfo && myinfo.length > 0">
      <li class="list-group-item" v-for="(item, index) in myinfo" :key="index">
        <v-card>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field :value="item.email" label="Email" outlined>
                  <template v-slot:append>
                    <v-btn color="primary" @click="editEmail(item)">Edit</v-btn>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
            
            <v-row v-if="item.city">
              <v-col cols="6">
                <v-text-field :value="item.city" label="City" outlined readonly></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field :value="item.street" label="Street" outlined readonly></v-text-field>
              </v-col>
            </v-row>
            <v-row v-if="item.city">
              <v-col cols="6">
                <v-text-field :value="item.zipcode" label="Zipcode" outlined readonly></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="item.default_street" label="Default Address" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row v-if="item.city">
              <v-col cols="6">
                <v-btn color="primary" @click="callDaumAddressApi(item)">Edit Address</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn color="primary" @click="saveAddress(item)">Save Address</v-btn>
              </v-col>
            </v-row>

            <v-row v-else>
              <v-col cols="12">
                <v-btn color="primary" @click="callDaumAddressApi(item)">Edit Address</v-btn>
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
import axios from 'axios';

export default {
  name: "MyPageForm",
  props: {
    myinfo: {
      type: Array,
      default: () => [],
    },
  },
    data() {
      return {
        city: "",
        zipcode: "",
        street: "",
      };
  },
  methods: {
    callDaumAddressApi (item) {
      new window.daum.Postcode({
        oncomplete: (data) => {
          let fullRoadAddr = data.roadAddress;
          let extraRoadAddr = '';

          if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraRoadAddr += data.bname;
          }
          if (data.buildingName !== '' && data.apartment === 'Y') {
            extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          }
          if (extraRoadAddr !== '') {
            extraRoadAddr = ' (' + extraRoadAddr + ')';
          }
          if (fullRoadAddr !== '') {
            fullRoadAddr += extraRoadAddr;
          }

          item.city = data.sido;
          item.zipcode = data.zonecode;
          item.street = data.sigungu + ' ' + fullRoadAddr;
          
          console.log('Updated item:', item);
        }
      }).open()
    },
    saveAddress (item) {
      const addressData = {
      city: item.city,
      street: item.street,
      zipcode: item.zipcode,
      detailAddress: item.default_street
      }
      axios.post("http://localhost:7777/mypage/saveAddress", addressData)
              .then((res) => {
                  console.log('Response data:', res.data);
                  this.myPageData = res.data;
              })
      }
    }
  }
</script>

<style>
  .text-center {
    text-align: center;
  }
</style>
