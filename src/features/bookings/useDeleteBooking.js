import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success(`booking deleted successfully`);
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
  });
  return { deleteBooking, isDeleting };
}

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
// export function useDeleteCabin() {
//   const queryClient = useQueryClient();
//   const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
//     mutationFn: (id) => deleteCabinApi(id),
//     onSuccess: () => {
//       toast.success("cabin successfully deleted");
//       queryClient.invalidateQueries({
//         queryKey: ["cabins"],
//       });
//     },
//     onError: (err) => toast.error(err.message),
//   });
//   return { isDeleting, deleteCabin };
// }
