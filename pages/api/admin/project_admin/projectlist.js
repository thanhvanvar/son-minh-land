import { supabase } from "../../../../lib/supabaseClient";

export default async function handler(req, res) {
  const { page, limit } = req.query;

  try {
    const { data, error } = await supabase
      .from("projects")
      .select(`*`)
      .range((page - 1) * limit, (page - 1) * limit + (limit - 1))
      .eq("deleted", req.query.deleted)
      .order("date_added", { ascending: false });
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
