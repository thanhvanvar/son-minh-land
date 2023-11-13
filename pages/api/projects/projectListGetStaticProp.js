import {supabase} from "../../../lib/supabaseClient";

export default async function handler(req, res) {
    try {
        const query = supabase
            .from('projects')
            .select('*')
        const {data, error} = await query
            .eq('active', '1')
            .eq('deleted', '0')
            .order('date_added', {ascending: false})
            .range(0, 7);
        if (error) {
            console.log('Error:', error.message);
        } else {
            res.status(200).json(data)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Internal server error'})
    }
}
