using FitnessClub.Models;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using System.Globalization;
using System.Net.Sockets;
using System.Security.Cryptography.X509Certificates;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FitnessClub.Controllers
{
    [Route("client_ticket")]
    [ApiController]
    public class Client_TicketController : ControllerBase
    {
        private readonly ILogger<Client_TicketController> _logger;

        public Client_TicketController(ILogger<Client_TicketController> logger)
        {
            _logger = logger;
        }
        MySqlConnection con = new MySqlConnection("server=127.0.0.1;user=root;database=FitnessClub");

        // GET: api/<Client_TicketController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<Client_TicketController>/5
        [HttpGet("{id}")]
        public Boolean Get(int id)
        {
            DateTime currentDate = DateTime.Now;
            DateOnly date = DateOnly.FromDateTime(currentDate);
            con.Open();
            MySqlCommand cmd = new MySqlCommand($"select * from client_ticket where id_c = '{id}';", con);
            MySqlDataReader reader = cmd.ExecuteReader();

            bool temp = false;
            int i;

            List<Client_Ticket> client_tickets = new List<Client_Ticket>();

            while (reader.Read())
            {
                Client_Ticket client_ticket = new Client_Ticket();
                client_ticket.Id = reader.GetInt32(0);
                client_ticket.Id_Ticket = reader.GetInt32(1);
                client_ticket.Id_Client = reader.GetInt32(2);
                client_ticket.Date = DateOnly.Parse(reader.GetString(3));

                client_tickets.Add(client_ticket);
            }
            con.Close();


            foreach(Client_Ticket cl in client_tickets)
            {
                i = date.CompareTo(cl.Date);
                if(i > 0) { temp = false; } else { temp = true; break; }
                
            }

            return temp;
        }

        // POST api/<Client_TicketController>
        [HttpPost]
        public void Post([FromBody] Client_Ticket client_ticket)
        {
            DateTime currentDate = DateTime.Now.AddMonths(client_ticket.Id);
            DateOnly date = DateOnly.FromDateTime(currentDate);
            con.Open();
            MySqlCommand cmd = new MySqlCommand($"insert into client_ticket(id_t, id_c, date) values({client_ticket.Id_Ticket}, {client_ticket.Id_Client}, '{date}');", con);
            cmd.ExecuteNonQuery();
            con.Close();
        }

        // PUT api/<Client_TicketController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<Client_TicketController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
