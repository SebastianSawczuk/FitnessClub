namespace FitnessClub.Models
{
    public class Client_Ticket
    {
        public int Id { get; set; }
        public int Id_Ticket { get; set; }
        public int Id_Client { get; set; }
        public bool Actual { get; set; }
        public DateOnly Date { get; set; }
    }
}
