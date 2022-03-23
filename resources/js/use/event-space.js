import { reactive, computed, toRefs } from "vue";
export default function useEventSpace() {
  const event = reactive({
    capacity: 4,
    attending: ["teo", "tamiunda", "zhuna"],
    spacesLeft: computed(() => {
      return event.capacity - event.attending.length;
    }),
  });

  function increaseCapacity() {
    event.capacity++;
  }
  return { ...toRefs(event), increaseCapacity };
}
