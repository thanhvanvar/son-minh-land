import { supabase } from "../../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  try {
    const { filterParams } = req.body;
    const { data, error } = await supabase
      .from(filterParams.tableBase)
      .update(filterParams.obj)
      .eq("id", String(filterParams.obj.id));
    if (error) {
      console.log("Error:", error.message);
      return res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return res.status(500).json({ error: 'Lỗi server' });
  }
}
