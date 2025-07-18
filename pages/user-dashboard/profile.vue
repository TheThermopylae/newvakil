<template>
  <TheBreadCrumbs :title="'پروفایل'"></TheBreadCrumbs>
  <UserPanelProfileUserDataSection
    :showInformationForm="showInformationForm"
    @toggleForm="toggleInfoForm"
  />
  <UserPanelProfileExpertiseSection
    :showExpertiseForm="showExpertiseForm"
    @toggleForm="toggleExpertiseForm"
  />
</template>

<script setup>
useHead({
  title: '| پروفایل'
})

let showInformationForm = ref(false)
let showExpertiseForm = ref(false)

function toggleInfoForm () {
  showExpertiseForm.value = false
  showInformationForm.value = !showInformationForm.value
}

function toggleExpertiseForm () {
  showInformationForm.value = false
  showExpertiseForm.value = !showExpertiseForm.value
}
</script>
