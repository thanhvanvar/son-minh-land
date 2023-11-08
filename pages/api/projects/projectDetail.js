import { supabase } from "../../../lib/supabaseClient";

export default async function handler(req, res) {
  const { id } = req.query;
  console.log(id);
  try {
    const { data, error, status } = await supabase
      .from("projects")
      .select(`*`)
      .eq("id", id)
      .single();
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
