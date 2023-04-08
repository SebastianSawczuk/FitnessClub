using System.Data.SqlClient;

namespace FitnessClub.DBConnection
{
    public class DBConnection
    {
        SqlConnection con = new SqlConnection("server=127.0.0.1;uid=root;pwd=;database=FitnessClub");
    }
}
