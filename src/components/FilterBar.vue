<script setup>
defineProps({
  modelValue: String,
  search: String,
})
defineEmits(['update:modelValue', 'update:search'])
</script>

<template>
  <div class="flex justify-between mb-4 gap-4">
    <input
      :value="search"
      @input="$emit('update:search', $event.target.value)"
      placeholder="Search item..."
      class="px-4 py-2 rounded w-full bg-[#020617] border border-white/10" />

    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="px-4 py-2 rounded bg-[#020617] border border-white/10">
      <option>All</option>
      <option>Boss</option>
      <option>Mob</option>
      <option>Spina</option>
    </select>
  </div>
</template>
