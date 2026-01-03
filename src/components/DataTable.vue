<script setup>
defineProps({
  data: Array,
})
</script>

<template>
  <table class="w-full text-sm border border-white/10 rounded-xl overflow-hidden">
    <thead class="bg-white/5">
      <tr>
        <th class="p-3 text-left">Slot</th>
        <th class="p-3">Item</th>
        <th class="p-3">Type</th>
        <th class="p-3">Monster</th>
        <th class="p-3">Location</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="b in data"
        :key="b.id"
        class="border-t border-white/10 hover:bg-white/5">
        <td class="p-3 font-bold">
          {{ b.slot_from }} → {{ b.slot_to }}
        </td>
        <td class="p-3">{{ b.item }}</td>
        <td class="p-3">
          <span class="px-2 py-1 rounded text-xs bg-indigo-600">
            {{ b.type }}
          </span>
        </td>
        <td class="p-3">{{ b.monster }}</td>
        <td class="p-3 opacity-70">{{ b.location }}</td>
      </tr>
    </tbody>
  </table>
</template>
