import { supabase } from "../../../../lib/supabaseClient";

export default async function handler(req, res) {
  const { deleted } = req.query;

  try {
    const { data, error } = await supabase
      .from("projects")
      .select(`*`)
      .eq("deleted", deleted)
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
