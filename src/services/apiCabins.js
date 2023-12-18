import supabase from "./supabase";
// import supabaseUrl from "../ui/supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}
export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(
    "https://venlgfhrzjdsecbwqhyp.supabase"
  );

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `https://venlgfhrzjdsecbwqhyp.supabase.co/storage/v1/object/public/cabins-images/${imageName}`;

  // 1: Create a cabin
  let query = supabase.from("cabins");
  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  // B) EDIT
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  const { data, error } = await query.select().single();
  if (error) {
    throw new Error("Cabins could not be created");
  }
  if (hasImagePath) return;
  // 2: upload an image

  const { data: cabinData, error: storageError } = await supabase.storage
    .from("cabins-images")
    .upload(imageName, newCabin.image);
  // 3 : Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", cabinData.id);
    console.error(error);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created "
    );
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}
