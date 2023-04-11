<template>
    <div>
        <v-card>
            <v-container>
                <v-row>
                    <v-col cols="12">
                    <v-text-field label="Current Password" outlined type="password"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                    <v-text-field label="New Password" outlined type="password"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                    <v-text-field label="Confirm New Password" outlined type="password"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                    <v-btn color="primary">Save</v-btn>
                    <v-btn color="secondary">Cancel</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script>
export default {
name: 'PassWordChangeForm'
}
</script>
