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
                    <v-btn class="sunghee v-btn" @click="editEmail(item)">Edit</v-btn>
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
                <v-text-field v-model="item.addressDetail" label="Default Address" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row v-if="item.city">
              <v-col cols="6">
                <v-btn class="sunghee v-btn" @click="callDaumAddressApi(item)">Edit Address</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn class="sunghee v-btn" @click="saveAddressHandler(item)">Save Address</v-btn>
              </v-col>
            </v-row>

            <v-row v-else>
              <v-col cols="12">
                <v-btn class="sunghee v-btn" @click="callDaumAddressApi(item)">Edit Address</v-btn>
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
import { mapActions } from 'vuex';

export default {
  name: "ChangeAddressForm",
  
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
  ...mapActions('mypage', ['saveAddress']),

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

  saveAddressHandler(item) {
    const addressData = {
      memberId: JSON.parse(localStorage.getItem("userInfo")).id,
      city: item.city,
      street: item.street,
      zipcode: item.zipcode,
      addressDetail: item.addressDetail,
    };
    console.log(addressData);
    this.saveAddress(addressData);
  },
  }
}
</script>

<style>
</style>