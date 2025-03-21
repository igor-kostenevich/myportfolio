<template>
  <div class="overflow-auto p-10">
    <h2 class="text-3xl font-medium mb-5">Tailwind colors table</h2>
    <table class="min-w-full border border-gray-200">
      <thead>
        <tr>
          <th class="border p-2">Color</th>
          <th v-for="shade in shades" :key="shade" class="border p-2">
            {{ shade }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(color, name) in colors" :key="name">
          <td class="border p-2 font-bold">{{ name }}</td>
          <td v-for="shade in shades" :key="shade" class="border p-2 text-center">
            <div class="w-10 h-10 mx-auto rounded" :style="{ backgroundColor: color[shade] }"></div>
            
            <div class="text-xs mt-1">{{ color[shade] }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
      colors: {
        red: {
          50: '#fee2e2', 100: '#fecaca', 200: '#fca5a5', 300: '#f87171',
          400: '#ef4444', 500: '#dc2626', 600: '#b91c1c', 700: '#991b1b',
          800: '#7f1d1d', 900: '#450a0a', 950: '#7f1d1d'
        },
        orange: {
          50: '#ffedd5', 100: '#fed7aa', 200: '#fdba74', 300: '#fb923c',
          400: '#f97316', 500: '#ea580c', 600: '#c2410c', 700: '#9a3412',
          800: '#7c2d12', 900: '#65161b', 950: '#4a1717'
        },
        amber: {
          50: '#fef3c7', 100: '#fde68a', 200: '#fcd34d', 300: '#fbbf24',
          400: '#f59e0b', 500: '#d97706', 600: '#b45309', 700: '#92400e',
          800: '#78350f', 900: '#5a2312', 950: '#451a03'
        },
        yellow: {
          50: '#fef9c3', 100: '#fef08a', 200: '#fde047', 300: '#facc15',
          400: '#eab308', 500: '#ca8a04', 600: '#a16207', 700: '#854d0e',
          800: '#713f12', 900: '#4e3014', 950: '#422006'
        },
        green: {
          50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac',
          400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d',
          800: '#166534', 900: '#14532d', 950: '#052e16'
        },
        blue: {
          50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
          400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
          800: '#1e40af', 900: '#1e3a8a', 950: '#172554'
        },
        purple: {
          50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe',
          400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce',
          800: '#6b21a8', 900: '#581c87', 950: '#3b0764'
        },
        pink: {
          50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4',
          400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d',
          800: '#9d174d', 900: '#831843', 950: '#500724'
        },
        gray: {
          50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db',
          400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151',
          800: '#1f2937', 900: '#111827', 950: '#030712'
        }
      }
    };
  }
};
</script>

<style>
th, td {
  text-align: center;
}
</style>