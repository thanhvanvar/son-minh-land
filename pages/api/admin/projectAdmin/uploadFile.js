import { supabase } from "../../../../lib/supabaseClient";

export default async function handler(req, res) {
  try {
    const { data, error } = await supabase.storage
      .from("project_image")
      .upload(uuidv4(), e);
    if (error) {
      console.log("Error:", error.message);
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
